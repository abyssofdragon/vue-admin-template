<template>
  <div>
    <h5>“博士”</h5>
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
          role: '“博士”',
          id: '1',
          title: '契机',
          content: '他能感受到眼睑上硬币的重量么?',
          conclusion: '一篇医学评论，探讨脉冲电流是否能用来控制肌肉运动。'
        },
        {
          role: '“博士”',
          id: '2',
          title: '定义',
          content: '它在动！',
          conclusion: '一张照片，一只白鼠闭眼站立着。'
        },
        {
          role: '“博士”',
          id: '3',
          title: '冒险',
          content: '成功，需要反复试验。',
          conclusion: '第一叠手写的交易单据,交易双方一方署名A.C.一方署名有时是P.S，有时是M.S。交易内容写的是石板，并用LH、RH、RL、LL等字母标记进行了分类。'
        },
        {
          role: '“博士”',
          id: '4',
          title: '失败',
          content: '放弃吧，珀西。',
          conclusion: '一则地方新闻，有拾荒者在河流下游发现了许多碎尸块，尸块边缘有缝线痕迹。据法医判断．这些痕迹都是死后形成的。'
        },
        {
          role: '“博士”',
          id: '5',
          title: '时机',
          content: '错的或许不是方法，是时机。',
          conclusion: '第二叠手写的交易单据，交易双方一方署名R.R.一边署名M.S。交易内容变成了肉排，单据上详细记录了肉排出产的时间。'
        },
        {
          role: '“博士”',
          id: '6',
          title: '代价',
          content: '有什么东西，比希望更让人疯狂。',
          conclusion: '一封遗书：永别了珀西，如果你需要奇迹，我可以为你创造，但你若祈求神迹，那便只有你自已去见证了。'
        },
        {
          role: '“博士”',
          id: '7',
          title: '奇迹',
          content: '他在动……',
          conclusion: '一页笔记：米凯尔或许是对的，只是我太慢了，我唤醒了他的躯壳，但还是错过了他的灵魂，不过没关系，一切都准备就绪，而我，还有最后一次机会。'
        },
        {
          role: '“博士”',
          id: '8',
          title: '预兆',
          content: '福兆从不如期而至。',
          conclusion: '一则新闻：市民反映的城西深夜发出巨大异响，是由于注册在著名发明家珀西博士名下的实验室，非法用电，造成机器过载所致。'
        },
        {
          role: '“博士”',
          id: '9',
          title: '神迹',
          content: '你要创造什么？',
          conclusion: '一则警讯：警方在城西著名发明家珀西博士的实验室内，发现了两具成年男性尸体，经辨认，一具属于珀西博士，另一具属于他的助手米凯尔，两人致命伤皆由同一锐器造成。'
        },
        {
          role: '“博士”',
          id: '10',
          title: '取舍',
          content: '完美的躯壳，并不一定需要灵魂。',
          conclusion: '一具空棺，棺木内侧有类似钝器造成的划痕。'
        }
      ],
      letterCN: [
        {
          role: '“博士”',
          id: 'I',
          year: '2022',
          title: '一封精心收藏的信件',
          letter: '尊敬的珀西博士：\n\n很遗憾地听闻，巴利尔伯爵对于您加入皇家学会的举荐没有被通过，黄金绶带下的宠儿们，或许早已囿于昨日的时光，无法领悟您研究方向的前瞻意义，又或许他们伟大的保护人，仍未曾明了，何谓“上帝的归上帝，凯撒的归凯撒”。\n而我与我的赞助人则绝非如此。\n此前，我曾拜读过您的研究报告，对于您遇到的瓶颈，有一些自己的想法，我寄了一些数据给您，那是我基于您的研究所进行的一系列实验用例记录。如果对您有所帮助，我将不胜荣幸。\n\n若您有意与我们进行深度探讨，我的赞助人将在科洛尼举行一场私人性质的科学研究会——关于人类可否以科学创造来挑战造物主的规则。\n邀请函已随信奉上，热忱期待您的到来。\n愿有朝一日，我们能挣脱枷锁，为人类开辟新的前路。\n\nM.S'
        },
        {
          role: '“博士”',
          id: 'II',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“博士”',
          id: 'III',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“博士”',
          id: 'IV',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“博士”',
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

