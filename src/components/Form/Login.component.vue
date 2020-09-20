<template>
    <div class="w-full max-w-xs mx-auto mt-12">
        <h1 class="font-light text-3xl text-center mb-6">Task Vue X Heroku</h1>
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="loginForm()"
        >
            <h2 class="font-bold text-xl text-center mb-8">Login</h2>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >Nama Pengguna</label
                >
                <input
                    v-model="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                />
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                    >Kata Sandi</label
                >
                <input
                    v-model="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                />
            </div>
            <!-- Button Masuk -->
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
            >
                Masuk
            </button>
            <div class="mt-2">
                <p class="inline-block">Belum punya akun?</p>
                <router-link to="/register" class="text-blue-500 ml-2 font-bold"
                    >Daftar</router-link
                >
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 Task Vue X Heroku. All rights reserved.
        </p>
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex";

    export default {
        name: "Login",
        data() {
            return {
                username: "dickyfahlevi21",
                password: "123456789",
            };
        },
        methods: {
            loginForm() {
                const payload = {
                    username: this.username,
                    password: this.password,
                };
                // console.log(payload, " ini payload ");
                this.LogIn(payload);
            },
            ...mapActions(["LogIn"]),
        },
        computed: {
            ...mapState(["userData", "token"]),
        },
    };
</script>

<style scoped></style>
