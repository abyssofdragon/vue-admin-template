<template>
  <div>
    <h5>隐士</h5>
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

