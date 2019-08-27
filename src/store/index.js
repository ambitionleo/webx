import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
Vue.use(Vuex);
const state = {
    //1
    //author: ''
}
const actions = {}
const mutations = {
    // setAuthor(state, value){
    //     state.author = value;
    // }
}
const store = new Vuex.Store({
    modules: {
        //2
        user
    },
    actions,
    state,
    mutations,
})
export default store;