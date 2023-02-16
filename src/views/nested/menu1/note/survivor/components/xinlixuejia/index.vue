<template>
  <div>
    <h5>“心理学家”</h5>
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
          year: '2022',
          title: '一封回信',
          letter: '尊敬的先生：\n谢谢你的提醒，你说的是对的。\n也许我太高估自己，我并没有治愈我爱人的能力，鉴于他近期的状况，我们希望试试你之前推荐的最新的治疗方式。\n但由于我爱人的精神状况十分不稳定，麻烦你尽量不要再上门拜访。我们可以保持通信，希望你能谅解。\n两周后我会携带邀请函去往你的庄园，届时也会带上你想了解的一切。\n艾达·梅斯默'
        },
        {
          id: 'II',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'III',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'IV',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

