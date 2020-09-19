import APIV1 from "../../services/api"


const state = {
    products: [],
    productIn: [],
    productOut: []
}

const mutations = {
    setProductList(state, payload) {
        state.products = payload
    },
    setProductIn(state, payload) {
        state.productIn = payload
    },
    setProductOut(state, payload) {
        state.productOut = payload
    }
}

const actions = {
    async getProduct({
        commit
    }) {
        const {
            data
        } = await APIV1.get("/product", {
            headers: {
                Authorization: `bearer ${localStorage.getItem("token")}`
            }
        });
        // console.log(data.data.data, " INI PRODUCTS DARI ACTION ");
        commit("setProductList", data.data.data);
    },
    async getProductIn({
        commit
    }) {
        const {
            data
        } = await APIV1.get("/in", {
            headers: {
                Authorization: `bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(data.data.data, " INI PRODUCTS IN DARI ACTION ");
        commit("setProductIn", data.data.data);
    },
    async getProductOut({
        commit
    }) {
        const {
            data
        } = await APIV1.get("/out", {
            headers: {
                Authorization: `bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(data.data.data, " INI PRODUCTS OUT DARI ACTION ");
        commit("setProductOut", data.data.data);
    },
}

export default {
    state,
    mutations,
    actions
}