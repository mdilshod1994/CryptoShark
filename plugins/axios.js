import { Cookies } from '@/services/cookie'
import { UserService } from "@/services/user"

export default function ({ $axios, app, redirect, store }, inject) {
    $axios.onRequest(request => {
        const accessData = app.$cookies.get('user')
        if (accessData) {
            $axios.setToken(accessData.token, 'Bearer')
        }
        return request
    }, er => console.log(er))
    $axios.onResponseError(error => {
        const code = parseInt(error.response.status)
        if (code === 401) {
            store.dispatch('user/logout')
            redirect('/?message=session')
        }
        return Promise.reject(error)
    })
    const api = {
        user: new UserService($axios),
    }
    const cookieService = new Cookies(app.$cookies)
    inject('cookieService', cookieService)
    inject('api', api)
}

