
const baseUrl = process.env.VUE_APP_API_URL

export const state = () => ({
    coins: [],
    rank: [],
    topfalls: [],
    topgrowth: [],
    situationmarket: [],
    trendcoins: []
})

export const getters = {
    COINS(state) {
        return state.coins
    },
    SITUATION_MARKET(state) {
        return state.situationmarket
    },
    TOPFALLSCOINS(state) {
        return state.topfalls
    },
    TOPGROWTHCOINS(state) {
        return state.topgrowth
    },
    TOPRANKCOINS(state) {
        return state.rank
    },
    TRENDCOINS(state) {
        return state.trendcoins
    }
}

export const mutations = {
    setCoins(state, coins) {
        state.rank = coins.sort((a, b) => {
            return a.rank - b.rank
        }).slice(0, 6)
        state.topgrowth = coins.sort((a, b) => {
            return b.changePercent24Hr - a.changePercent24Hr
        }).slice(0, 4)
        state.topfalls = coins.sort((a, b) => {
            return a.changePercent24Hr - b.changePercent24Hr
        }).slice(0, 4)
        state.situationmarket = coins.sort((a, b) => {
            return a.rank - b.rank
        }).slice(0, 4)
        state.trendcoins = coins.slice(0, 20)
        state.coins = coins
    },
}

export const actions = {
    async getCoins(ctx) {
        try {
            const coins = await this.$axios.$get(baseUrl + 'front/crypto_exchanges?limit=6').then(res => {
                return res.data
            })
            ctx.commit('setCoins', coins)
        } catch (error) {
            console.error(error)
        }
    },
}