/*
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-01-11 21:43:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\network\getBlogInfo.js
 */
import {
  request
} from './request'

export function get_label() {
  return request({
    url: '/get_label'
  })
}

export function get_blog_info(blogId) {
  return request({
    url: '/get_blog_info',
    params: {
      blogId: blogId,
    }
  })
}

export function get_blog_list(currentPage, num, currentSort) {
  return request({
    url: '/get_blog_list',
    params: {
      currentPage: currentPage,
      num: num,
      currentSort: currentSort
    }
  })
}

export function get_blog_by_sortId(sort) {
  return request({
    url: '/get_blog_list',
    params: {
      labelId: sort,
    }
  })
}