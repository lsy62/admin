import { uniqueId } from 'lodash'

import manage from './modules/manage' // 业务
import member from './modules/member' // 成员
import other from './modules/other' // 合集

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  // ...other,
  // member
])

export const menuAside = supplementPath([
  ...other,
  member
])
