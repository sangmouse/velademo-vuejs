import app from '@/main.ts'

const mutations = {
    SET_LANG(state, payload){
        app.$i18n.locale = payload
    }
}
const actions ={
    setLang({commit}, payload){
        commit('SET_LANG', payload)
    }
}

const language ={
    namespaced: true,
    actions,
    mutations
}
export default language