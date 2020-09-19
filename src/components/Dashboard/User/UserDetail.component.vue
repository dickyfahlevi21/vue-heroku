<template>
  <div class="w-full flex">
        <SideBar />
        <div class="w-5/6 bg-gray-500 h-screen">
            <div class="w-11/12 container-dashboard bg-white mx-auto">
                <div class="pt-6">
                    <div class="mt-12 w-full">
                        <div class="w-full float-left ml-4 mb-4">
                            <router-link to="/dashboard-user" class="text-blue-500 font-bold text-left">User</router-link> / 
                            <p class="text-gray-500 inline-block text-left">Detail</p>
                        </div>
                        <div class="ml-4">
                            <div class="ml-4 pt-6">
                                <p>ID: {{ user.id }}</p>
                                <p>Nama Lengkap:  {{ user.full_name }}</p>
                                <p>Nama Pengguna: {{ user.username }}</p>
                                <p>Email: {{ user.email }}</p>
                                <p>Nomor Handphone: {{ user.phone_number }}</p>
                                <p>Peran: {{ user.role }}</p>
                            </div>
                        </div>
                        <!-- <p>{{ album.id }}</p>
                        <p>{{ album.title }}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from "@/components/Sidebar/SideBar.component"
    import { mapActions, mapState } from "vuex"

   export default {
        name: "User",
        components: {
            SideBar,
        },
        data() {
            return {
                user: [],
            };
        },
        computed: {
            ...mapState(["users"]),
        },
        methods: {
            ...mapActions(["getUser"]),
            getUserId(){
                this.user = this.users.users.filter(
                (user) => user.id == this.$route.params.id)[0]
            }
        },
        created() {
            this.getUser();
            this.getUserId()
        },
    };
</script>

<style scoped></style>
