<template>
  <div>
    <h5>作曲家</h5>
    <el-row :gutter="12">
      <Letter :letter="letterCN" />
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterCN: [
        {
          id: 'I',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'II',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'III',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'IV',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
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
</style>
