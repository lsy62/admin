/* 业务管理 */
export default {
  path: '/manage',
  title: '业务管理',
  icon: 'puzzle-piece',
  children: [
    { path: '/manage/equipment', title: '设备', icon: 'home' },
    { path: '/manage/agent', title: '代理', icon: 'home' },
    { path: '/manage/merchant', title: '商家', icon: 'home' },
    { path: '/manage/user', title: '用户', icon: 'puzzle-piece' }
  ]
}
