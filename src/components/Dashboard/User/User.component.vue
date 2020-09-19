<template>
    <!-- Home-->
    <div class="w-full flex">
        <SideBar />
        <div class="w-5/6 bg-gray-500 text-center h-screen">
            <div class="w-11/12 container-dashboard bg-white mx-auto">
                <div class="">
                    <table class="table-auto w-full">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 w-1/6 py-4 text-left">
                                    Nama Lengkap
                                </th>
                                <th class="px-4 w-1/6 py-4 text-left">
                                    Nama Pengguna
                                </th>
                                <th class="px-4 w-1/6 py-4 text-left">Email</th>
                                <th class="px-4 w-1/6 py-4 text-left">
                                    Nomor Handphone
                                </th>
                                <th class="px-4 w-1/6 py-4 text-left">
                                    Peran
                                </th>
                                <th class="px-4 w-1/6 py-4 text-left">
                                </th>
                            </tr>
                        </thead>

                        <tbody v-for="(user, idx) in users.users" :key="idx">
                            <tr>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ user.full_name }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ user.username }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ user.email }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ user.phone_number }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                    {{ user.role }}
                                </td>
                                <td class="px-4 w-1/6 py-4 text-left">
                                     <router-link
                                        :to="`dashboard-user/${user.id}`"
                                        class="mr-2 py-3 px-3 bg-blue-500 border rounded-md text-white"
                                    >
                                        <i class="fas fa-eye"></i>
                                    </router-link>
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

    import { mapState, mapActions } from "vuex";
    export default {
        name: "User",
        components: {
            SideBar,
        },
        computed: {
            ...mapState(["users"]),
        },
        methods: {
            ...mapActions(["getUser"]),
        },
        created() {
            this.getUser();
        },
    };
</script>

<style scoped>
    .add-user {
        width: 253px;
        border: 1px solid #4299e1;
        box-sizing: border-box;
        border-radius: 8px;
    }
</style>
