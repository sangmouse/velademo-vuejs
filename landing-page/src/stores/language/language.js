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



// import i18n from '@/components/language/i18n'

// const language = {
//     state: {
//         language: i18n.locale
//     },
//     mutations: {
//         SET_LANG(state, payload) {
//             state.language = payload
//         }
//     },
//     actions: {
//         setLang({ commit }, payload) {
//             commit('SET_LANG', payload)
//         }
//     },
//     getters: {},
// };

// export default language;