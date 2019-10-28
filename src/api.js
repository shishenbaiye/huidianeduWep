import axios from 'axios'
import Vue from 'vue'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 封装axios的post请求，get请求一样
export function fetchPOST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
export function fetchGET(url, params) {
  return new Promise((resolve, reject) => {
    axios.get("https://www.huidianedu.com/public/api/index"+url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  $httpGET(url, params) { //$http会被调用的方法名,可以按自己喜好命名
    return fetchGET(url, params);
  },
  $httpPOST(url, params) { //$http会被调用的方法名,可以按自己喜好命名
    return fetchPOST(url, params);
  }
}