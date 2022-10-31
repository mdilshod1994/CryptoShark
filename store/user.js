export const state = () => ({
    token: null
})

export const getters = {
    hasToken(state) {
        return !!state.token
    }
}

export const mutations = {
    setData(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    async login({ commit }, data) {
        try {
            const res = await this.$api.user.loginUser({ email: data.email, password: data.password })
            this.$cookieService.setCookie('user', res)
            commit('setData', res)
            return res
        } catch (e) {
            console.error(e);
        }
    },
    logout(ctx) {
        this.$cookies.remove('user')
        ctx.commit('clearToken')
    },
}