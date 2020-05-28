import request from '@/utils/request'
import { currentLang } from '@/locales'

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getUserList (parameter) {
  return request({
    url: `/${currentLang.isoCode}${api.user}`,
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: `/${currentLang.isoCode}${api.role}`,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  const url = `/${currentLang.isoCode}${api.service}`
  console.log(`service url = ` + url)
  return request({
    url: url,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: `/${currentLang.isoCode}${api.permissionNoPager}`,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: `/${currentLang.isoCode}${api.orgTree}`,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
