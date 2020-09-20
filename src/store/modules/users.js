import APIV1 from "../../services/api"


const state = {
    users: [],
}

const mutations = {
    setUsersList(state, payload) {
        state.users = payload
    }
}

const actions = {
    /**
     * @GET
     */
    async getUser({ commit }) {
        const { data } = await APIV1.get("/user", {
            headers: { Authorization: `bearer ${localStorage.getItem("token")}` }
        })
        // console.log(data.data.data, " INI USER DARI ACTION ")
        commit("setUsersList", data.data.data)
    },
}

export default {
    state,
    mutations,
    actions
}