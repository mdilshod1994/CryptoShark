const baseUrl = process.env.VUE_APP_API_URL

export const state = () => ({
    newsType1: [],
    newsType2: [],
    newsType3: [],
    newsComments: [],
    news: []
})

export const getters = {
    NEWS_TYPE_FIRST(state) {
        return state.newsType1
    },
    NEWS_TYPE_SECOND(state) {
        return state.newsType2
    },
    NEWS_TYPE_THIRD(state) {
        return state.newsType3
    },
    NEWS_COMMENTS(state) {
        return state.newsComments
    },
    ALL_NEWS(state) {
        return state.news
    }
}

export const mutations = {
    setNewsType1(state, news) {
        state.newsType1 = news
    },
    setNewsType2(state, news) {
        state.newsType2 = news
    },
    setNewsType3(state, news) {
        state.newsType3 = news
    },
    setNewsComments(state, comments) {
        state.newsComments = comments
    },
    setAllNews(state, news) {
        state.news = news
    }
}

export const actions = {
    async getNewsType1(ctx) {
        try {
            const newsType1 = await this.$axios.$get(baseUrl + 'front/articles?search[type]=1')
                .then(res => {
                    return res.data
                })
            ctx.commit('setNewsType1', newsType1)
        } catch (error) {
            console.error(error);
        }
    },
    async getNewsType2(ctx) {
        try {
            const newsType2 = await this.$axios.$get(baseUrl + 'front/articles?search[type]=2')
                .then(res => {
                    return res.data
                })
            ctx.commit('setNewsType2', newsType2)
        } catch (error) {
            console.error(error);
        }
    },
    async getNewsType3(ctx) {
        try {
            const newsType3 = await this.$axios.$get(baseUrl + 'front/articles?search[type]=3')
                .then(res => {
                    return res.data
                })
            ctx.commit('setNewsType3', newsType3)
        } catch (error) {
            console.error(error);
        }
    },
    async getNewsComments(ctx, id) {
        try {
            const newsComments = await this.$axios.$get(baseUrl + `articlesComments?search[articles_id]=${id}&limit=-1`)
                .then(res => {
                    return res.data
                })
            if (newsComments) {
                const comments = newsComments.filter(el => el.articles_id === +id)
                ctx.commit('setNewsComments', comments)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async postNews(ctx, content) {
        let body = {
            articles_id: content.id,
            name: content.name,
            message: content.text
        }
        try {
            const postedNews = await this.$axios.$post(baseUrl + 'articlesComments', body)
                .then(res => {
                    return res
                })
            if (postedNews) {
                ctx.dispatch('getNewsComments', postedNews.articles_id)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async allNews(ctx) {
        const news = await this.$axios.$get(process.env.VUE_APP_API_URL + 'front/articles')
            .then(res => {
                return res.data
            })
        ctx.commit('setAllNews', news)
    }
}