<template>
  <div>
    <h5>小说家</h5>
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
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'II',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'III',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'IV',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: '2027',
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
