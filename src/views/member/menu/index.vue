<template>
  <d2-container>
    <el-button type="primary" icon="el-icon-edit">添加菜单</el-button>
    <el-button icon="el-icon-search">查询</el-button>
    <el-button icon="el-icon-refresh">刷新</el-button>
    <el-table
        :data="tableData"
        style="width: 100%;margin: 10px 0;"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="icon"
          label="图标">
        </el-table-column>
        <el-table-column
          prop="alias"
          label="地址别名">
        </el-table-column>
      </el-table>
  </d2-container>
</template>

<script>
export default{
  name: 'member-menu',
  data(){
    return {
      id: 55,
      tableData: [{
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
    }
  },
  methods: {
    load(tree, treeNode, resolve) {
            this.id = this.id + 10
            setTimeout(() => {
              resolve([
                {
                  id: this.id,
                  name: '广告',
                  icon: 'icon-blue',
                  alias: 'blue',
                  hasChildren: true
                }, {
                  id: this.id + 5,
                  name: '套餐',
                  icon: 'icon-green',
                  alias: 'green'
                }
              ])
            }, 1000)
          }
  }
}
</script>

<style>
</style>
