import request from '../utils/request2';

export async function login(payload) {
    if (payload) {
        let data = await request(`/api/v1/users`);
        const { username, password } = payload;
        let res = data.filter(item => item.username == username)
        return {
            success: res.length > 0
        }
    } else {
        return {
            success: false
        }
    }

}
/*export function fetch({ page = 1 }) {
  return request("/api/test/json.ashx?id=4101002300000000001");
}*/
