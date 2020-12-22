import { request } from './request'

export function get_label () {
  return request({
    url: '/get_label'
  })
}

export function get_blog_info (blogId) {
  return request({
    url: '/get_blog_info',
    params: {
      blogId: blogId,
    }
  })
}

export function get_blog_list (blogId) {
  return request({
    url: '/get_blog_list',
  })
}

export function get_blog_by_sortId (sort) {
  return request({
    url: '/get_blog_list',
    params: {
      labelId: sort,
    }
  })
}
