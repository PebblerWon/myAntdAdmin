import request from '../utils/request2';

export async function query(params){

	return request('api/v1/users')
}

export async function remove(params){
	return request({
		url:users,
		method:'delete',
		data:params,
	})
}