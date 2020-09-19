import axios from 'axios'


const APIV1 = axios.create({
    baseURL: `https://simple-wms.herokuapp.com/api/v1`,
    headers: {
        "Content-Type": "application/json"
    },
})
APIV1.interceptors.request.use(config => {
        return config
    },
    error => Promise.reject(error)
)
APIV1.interceptors.response.use(response => {
        return response
    },
    error => { return Promise.reject(error) }
)

export default APIV1