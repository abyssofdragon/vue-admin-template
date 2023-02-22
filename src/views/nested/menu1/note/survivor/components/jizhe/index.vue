<template>
  <div>
    <h5>记者</h5>
    <Character :note="note" :description="descriptionCN" :letter="letterCN" :deduction="deductionCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: '',
      descriptionCN: [
        {
          role: '记者',
          type: '传闻',
          text: 'TBD'
        },
        {
          role: '记者',
          type: '故事背景',
          text: 'TBD'
        }
      ],
      deductionCN: [
        {
          role: '记者',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: 3,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '记者',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '记者',
          id: 1,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '记者',
          id: 2,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '记者',
          id: 3,
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '记者',
          id: 4,
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '记者',
          id: 5,
          year: '2027',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

