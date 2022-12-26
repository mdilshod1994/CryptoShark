export const state = () => ({
    projects: [],
    frontProject: [],
    future: [],
    completed: [],
    active: [],
})

export const getters = {
    PROJECTS(state) {
        return state.projects
    },
    FRONT_PROJECTS(state) {
        return state.frontProject.data
    },
    FUTURE_PROJECTS(state) {
        return state.future
    },
    COMPLETED_PROJECTS(state) {
        return state.completed
    },
    ACTIVE_PROJECTS(state) {
        return state.active
    }
}

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    },
    setFrontProjects(state, projects) {
        state.frontProject = projects
    },
    setFutureType(state, projects) {
        state.future = projects
    },
    setCompletedType(state, projects) {
        state.completed = projects
    },
    setActiveType(state, projects) {
        state.active = projects
    },
}

export const actions = {
    async fetchProjects(ctx) {
        try {
            const projects = await this.$axios.$get('projects')
                .then(res => {
                    return res.data
                })
            if (projects) {
                ctx.commit('setProjects', projects)
            }
        } catch (error) {
            console.log(error);
        }
    },
    async fetchFrontProjects(ctx, params) {
        try {
            const projects = await this.$axios.$get(`front/projects?limit=${params.limits}&type=${params.type}`)
                .then(res => {
                    return res
                })
            if (projects) {
                ctx.commit('setFrontProjects', projects)
            }
        } catch (error) {
            console.log(error);
        }
    },
    async fetchByType(ctx) {
        let types = [1, 2, 3]
        for (let index = 0; index < types.length; index++) {
            const type = types[index];
            await this.$axios.$get(`front/projects?limit=4&type=${type}`)
                .then(res => {
                    if (type === 1) {
                        ctx.commit('setFutureType', res.data)
                    } else if (type === 2) {
                        ctx.commit('setCompletedType', res.data)
                    } else {
                        ctx.commit('setActiveType', res.data)
                    }
                })
        }
    }
}