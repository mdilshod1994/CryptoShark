export const state = () => ({
    isForm: false,
    btnValue: '',
    info: {}
})

export const getters = {
    IS_FROM_ACTIVE(state) {
        return state.isForm
    },
    BTN_VALUE(state) {
        return state.btnValue
    },
    TAB_INFO(state) {
        return state.info
    }
}

export const mutations = {
    setValPopup(state, val) {
        state.btnValue = val.tab
        state.info = val.info
        state.isForm = true
    },
    clearValPopup(state) {
        state.isForm = false
        state.btnValue = ''
    }
}

export const actions = {
    openPopup(ctx, val) {
        ctx.commit('setValPopup', val)
    },
    closePopup(ctx) {
        ctx.commit('clearValPopup')
    }
}