import axios from 'axios';

// API Helpers
export function getList(endpoint, params = {}) {
  return axios.get(endpoint, { params: { ...params } });
}

export function a() { }
