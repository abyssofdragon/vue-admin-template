<template>
  <div>
    <h5>隐士</h5>
    <el-row :gutter="12">
      <Letter :letter="letterCN" />
      <Deduction :deduction="deductionCN" />
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      deductionCN: [
        {
          id: '1',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '2',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '3',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
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
