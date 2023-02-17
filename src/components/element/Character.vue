<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="12">
        <Description :description="description" />
        <Letter :letter="letter" />
      </el-col>
      <el-col :span="12">
        <Deduction :deduction="deduction" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    deduction: {
      type: Array,
      default: function() {
        return []
      }
    },
    description: {
      type: Array,
      default: function() {
        return []
      }
    },
    letter: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1']
    }
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
  padding: 3.5px 58px 3.5px 0px;
}
</style>
