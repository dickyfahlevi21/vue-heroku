<template>
    <!-- Home-->
    <div v-if="isAuthenticated" class="w-full flex">
        <SideBar />
        <div class="w-5/6 bg-gray-500 text-center h-screen">
            <div class="w-11/12 container-dashboard bg-white mx-auto">
                <div class="pt-6">
                    {{ isAuthenticated }}
                    <div class="card-home mx-auto p-4">
                        <p class="text-2xl">Total All Product</p>
                        <p class="text-2xl font-bold">18</p>
                    </div>
                    <div class="card-home mx-auto p-4">
                        <p class="text-2xl">Total Product IN</p>
                        <p class="text-2xl font-bold">18</p>
                    </div>
                    <div class="card-home mx-auto p-4">
                        <p class="text-2xl">Total Product OUT</p>
                        <p class="text-2xl font-bold">18</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/components/Sidebar/SideBar.component";
    import { mapGetters } from "vuex";
    export default {
        name: "Home",

        components: {
            SideBar,
        },
        data() {
            return {};
        },
        computed: {
            ...mapGetters(["isAuthenticated"]),
        },
        created() {},
    };
</script>

<style>
    .card-home {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        box-sizing: border-box;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        width: 60%;
        margin-top: 20px;
    }
    .container-dashboard {
        height: 85% !important;
        margin-top: 5% !important;
    }

    .bg-gray-500 {
        background-color: #f6f6f6 !important;
    }
</style>
