<template>
  <div>
    <button
      class="float-left text-base rounded-md border-2 border-blue-500 text-blue-500 ml-4 mb-5 py-2 px-4"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      <i class="fas fa-plus-circle inline-block"></i>
      <p class="inline-block ml-2">Update Product IN</p>
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
      <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form
            @submit.prevent="updateProductsIn"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">Update Product IN</h1>
            <div class="relative">
                <label  class="text-left block text-gray-700 text-base font-bold">Pilih ID Product</label>
                <select 
                    v-model="id"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                >
                    <option
                      v-for="(product, idx) in products.productIn"
                      :key="idx"
                      :value="product.id"
                    >
                      {{ product.id }}
                    </option>
                </select>
            </div>
            <!-- Product Name -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="total"
              >Total</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="total"
                type="text"
              />
            </div>


            <div class="mt-6">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >Update</button>

              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                @click="toggleModal()"
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "updateProductIn",
    components: {},
    data() {
        return {
            showModal: false,
            id: "",
            total: ""
        };
    },
    computed: {
        ...mapState(["products"]),
    },
    methods: {
    toggleModal() {
        this.showModal = !this.showModal;
    },
    updateProductsIn() {
        const payload = {
            id: this.id,
            total: parseInt(this.total),
        }
        this.updateProductIn(payload);
        this.showModal = false;
    },
    ...mapActions(["updateProductIn", "getProductIn"]),
    },
    created() {
        this.getProductIn()
    }
};
</script>
