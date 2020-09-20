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
    /**
     * @GET
     */
    async getProduct({ commit }) {
        const { data } = await APIV1.get("/product?limit=5&page=1", {
            headers: { Authorization: `bearer ${localStorage.getItem("token")}`}
        })
        // console.log(data.data.data, " INI PRODUCTS DARI ACTION ")
        commit("setProductList", data.data.data)
    },
    async getProductIn({ commit }) {
        const { data } = await APIV1.get("/in?limit=5&page=1", {
            headers: { Authorization: `bearer ${localStorage.getItem("token")}` }
        })
        // console.log(data.data.data, " INI PRODUCTS IN DARI ACTION ")
        commit("setProductIn", data.data.data)
    },
    async getProductOut({ commit }) {
        const { data } = await APIV1.get("/out?limit=5&page=1", {
            headers: { Authorization: `bearer ${localStorage.getItem("token")}` }
        })
        // console.log(data.data.data, " INI PRODUCTS OUT DARI ACTION ")
        commit("setProductOut", data.data.data)
    },

    /**
     * @POST
     */

    async addProduct(_, payload) {
        APIV1.post("/product", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    },
    async addProductIn(_, payload) {
        APIV1.post("/in/", JSON.stringify({ data: payload }), {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    },
    async addProductOut(_, payload) {
        APIV1.post("/out/", JSON.stringify({ data: payload }), {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            })
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    },

    /**
     * @DELETE
     */
    async deleteProductById(_, payload) {
        APIV1.delete(`/product/${payload}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
          .then(res => {
            alert(res.data.message)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
    },
    async deleteProductIn(_, payload) {
        APIV1.delete(`/in/${payload}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
          .then(res => {
            alert(res.data.message)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
    },
    async deleteProductOut(_, payload) {
        APIV1.delete(`/out/${payload}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
          .then(res => {
            alert(res.data.message)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
    },

    /**
     * @UPDATE
     */
    async updateProductById(_, payload) {
        APIV1.put(`/product/${payload.id}`, payload.dataPayload, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    },
    async updateProductIn(_, payload) {
        APIV1.put(`/in/${payload.id}`, payload, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    },
    async updateProductOut(_, payload) {
        APIV1.put(`/out/${payload.id}`, payload, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    },
}

export default {
    state,
    mutations,
    actions
}