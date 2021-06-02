import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/member',
  name: 'member',
  meta,
  redirect: { name: 'member-account' },
  component: layoutHeaderAside,
  children: [
    { path: 'account', name: 'member-account', component: _import('member/account'), meta: { ...meta, title: '账号管理' }},
    { path: 'role', name: 'member-role', component: _import('member/role'), meta: { ...meta, title: '角色管理' } },
    { path: 'menu', name: 'member-menu', component: _import('member/menu'), meta: { ...meta, title: '菜单管理' } },
    { path: 'functions', name: 'member-functions', component: _import('member/functions'), meta: { ...meta, title: '功能管理' } }
  ]
}
