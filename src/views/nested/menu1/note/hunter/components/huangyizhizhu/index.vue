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
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '2',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '3',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '4',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '5',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '6',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '7',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '8',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '9',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        },
        {
          id: '10',
          title: 'Coming Soon',
          content: 'Coming Soon',
          conclusion: 'Coming Soon'
        }
      ],
      letterCN: [
        {
          id: 'I',
          year: '2020',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'II',
          year: '2021',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'III',
          year: '2022',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2024',
          title: 'Coming Soon',
          letter: 'Coming Soon'
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
