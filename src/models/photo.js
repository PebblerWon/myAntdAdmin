import modelExtend from 'dva-model-extend'

import {pageModel} from './common'
import * as photoService from '../services/photoService'

export default modelExtend(pageModel,{
	namespace:'photo',
	state:{},
	subscriptions:{
		setup ({dispatch,history}){
			history.listen(location=>{
				if(location.pathname === '/photo'){
					dispatch({
						type:'query',
						payload:location.query,
					})
				}
			})
		}
	},
	effects:{
		*query({payload={}},{call,put}){
			const data = yield call(photoService.query,payload)
			if(data){
				yield put({
					type:'querySuccess',
					payload:{
						list:data,
						pagination:{
							current:Number(payload.page)||1,
							pageSize:Number(payload.pageSize)||5,
							total:data.length
						}
					}
				})
			}
		}
	},
})