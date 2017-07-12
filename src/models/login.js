import * as loginService from '../services/loginService'
import {queryURL} from '../utils'
import {routerRedux} from 'dva/router'

export default {

  namespace: 'login',

  state: {
    loginLoading:false,
  	username:'abc',
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload);
      const data = yield call(loginService.login,payload)
      console.log(data);
      if(data.success){
        const from = queryURL('from')
        if(from){
          yield put(routerRedux.push(from))
        }else{
          yield put(routerRedux.push('/'))
        }
        
      }else{
        throw data
      }
    },
    *test({payload},{call,put}){
      const data = yield call()
    }
  },

  reducers: {
    showLoginLoading(state){
      return{
        ...state,
        loginLoading:true,
      }
    },
    hideLoginLoading(state){
      return{
        ...state,
        loginLoading:false,
      }
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
