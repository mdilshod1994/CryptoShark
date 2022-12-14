export const state = () => ({
    projects: []
})

export const getters = {
    PROJECTS(state) {
        return state.projects
    }
}

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    }
}

export const actions = {
    async fetchProjects(ctx) {
        const projects = await this.$axios.$get('/projects')
            .then(res => {
                return res.data
            })
        if (projects) {
            ctx.commit('setProjects', projects)
        }
    }
}