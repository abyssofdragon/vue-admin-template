<template>
  <div>
    <h5>“小女孩”</h5>
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
          role: '“小女孩”',
          type: '传闻',
          text: '或许，连“奥尔菲斯”都不曾了解她，那困于噩梦的回忆。'
        },
        {
          role: '“小女孩”',
          type: '故事背景',
          text: '在“奥尔菲斯”的记忆中，她是他的女儿，他的小太阳，热情开朗又有一些古怪精灵的小淑女。他将她视若珍宝，期许她有个幸福美好的未来。\n然而“噩梦”重袭时，囿于过去的“奥尔菲斯”，却将自己最珍视之人，引向深渊。'
        }
      ],
      deductionCN: [
        {
          role: '“小女孩”',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 3,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '“小女孩”',
          id: 1,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 2,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 3,
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 4,
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
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

