<template>
  <div>
    <h5>小说家</h5>
    <Character :description="descriptionCN" :letter="letterCN" :deduction="deductionCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionCN: [
        {
          role: '',
          type: '传闻',
          text: ''
        },
        {
          role: '',
          type: '故事背景',
          text: ''
        }
      ],
      deductionCN: [
        {
          role: '小说家',
          id: '1',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '2',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '3',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '小说家',
          id: 'I',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 'II',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 'III',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 'IV',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
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

