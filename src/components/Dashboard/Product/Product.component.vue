<template>
    <!-- Home-->
    <div class="w-full flex">
        <SideBar />
        <div class="w-5/6 bg-gray-500 text-center h-screen">
            <div class="w-11/12 container-dashboard bg-white mx-auto">
                <div class="pt-6">
                    <AddProduct />
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
                                    <button
                                        class="mr-2 py-2 px-3 bg-green-500 border rounded-md text-white"
                                    >
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button
                                        class="mr-2 py-2 px-3 bg-red-500 border rounded-md text-white"
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
    import SideBar from "@/components/Sidebar/SideBar.component";
    import AddProduct from "@/components/Modal/AddProduct.component";
    import { mapActions, mapState } from "vuex";
    export default {
        name: "Product",
        components: {
            SideBar,
            AddProduct,
        },
        props: {},
        data() {
            return {};
        },
        computed: {
            ...mapState(["products"]),
        },
        methods: {
            ...mapActions(["getProduct"]),
        },
        created() {
            this.getProduct();
        },
    };
</script>

<style scoped>
    .float-left {
        text-align: left !important;
    }
</style>
