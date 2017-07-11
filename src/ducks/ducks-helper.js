import axios from 'axios';

// API Helpers
export function getList(endpoint, params = {}) {
  return axios.get(endpoint, { params: { ...params } });
}

export function getItemById(endpoint, id) {
  return axios.get(`${endpoint}/${id}/`);
}

export function saveItem(endpoint, data) {
  let request = null;
  if (data.id) {
    request = axios.put(`${endpoint}/${data.id}/`, data);
  } else {
    request = axios.post(`${endpoint}/`, data);
  }
  return request;
}
