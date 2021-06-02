import { find, assign } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1' }
]

const menu = [{
                id: 1,
                name: '用户管理',
                icon: 'icon-user',
                alias: 'user'
              }, {
                id: 2,
                name: '系统管理',
                icon: 'icon-merchant',
                alias: 'merchant',
                hasChildren: true
              }, {
                id: 3,
                name: '设备管理',
                icon: 'icon-merchant',
                alias: 'merchant'
              }, {
                id: 4,
                name: '代理管理',
                icon: 'icon-merchant',
                alias: 'merchant'
              }]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    // 模拟数据
    mock
      .onAny('/login')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({menu}, user, { token: faker.random.uuid() }))
          : tools.responseError({}, '账号或密码不正确')
      })
    // 接口请求
    return requestForMock({
      url: '/login',
      method: 'post',
      data
    })
  }
})
