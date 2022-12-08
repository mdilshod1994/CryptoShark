export const state = () => ({
    comments: []
})

export const getters = {
    COMMENTS(state) {
        return state.comments
    }
}
export const mutations = {
    setComments(state, comments) {
        state.comments = comments
    }
}
export const actions = {
    async fetchComments(ctx) {
        try {
            const comments = await this.$axios.$get('articlesComments?limit=-1').then(res => {
                return res.data
            })
            if (comments) {
                ctx.commit('setComments', comments)
            }
        } catch (error) {
            console.log(error);
        }

    }
}