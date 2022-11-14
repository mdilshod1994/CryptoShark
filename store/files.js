export const state = () => ({
    files: []
})

export const getters = {
    FILES(state) {
        return state.files
    }
}

export const mutations = {
    setFiles(state, files) {
        state.files = files
    }
}

export const actions = {
    async fetchFiles(ctx) {
        const files = await this.$axios.$get('/files')
            .then(res => {
                return res.data
            })
        if (files) {
            ctx.commit('setFiles', files)
        }
    }
}