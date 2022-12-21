export const state = () => ({
    categories: []
})

export const getters = ({
    CATEGORIES(state) {
        return state.categories
    }
})

export const mutations = ({
    setCategories(state, categories) {
        state.categories = categories
    }
})

export const actions = ({
    async fetchCategories(ctx) {
        const categories = await this.$axios.$get(`projectsCategories`)
        // const categories = await this.$axios.$get('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsCategories`)
            .then(res => {
                return res.data
            })
        ctx.commit('setCategories', categories)
    }
})