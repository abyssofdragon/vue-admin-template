<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件 " name="1">
        <el-row>
          <el-col :span="24">
            <vxe-grid ref="xGrid" v-bind="gridOptions" />
            <template #edit="{ row }">
              <div contenteditable="true">{{ row.letter }}</div>
            </template>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import XEUtils from 'xe-utils'
// import VXETable from 'vxe-table'

export default {
  name: 'Letter',
  props: {
    letter: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1'],
      gridOptions: {
        // https://vxetable.cn/v3/#/grid/api
        columns: [], // 列配置
        data: [], // 表格数据
        maxHeight: 300, // 表格的最大高度
        stripe: true, // 斑马纹
        border: true, // 边框
        round: true, // 圆角边框
        loading: true, // 显示加载中
        resizable: true,
        scrollY: [ // 纵向虚拟滚动配置
          { enabled: false } // 是否启用
        ],
        toolbarConfig: {
          perfect: true, // 配套的样式
          zoom: true, // 最大化显示
          export: true, // 导出
          print: true, // 打印
          custom: true, // 自定义列配置
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        exportConfig: {}, // 导出配置项
        printConfig: {}, // 打印配置项
        columnConfig: { // 列配置
          isCurrent: true, // 点击列头时，高亮当前列
          isHover: true // 移到列头时，高亮当前列头
        },
        rowConfig: { // 行配置
          isCurrent: true, // 点击行时，高亮当前行
          isHover: true // 移到行时，高亮当前行
        }
      }
    }
  },
  created() {
    this.gridOptions.loading = true
    setTimeout(() => {
      this.gridOptions.loading = false
      this.gridOptions.columns = [
        { field: 'id', title: 'NO', width: '5%', sortable: true },
        { field: 'year', title: '年份', width: '5%' },
        { field: 'title', title: '标题', width: '10%' },
        { field: 'letter', title: '信件', width: '80%' }
      ]
      this.gridOptions.data = this.letter
    }, 0)
  }
}
</script>

<style></style>

