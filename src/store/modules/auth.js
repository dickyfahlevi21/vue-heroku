import APIV1 from "@/services/api"
import router from "@/router/index"
import Storage from "@/helpers/storage"

const state = {
    token: "",
    userData: "",
    postLoading: false,
    isAuthenticating: Storage.get("token")
}

const getters = {
    isAuthenticated: (state) => {
        return state.isAuthenticating
    }
}
const mutations = {
    setProductList(state, payload) {
        state.products = payload
    },
    setToken(state, payload) {
        state.token = payload.data
    },
    setUserData(state, payload) {
        state.userData = payload.data
    },
    setBoolean(state, payload) {
        state[payload.key] = payload.value
    }
}

const actions = {
    /**
     * @POST
     */
    async registerAction({ commit }, payload) {
        commit("setBoolean", {
            key: "postLoading",
            value: true,
        })
        APIV1.post("/auth/signup",
            JSON.stringify({ data: payload })
        )
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
        commit("setBoolean", {
            key: "postLoading",
            value: false,
        })
    },
    async LogIn({ commit }, payload) {
        APIV1.post("/auth/login", JSON.stringify({ data: payload }))
            .then((res) => {
                const { data: { data }} = res
                commit("setToken", data.token)
                commit("setUserData", data.id)
                // console.log(data.token, "ini token")
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", data.id)
                router.push({ name: "Home" })
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}