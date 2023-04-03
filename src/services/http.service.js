import axios from 'axios'
import router from '@/router'
import authService from "./auth.service"

const API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT || "http://localhost/basic/web/"

let config = {
    baseURL: `${API_ENDPOINT}`
};

const httpClient = axios.create(config)

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${authService.getToken()}`
    return config
}

httpClient.interceptors.request.use(authInterceptor)

httpClient.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        if (error.response.status === 401) {
            await authService.logout()
        }
        if (error.response.status === 403) {
            await router.push({name: 'noAccess'})
        }
        return Promise.reject(error)
    }
)

export default httpClient