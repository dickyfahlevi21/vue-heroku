<template>
  <div class="w-full max-w-xs mx-auto mt-10">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="registerForm">
        <h2 class="font-bold text-xl text-center mb-8">Register</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nama Pengguna
          </label>
          <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Kata Sandi
          </label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nama Lengkap
          </label>
          <input v-model="full_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nomor Handphone
          </label>
          <input v-model="phone_number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="username" type="text">
        </div>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
            Daftar
          </button>
        <router-link to="/login" class="w-full text-center mx-auto font-bold text-blue-500"><p>Batal</p></router-link>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Task Vue X Heroku. All rights reserved.
      </p>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'Register',
  data() {
    return {
      full_name: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
    };
  },
  methods: {
    registerForm() {
      const payload = {
        full_name: this.full_name,
        username: this.username,
        password: this.password,
        email: this.email,
        phone_number: this.phone_number,
      };
      this.registerAction(payload);
      return false;
    },
    ...mapActions(["registerAction"]),
  },
}
</script>

<style scoped>

</style>
