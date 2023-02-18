<template>
  <div>
    <h5>幸运儿</h5>
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
          role: '幸运儿',
          type: '传闻',
          text: '不知有多少人参加了这个游戏，他也是其中之一。'
        },
        {
          role: '幸运儿',
          type: '故事背景',
          text: '世界就像摇晃不停的骰蛊，他一直在赢而谁也不知道，当它停下时会变成怎样。'
        }
      ],
      deductionCN: [
        {
          role: '幸运儿',
          id: '1',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '2',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '3',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '幸运儿',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '幸运儿',
          id: 'I',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '幸运儿',
          id: 'II',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '幸运儿',
          id: 'III',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '幸运儿',
          id: 'IV',
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '幸运儿',
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

