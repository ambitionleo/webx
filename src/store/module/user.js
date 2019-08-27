import {LOGIN_INFO} from '../mutation-types'
import {userLogin} from '@/api/user/user'

const state = {
  session_id: '',
  userId:'',
  token:''
}
const getters = {}
const actions = {
  loginAction({commit},{username,password}){
    return new Promise((reslove,reject) => {
      let info = {'username' : username,'password' : password};
      console.log('info.username:' + info.username);
      userLogin(info).then(res => {
        console.log('res' + res);
        console.log('res.username' + res.token);
        commit(LOGIN_INFO,res.data);
        let user = res.data;
        sessionStorage.setItem('token', user.token);
        sessionStorage.setItem('userId', user.userId);
        sessionStorage.setItem('msg', res.msg);
        reslove(res);
      }).catch(e => reject(e))
    })
  }
}
const mutations = {
  setSessionId(state, value) {
      state.session_id = value;
  },
  [LOGIN_INFO](state,info){
    state.userId = info.userId;
    state.token = info.token;
    state.msg = info.msg;
    sessionStorage.setItem('user', JSON.stringify(state));
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}