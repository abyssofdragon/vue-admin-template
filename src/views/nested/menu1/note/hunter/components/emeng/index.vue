<template>
  <div>
    <h3>“噩梦”</h3>
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
          role: '“噩梦”',
          type: '传闻',
          text: '或许，只有“奥尔菲斯”了解他，这来自记忆的噩梦。'
        },
        {
          role: '“噩梦”',
          type: '故事背景',
          text: 'TBD'
        }
      ],
      deductionCN: [
        {
          role: '“噩梦”',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: 3,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“噩梦”',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '“噩梦”',
          id: 1,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“噩梦”',
          id: 2,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“噩梦”',
          id: 3,
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“噩梦”',
          id: 4,
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“噩梦”',
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

