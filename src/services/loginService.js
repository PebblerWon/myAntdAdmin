import request from '../utils/request2';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}
/*export function fetch({ page = 1 }) {
  return request("/api/test/json.ashx?id=4101002300000000001");
}*/