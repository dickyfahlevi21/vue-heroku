<template>
    <!-- Side bar -->
    <div class="w-1/6 text-center h-screen relative">
        <div
            class="rounded-full h-24 w-24 flex items-center justify-center mx-auto mt-12 shadow-outline"
        >
            <i class="far fa-user"></i>
        </div>
        <div id="nav" class="w-full mt-16">
            <router-link to="/dashboard-home">
                <button class="color-primary w-full py-4 text-left pl-3">
                    <i class="fas fa-chart-line inline-block mr-3"></i>
                    <p class="text-base inline-block font-bold">Dashboard</p>
                </button>
            </router-link>
            <router-link to="/dashboard-product">
                <button class="color-primary w-full py-4 text-left pl-3">
                    <i class="fas fa-archive inline-block mr-3"></i>
                    <p class="text-left text-base inline-block font-bold">
                        Product
                    </p>
                </button>
            </router-link>
            <router-link to="/dashboard-user">
                <button class="color-primary w-full py-4 text-left pl-3">
                    <i class="fas fa-users inline-block mr-3"></i>
                    <p class="text-left text-base inline-block font-bold">
                        User
                    </p>
                </button>
            </router-link>
        </div>
        <div class="footer-sidebar absolute bottom-0 left-0 right-0 pb-10">
            <router-link
                to="/login"
                class="w-full text-center mx-auto font-bold text-red-500"
                ><p>Keluar</p></router-link
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
    };
</script>

<style scoped></style>
