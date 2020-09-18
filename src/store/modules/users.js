import APIV1 from "../../services/api"


const state = {
    users: [],
    products: [],
}

const mutations = {
    setProductList(state, payload) {
        state.products = payload;
    },
    setBoolean(state, payload) {
        state[payload.key] = payload.value;
    },
}

const actions = {
    async getProduct({
        commit
    }) {
        const {
            data
        } = await APIV1.get("/product");
        console.log(data.data.data, " ini get ");
        commit("setProductList", data.data.data);
    },
}

export default {
    state,
    mutations,
    actions
}