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
    async fetchFiles(ctx, page) {
        try {
            const files = await this.$axios.$get(`files?page=${page}&limit=50`)
                // const files = await this.$axios.$get('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `files?page=${page}&limit=10`)
                .then(res => {
                    return res
                })
            if (files) {
                ctx.commit('setFiles', files)
            }
        } catch (error) {
            console.log(error);
        }
    }
}