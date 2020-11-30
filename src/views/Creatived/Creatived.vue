<template>
  <div id="creativedApp">
    <el-row>
    <el-col :span="8"><div class="grid-content bg-purple">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"><p>业务办理量</p></div></el-col>
      <el-col :span="16">
      <div class="grid-content bg-purple">
          <div class="box">
          <div class="content">
          </div>
      </div>
      </div>
      </el-col>
    </el-row>
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
      label="操作"
      width="180">
      <template slot-scope="">
        <el-progress :percentage="50"  style="width: 80%"></el-progress>
      </template>
    </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="2"
        @current-change="2"
        :current-page="2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">
      456
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">
      789
      </div></el-col>
  </el-row>
  </div>
</template>

<script>

export default {
data() {
        return {
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
          }]
        }
      }
}
</script>

<style scoped>
  .el-progress-bar__inner{
    background-color: #43ad7f7f;
  }
 .box {
        width: 350px;
        border: 5px dashed #fff;
        background: linear-gradient(to right, #43ad7f7f, #fff);
        margin-top: 21px;
  }
  .content {
        background-color: #fff;
  }



</style>