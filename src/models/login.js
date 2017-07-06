import * as loginService from '../services/loginService'
import {queryURL} from '../utils'
import {routerRedux} from 'dva/router'

export default {

  namespace: 'login',

  state: {
  	username:'abc',
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload);
      const data = yield call(loginService.fetch,{page:1})
      console.log(data);
      if(data[0].id!=null){
        const from = queryURL('from')
        console.log(from)
        yield put(routerRedux.push('/index'))
      }
    },
    *test({payload},{call,put}){
      const data = yield call()
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
