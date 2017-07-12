/*import { query, logout } from '../services/app'*/
import {login} from '../services/loginService'
import { routerRedux } from 'dva/router'
import { parse } from 'qs'
import { config } from '../utils'
const { prefix } = config

export default {
  namespace: 'app',
  state: {
    user: {},
    menuPopoverVisible: false,
    siderFold: localStorage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: localStorage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: [],
  },
  subscriptions:{
    setup({dispatch}){
      dispatch({type:'query'})
      let tid
      window.onresize = () => {
        clearTimeout(tid)
        tid = setTimeout(() => {
          dispatch({ type: 'changeNavbar' })
        }, 600)
      }
    }
  } , 
  effects:{
    *query({payload,},{call,put}){
      const data = yield call(login,payload)
      console.log(data)
      if(data&&data.success && data.user){
        yield put({
          type:'querySuccess',
          payload:data.user,
        })
        console.log(pathname)
        if(location.pathname === 'login'){
          yield put(routerRedux.push('/user'))
        }
      }else{
          if(config.openPages && config.openPages.indexOf(location.pathname)<0){
            let from = location.pathname
            console.log(from)
            window.location = `${location.origin}/login?from=${from}`
          }
      }
    },
    *changeNavbar ({payload,}, { put, select }) {
      const { app } = yield(select(_ => _))
      const isNavbar = document.body.clientWidth < 769
      if (isNavbar !== app.isNavbar) {
        yield put({ type: 'handleNavbar', payload: isNavbar })
      }
    },
  },
  reducers: {
    querySuccess (state, { payload: user }) {
      return {
        ...state,
        user,
      }
    },
    test(state){
    	console.log(state);
    	return{...state}
    },
    switchSider (state) {
      localStorage.setItem(`${prefix}siderFold`, !state.siderFold)
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },

    switchTheme (state) {
      localStorage.setItem(`${prefix}darkTheme`, !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    },

    switchMenuPopver (state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible,
      }
    },

    handleNavbar (state, { payload }) {
      return {
        ...state,
        isNavbar: payload,
      }
    },
    handleNavOpenKeys (state, { payload: navOpenKeys }) {
      return {
        ...state,
        ...navOpenKeys,
      }
    },
  },
}
