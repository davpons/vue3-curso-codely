import { createStore } from 'vuex'

const state = {
    user: null,
}

export default createStore({
    state,
    getters: {
        userId: state => state.user?.id,
        isLogged: state => !!state.user
    },
    mutations: {
        SetUser(state, user) {
            state.user = user
        }
    },
    actions: {
        login({commit}) {
            return new Promise(resolve => {
                const user = {
                    id: 1,
                    name: 'davpons'
                }
                commit('SetUser', user)
                resolve(user)
            })
        }
    },
    modules: {

    }
})