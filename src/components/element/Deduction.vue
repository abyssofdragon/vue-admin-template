<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="背景推演" name="1">
        <el-row>
          <el-col :span="24">
            <vxe-grid ref="xGrid" v-bind="gridOptions">
              <template #edit="{ row }">
                <div contenteditable="true">{{ row.conclusion }}</div>
              </template>
            </vxe-grid>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Deduction',
  props: {
    deduction: {
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
        { field: 'id', title: 'NO', width: '5%' },
        { field: 'title', title: '推演', width: '10%' },
        { field: 'content', title: '内容', width: '25%' },
        { field: 'conclusion', title: '结论', width: '60%',
          slots: { // 使用插槽模板渲染
            default: 'edit'
          }
        }
      ]
      this.gridOptions.data = this.deduction
    }, 0)
  }
}
</script>

  <style>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  white-space: pre-wrap;
}

.el-table tr .el-table__expanded-cell {
  padding: 3.5px 58px;
}
</style>
