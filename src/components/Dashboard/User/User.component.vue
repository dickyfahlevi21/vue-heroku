<template>
  <!-- Home-->
  <div class="w-full flex">
    <SideBar />
    <div class="w-5/6 bg-gray-500 text-center h-screen">
      <div class="w-11/12 container-dashboard bg-white mx-auto">
        <div class="pt-6">
        <AddUser />

          <table class="table-auto mt-12 w-full">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 w-1/5 py-4 text-left">Nama Lengkap</th>
                <th class="px-4 w-1/5 py-4 text-left">Nama Pengguna</th>
                <th class="px-4 w-1/5 py-4 text-left">Email</th>
                <th class="px-4 w-1/5 py-4 text-left">Nomor Handphone</th>
                <th class="px-4 w-1/5 py-4"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="px-4 w-1/5 py-4 text-left">121212</td>
                <td class="px-4 w-1/5 py-4 text-left">121212</td>
                <td class="px-4 w-1/5 py-4 text-left">121212</td>
                <td class="px-4 w-1/5 py-4 text-left">121212</td>
                <td class="px-4 w-1/5 py-4">
                  <button class="mr-2 py-2 px-3 bg-green-500 border rounded-md text-white">
                      <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button class="mr-2 py-2 px-3 bg-red-500 border rounded-md text-white">
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
import SideBar from '@/components/Sidebar/SideBar.component'
import AddUser from '@/components/Modal/AddUser.component'
export default {
  name: 'User',
  components: {
    SideBar,
    AddUser
  },
  props: {}
}
</script>

<style scoped>

.add-user {
    width: 253px;
    border: 1px solid #4299E1;
    box-sizing: border-box;
    border-radius: 8px;
}
</style>
