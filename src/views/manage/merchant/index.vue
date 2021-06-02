<template>
  <d2-container>
      <el-button type="primary" icon="el-icon-edit">添加商家</el-button>
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh">刷新</el-button>
      <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%;margin: 10px 0;">
            <el-table-column
              v-for="(item, index) in tabMap"
              :key="index"
              :prop="item.prop"
              :label="item.label">
            </el-table-column>
            <el-table-column
                  fixed="right"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">钱包</el-button>
                  </template>
                </el-table-column>
          </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'manage-merchant',
  data(){
    return{
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      tabMap:[{
          prop:'name',
          label: '姓名'
      },{
          prop:'date',
          label: '时间'
      },{
          prop:'address',
          label: '地址'
      },{
          prop:'address',
          label: '地址2'
      }]
    }
  },
  methods:{
    handleClick(){

    }
  }
}
</script>

<style>
</style>
