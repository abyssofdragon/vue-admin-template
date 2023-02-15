<template>
  <div>
    <h5>博士</h5>
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
          year: '2022',
          title: '一封精心收藏的信件',
          letter: '尊敬的珀西博士：\n\n很遗憾地听闻，巴利尔伯爵对于您加入皇家学会的举荐没有被通过，黄金绶带下的宠儿们，或许早已囿于昨日的时光，无法领悟您研究方向的前瞻意义，又或许他们伟大的保护人，仍未曾明了，何谓“上帝的归上帝，凯撒的归凯撒”。\n而我与我的赞助人则绝非如此。\n此前，我曾拜读过您的研究报告，对于您遇到的瓶颈，有一些自己的想法，我寄了一些数据给您，那是我基于您的研究所进行的一系列实验用例记录。如果对您有所帮助，我将不胜荣幸。\n\n若您有意与我们进行深度探讨，我的赞助人将在科洛尼举行一场私人性质的科学研究会——关于人类可否以科学创造来挑战造物主的规则。\n邀请函已随信奉上，热忱期待您的到来。\n愿有朝一日，我们能挣脱枷锁，为人类开辟新的前路。\n\nM.S'
        },
        {
          id: 'II',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'III',
          year: '2024',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: '2025',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2026',
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
