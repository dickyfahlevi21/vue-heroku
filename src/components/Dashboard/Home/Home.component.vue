<template>
  <!-- Home-->
  <div class="w-full flex">
    <SideBar />
    <div class="w-5/6 bg-gray-500 text-center h-screen">
    <!-- Tab Dashboard -->
      <div class="tab text-left mt-10 ml-16">
        <router-link to="/dashboard-home">
            <button class="color-primary inline-block py-4 text-left px-3 rounded-t">
                <i class="fas fa-chart-line inline-block mr-3"></i>
                <p class="text-base inline-block font-bold">Dashboard</p>
            </button>
        </router-link>
      </div>
      <!-- Content -->
      <div class="w-11/12 bg-white mx-auto">
        <div class="pt-6 flex flex-wrap">
          <div class="w-full md:w-1/2 mx-auto p-4">
            <div class="card-home py-4 w-4/5 mx-auto">
              <i class="fas fa-user-friends text-2xl"></i>
              <p class="text-2xl">Total User</p>
              <p class="text-2xl font-bold">{{ getTotal.userTotal }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mx-auto p-4">
            <div class="card-home py-4 w-4/5 mx-auto">
              <i class="fas fa-boxes text-4xl"></i>
              <p class="text-2xl">Total Product</p>
              <p class="text-2xl font-bold">{{ getTotal.productTotal }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mx-auto p-4">
            <div class="card-home py-4 w-4/5 mx-auto">
              <i class="fas fa-sign-in-alt text-4xl"></i>
              <p class="text-2xl">Total Product IN</p>
              <p class="text-2xl font-bold">{{ getTotal.productInTotal }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mx-auto p-4">
            <div class="card-home py-4 w-4/5 mx-auto">
              <i class="fas fa-sign-out-alt text-4xl"></i>
              <p class="text-2xl">Total Product OUT</p>
              <p class="text-2xl font-bold">{{ getTotal.productOutTotal }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar/SideBar.component";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["users", "products", "productIn", "productOut"]),
    getTotal() {
      const userTotal = this.users.users.length;
      const productTotal = this.products.products.length;
      const productInTotal = this.products.productIn.length;
      const productOutTotal = this.products.productOut.length;
      return { userTotal, productTotal, productInTotal, productOutTotal };
    },
  },
  methods: {
    ...mapActions(["getUser", "getProduct", "getProductIn", "getProductOut"]),
  },
  created() {
    this.getUser();
    this.getProduct();
    this.getProductIn();
    this.getProductOut();
  },
};
</script>

<style>
.card-home {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-top: 20px;
}

.bg-gray-500 {
  background-color: #f6f6f6 !important;
}

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