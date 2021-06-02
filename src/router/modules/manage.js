import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/manage',
  name: 'manage',
  meta,
  redirect: { name: 'manage-agent' },
  component: layoutHeaderAside,
  children: [
    { path: 'agent', name: 'manage-agent', component: _import('manage/agent'), meta: { ...meta, title: '代理管理' } },
    { path: 'merchant', name: 'manage-merchant', component: _import('manage/merchant'), meta: { ...meta, title: '商家管理' } },
    { path: 'equipment', name: 'manage-equipment', component: _import('manage/equipment'), meta: { ...meta, title: '设备管理' } },
    { path: 'user', name: 'manage-user', component: _import('manage/user'), meta: { ...meta, title: '用户管理' } }
  ]
}
