<template>
    <!-- Home-->
    <div class="w-full flex">
        <SideBar />        
        <div class="w-5/6 bg-gray-500 text-center h-screen">
            <TabPanel/>
            <div class="w-11/12 bg-white mx-auto">
                <div class="pt-6">
                    <AddProductIn />
                    <UpdateProductIn />
                    <!-- Download Button -->
                    <button
                        class="float-right text-base rounded-md border-2 bg-blue-500 text-white mr-4 mb-5 py-2 px-4"
                        type="button"
                        @click="downloadFile"
                    >
                        <i class="fas fa-cloud-download-alt inline-block"></i>
                        <p class="inline-block ml-2">Download Product IN</p>
                    </button>
                    <!-- Table List -->
                    <table class="table-auto mt-12 w-full">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 w-1/5 py-4 text-left">Tanggal</th>
                                <th class="px-4 w-1/5 py-4 text-left">Nama Product</th>
                                <th class="px-4 w-1/6 py-4 text-left">Total</th>
                                <th class="px-4 w-1/5 py-4 text-left">Stock</th>
                                <th class="px-4 w-1/5 py-4 text-left">Harga</th>
                                <th class="px-4 w-1/5 py-4"></th>
                            </tr>
                        </thead>

                        <tbody
                            v-for="(product, idx) in products.productIn"
                            :key="idx"
                        >
                            <tr>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.date }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.Product.name }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ product.total }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.Product.stock }}
                                </td>
                                <td class="px-4 w-1/5 py-4 text-left">
                                    {{ product.Product.price | currency }}
                                </td>
                                <td class="px-4 w-1/5 py-4">
                                    <button
                                        class="mr-2 py-2 px-3 bg-red-500 border rounded-md text-white"
                                        @click="deleteProductsIn(product.id)"

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
    import AddProductIn from "@/components/Modal/Add/AddProductIn.component"
    import UpdateProductIn from "@/components/Modal/Update/UpdateProductIn.component"
    import TabPanel from "@/components/TabPanel/TabPanel.component"
    import { mapActions, mapState } from "vuex"
    export default {
        name: "Product",
        components: {
            SideBar,
            AddProductIn,
            TabPanel,
            UpdateProductIn
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
            ...mapActions(["getProductIn", "deleteProductIn"]),
            deleteProductsIn(e) {
                this.deleteProductIn(e)
            },
            downloadFile(msg) {
                this.message = 'Mohon Maaf belum bisa Download'
                msg = this.message
                alert(msg)
            }
        },
        created() {
            this.getProductIn()
        },
    }
</script>

<style scoped>
    .float-left {
        text-align: left !important
    }

</style>
