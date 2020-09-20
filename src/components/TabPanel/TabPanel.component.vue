<template>
    <div class="tab text-left mt-10 ml-16">
        <router-link to="/dashboard-product">
            <button class="color-primary inline-block py-4 text-left px-3 rounded-t">
                <i class="fas fa-boxes inline-block mr-3"></i>
                <p class="text-base inline-block font-bold">Product All</p>
            </button>
        </router-link>
        <router-link to="/dashboard-product-in">
            <button class="color-primary inline-block py-4 text-left px-3 rounded-t">
                <i class="fas fa-sign-in-alt inline-block mr-3"></i>
                <p class="text-left text-base inline-block font-bold">
                    Product In
                </p>
            </button>
        </router-link>
        <router-link to="/dashboard-product-out">
            <button class="color-primary inline-block py-4 text-left px-3 rounded-t">
                <i class="fas fa-sign-out-alt inline-block mr-3"></i>
                <p class="text-left text-base inline-block font-bold">
                    Product Out
                </p>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TabPanel'
}
</script>

<style>
    .tab a {
        font-weight: bold;
        color: #ffffff;
        padding: 20px 0;
        background-color: #4299e1;
        border-radius: 4px 4px 0 0;
        margin: 0 2px;
    }

    .tab a.router-link-exact-active {
        font-weight: bold;
        color: #4A5568;
        padding: 20px 0;
        background-color: #ffffff;
        border-radius: 4px 4px 0 0;
        margin: 0 2px;
    }

    .tab a:hover {
        color: #ffffff;
        padding: 20px 0;
        background-color: #4299e1;
        border-radius: 4px 4px 0 0;
        margin: 0 2px;
    }
</style>