<template>
    <!-- Home-->
    <div class="w-full flex">
        <SideBar />        
        <div class="w-5/6 bg-gray-500 text-center h-screen">
            <TabPanel/>
            <div class="w-11/12 bg-white mx-auto">
                <div class="pt-6">
                    <AddProduct />
                    <UpdateProduct />
                    <!-- Download Button -->
                    <button
                        class="float-right text-base rounded-md border-2 bg-blue-500 text-white mr-4 mb-5 py-2 px-4"
                        type="button"
                        @click="downloadFile"
                    >
                        <i class="fas fa-cloud-download-alt inline-block"></i>
                        <p class="inline-block ml-2">Download Product All</p>
                    </button>
                    <!-- Table List -->
                    <table class="table-auto mt-12 w-full">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 w-1/5 py-4 text-left">
                                    Product Name
                                </th>
                                <th class="px-4 w-1/5 py-4 text-left">Stock</th>
                                <th class="px-4 w-1/5 py-4 text-left">Price</th>
                                <th class="px-4 w-1/5 py-4 text-left">
                                    Supplier
                                </th>
                                <th class="px-4 w-1/5 py-4"></th>
                            </tr>
                        </thead>


                        <tbody
                            v-for="(product, idx) in products.products"
                            :key="idx"
                        >
                            <tr>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.name }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.stock }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.price | currency }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.supplier.full_name }}
                                </td>
                                <td class="px-4 w-1/5 py-4">
                                    <router-link
                                        :to="`dashboard-product/${product.id}`"
                                        class="mr-2 py-3 px-3 bg-blue-500 border rounded-md text-white"
                                    >
                                        <i class="fas fa-eye"></i>
                                    </router-link>
                                    <button
                                        class="mr-2 py-2 px-3 bg-red-500 border rounded-md text-white"
                                        @click="deleteProduct(product.id)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/components/Sidebar/SideBar.component"
    import AddProduct from "@/components/Modal/Add/AddProduct.component"
    import TabPanel from "@/components/TabPanel/TabPanel.component"
    import UpdateProduct from "@/components/Modal/Update/UpdateProduct.component"
    import { mapActions, mapState } from "vuex"
    export default {
        name: "Product",
        components: {
            SideBar,
            AddProduct,
            TabPanel,
            UpdateProduct
        },
        props: {},
        data() {
            return {
                message: ''
            }
        },
        computed: {
            ...mapState(["products"]),
        },
        methods: {
            ...mapActions(["getProduct", "deleteProductById"]),
            editProduct(msg){
                this.message = 'Mohon Maaf belum bisa Edit'
                msg = this.message
                alert(msg)
            },
            deleteProduct(e) {
               this.deleteProductById(e)
            },
            downloadFile(msg) {
                this.message = 'Mohon Maaf belum bisa Download'
                msg = this.message
                alert(msg)
            }
        },
        created() {
            this.getProduct()
        },
    }
</script>

<style scoped>
    .float-left {
        text-align: left !important
    }

</style>
