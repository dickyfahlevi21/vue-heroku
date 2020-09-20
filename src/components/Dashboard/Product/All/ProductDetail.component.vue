<template>
  <div class="w-full flex">
        <SideBar />
        <div class="w-5/6 bg-gray-500 h-screen">
            <TabPanel/>
            <div class="w-11/12 bg-white mx-auto">
                <div class="pt-6">
                    <AddProduct />
                    <div class="mt-12 w-full">
                        <div class="w-full float-left ml-4 mb-4">
                            <router-link to="/dashboard-product" class="text-blue-500 font-bold text-left">Product</router-link> / 
                            <p class="text-gray-500 inline-block text-left">Detail</p>
                        </div>
                        <div class="ml-4">
                            <img v-bind:src="productAll.photo_url" class="w-2/12 inline-block" />
                            <div class="inline-block ml-4 pt-6">
                                <p>ID: {{ productAll.id }}</p>
                                <p>Nama Product:  {{ productAll.name }}</p>
                                <p>Stock: {{ productAll.stock }}</p>
                                <p>Price: {{ productAll.price | currency }}</p>
                                <p>Nama Supplier: {{ productAll.supplier.full_name }}</p>
                                <p>Peran: {{ productAll.supplier.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/components/Sidebar/SideBar.component"
    import AddProduct from "@/components/Modal/Add/AddProduct.component"
    import TabPanel from "@/components/TabPanel/TabPanel.component"
    import { mapActions, mapState } from "vuex"

    export default {
        name: "ProductDetail",
        components: {
            SideBar,
            AddProduct,
            TabPanel
        },
        data() {
            return {
                productAll: [],
            };
        },
        computed: {
            ...mapState(["products"]),
        },
        methods: {
            ...mapActions(["getProduct"]),
            getProductId(){
                this.productAll = this.products.products.filter(
                (productAll) => productAll.id == this.$route.params.id)[0]
            }
        },
        created() {
            this.getProductId()
        },
    };
</script>

<style scoped></style>
