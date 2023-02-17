<template>
  <div>
    <h5>“小女孩”</h5>
    <Character :letter="letterCN" :deduction="deductionCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      deductionCN: [
        {
          role: '“小女孩”',
          id: '1',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '2',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '“小女孩”',
          id: '3',
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
          id: 'I',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 'II',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 'III',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
          id: 'IV',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“小女孩”',
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

