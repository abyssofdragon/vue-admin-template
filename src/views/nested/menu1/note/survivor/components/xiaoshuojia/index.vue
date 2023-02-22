<template>
  <div>
    <h5>小说家</h5>
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
          role: '小说家',
          type: '传闻',
          text: '大名鼎鼎的小说家“奥尔菲斯”没有人知道他的过去，甚至，可能包括他自已。'
        },
        {
          role: '小说家',
          type: '故事背景',
          text: '小说界冉冉升起的新星，擅长悬疑恐怖小说写作，人们对他的传言很多，有人说他家庭幸福美满，有人说他孤身一人离群索居。\n但不论真相如何，丰厚的版税和人数庞大的读者群，总归给他带来了可观的财富和声誉，让“奥尔菲斯”成为了旁人眼中如日中天的青年才俊。\n然而只有他自己才知道，那来自过去的噩梦，从未离去。所以当他收到那封随着笛子而来邀请函时，他知道，他没有拒绝的理由。'
        }
      ],
      deductionCN: [
        {
          role: '小说家',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '小说家',
          id: 3,
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
          id: 1,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 2,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 3,
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
          id: 4,
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '小说家',
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

