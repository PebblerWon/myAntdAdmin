import request2 from '../utils/request2';
import request from '../utils/request'
import {config} from '../utils'
const {api} = config
const {userLogout,userLogin} = api

export async function login(data){
    console.log(data)
    return request({
        url:userLogin,
        method:'post',
        data
    })
}

export async function login2(payload) {
    if (payload) {
        let data = await request2(`/api/v1/users`);
        const { username, password } = payload;
        let res = data.filter(item => item.username == username)
        return {
            success: res.length > 0,
            user:res[0]
        }
    } else if(false){

    }
    else{
        return {
            success: false
        }
    }

}

export async function logout(params){
    return request({
        url:userLogout,
        method:'get',
        data:params,
    })
}
/*export function fetch({ page = 1 }) {
  return request("/api/test/json.ashx?id=4101002300000000001");
}*/
