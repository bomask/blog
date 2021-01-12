/*
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-01-11 17:03:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\network\request.js
 */
import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1/api/v1/',
    timeout: 5000
  })


  //2.axios的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    /*    console.log(config);*/

    return config
  }, err => {
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res => {

    return res.data
  }, err => {
    console.log(err);
  });


  //3.发送真正的网络请求
  return instance(config)
}