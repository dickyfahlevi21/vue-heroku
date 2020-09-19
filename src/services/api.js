import axios from 'axios'


const APIV1 = axios.create({
    baseURL: `https://simple-wms.herokuapp.com/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
})
APIV1.interceptors.request.use(
    (config) => {
        console.log({
            request: config
        });
        return config;
    },
    (error) => Promise.reject(error)
);
APIV1.interceptors.response.use(
    function (response) {
        console.log({
            response
        });
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default APIV1;