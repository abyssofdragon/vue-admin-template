<template>
  <div>
    <h3>佣兵</h3>
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
          role: '佣兵',
          type: '传闻',
          text: '作为一个退休的佣兵，奈布·萨贝达已经习惯在枪林弹雨中讨生活，也许一场危险的游戏能给予他在战场上同样的体验？'
        },
        {
          role: '佣兵',
          type: '故事背景',
          text: '奈布曾经是一名效力于东印度公司的廓尔喀雇佣兵，像大部分的廓尔喀人一样，他个子不高，体格也不壮硕。但所有人都知道一个廓尔喀战士就意味着纪律严明和英勇善战。作为一个退休的雇佣兵，奈布·萨贝达已经习惯了嗜血的生活，也许一场危险的游戏能给予他在战场上同样的体验？'
        }
      ],
      deductionCN: [
        {
          role: '佣兵',
          id: 1,
          title: '新兵入伍',
          content: '那是开始，也是终结',
          conclusion: '一张照片：穿着廓尔喀传统服饰的妇人与年轻的雇佣兵站在征兵处，左下角写着“妈妈”二字。'
        },
        {
          role: '佣兵',
          id: 2,
          title: '士兵的生活',
          content: '如果把生活是一个装满礼物的箱子，那士兵的箱子里会装些什么?',
          conclusion: '一张照片：雇佣兵与同伴站在库房门口挑选武器。拿着弯刀的两人看起来很高兴。'
        },
        {
          role: '佣兵',
          id: 3,
          title: '扰袭战术',
          content: '尽管不愿意承认，但从战场上学会的技巧我仍然铭记于心。',
          conclusion: '不断的机动性、不断的警戒、不断的猜疑，游击生存时永远别忘记这三点。'
        },
        {
          role: '佣兵',
          id: '4',
          title: '潜行',
          content: '面向光明，在黑暗中行走，不要发出声响。',
          conclusion: '我的搭档已经改行，而我仍然潜行在枪林弹雨之间。如果这就是生活，那出口在哪里？'
        },
        {
          role: '佣兵',
          id: '5',
          title: '协作',
          content: '同伴是很重要的，这一点无论如何也不要忘记。',
          conclusion: '一张照片：雇佣兵在同伴的掩护下突围。'
        },
        {
          role: '佣兵',
          id: '6',
          title: '驰援',
          content: '我们应该在正确的时间，做正确的事情。',
          conclusion: '一张照片：雇佣兵背着生死不明的同伴。'
        },
        {
          role: '佣兵',
          id: '7',
          title: '一击得手',
          content: '射击的机会只有一次。',
          conclusion: '一张照片：雇佣兵用步枪瞄准远处的敌军将领。'
        },
        {
          role: '佣兵',
          id: '8',
          title: '务实',
          content: '我们只需要关注任务的进度，至于如何完成？那是你的事。',
          conclusion: '廓尔喀士兵的薪水比英籍军人低得多，而成为自由佣兵就不一样了。'
        },
        {
          role: '佣兵',
          id: '9',
          title: '同袍',
          content: '你无法选择与什么人合作，所以接受一切。',
          conclusion: '你知道他们被救下来之后还会再上去的，对吧？'
        },
        {
          role: '佣兵',
          id: '10',
          title: '撤离',
          content: '忍耐和撤退，都一样可悲。',
          conclusion: '一张照片：雇佣兵拿着一副破损严重的护肘，似乎在回忆着什么。'
        },
        {
          role: '佣兵',
          id: '11',
          title: '审时度势',
          content: '优秀的佣兵知道如何脱身。',
          conclusion: '一篇日记：廓尔喀弯刀不该向同胞挥舞，我需要离开。'
        }
      ],
      letterCN: [
        {
          role: '佣兵',
          id: 1,
          year: '2020',
          title: '给亚瑟·罗素的电报',
          letter: '野猪仍在活动，位置已确定，即日启程。'
        },
        {
          role: '佣兵',
          id: 2,
          year: '2021',
          title: '贴身携带的信',
          letter: '任务已完成，除我以外，还剩一人。\n受“鹿人”袭击，难以脱身。佣金转付至加德满都。'
        },
        {
          role: '佣兵',
          id: 3,
          year: '2022',
          title: '奈布·萨贝达的两页实验档案',
          letter: '编号： 9-？-3\n姓名：奈布·萨贝达\n\n【测试标记】\n1、亡命之徒\n2、违背规则者\n\n【测试倾向】\n压制全员的猎杀者，失控的实验对象\n\n【测试结果】\n1、整体评价\n9-？ -3是本组最危险的实验对象。他拥有较强的身体素质和心理素质，全程为完成追杀8-？ -5的任务而来，期间除去了一切阻碍行动的同局者。在游戏开始前9-？ -3就无视规则，破坏了整组秩序。他的行为会受到严厉的惩罚。\n2、流程说明\n9-？ -3是一名自由雇佣兵，因此他与同组其他参与者不同，他并不关注游戏本身，一切行为只为保障任务顺利完成。\n在成功处理8-？ -5后，他又除去了可能使计划败露的9-？ -1，并蒙骗9-？ -2与他合作，一同除去了9-？ -4。游戏未开始前本组已有两人出局，本组“四人进入游戏”的规则被打破，使得游戏无法照常进行。9-？ -3手段之敏捷利落，大大超出了最初对实验对象行为的预估，他对阻碍自己的人毫不留情地下手铲除，亡命之徒的特质绝非常人可比。9-？ -3将实验导向了预料之外的发展，造成了整局失控。因此，将在实验后派出行刑人对9-？ -3进行处理，协助他的9-？- 2也会付出代价。\n3、实验总结\n作为曾经的雇佣兵、现在的自由雇佣兵，9-？ -3目标明确、心理素质较强。单方面压制全局，斗兽场成为了独属于他的狩猎场。尽管最终实验结果不理想，但本组可以总结经验：有差异的实验对象能导向更多可能性，但差异过大者并不适合投入同一场游戏。在挑选实验对象时，也需要更谨慎地评估该实验对象是否可控。\n\n附：后续记录\n作为少数被行刑者带回的实验对象，实验结束后，在9-？ -3身上有了额外的发现。\n9-？ -3身上携带了疑似留给接应者的文字信息。结合对9-？ -3的调查，所述内容与其经历有关。9-？ -3童年家庭环境贫困、父亲早逝，成年后成为雇佣兵，其佣金收入是家中主要的经济来源。相似经历在当地并不少见：人们因生活所迫走上亡命之徒的道路，逐渐习惯杀戮，努力远离贫穷的故乡。\n而在9-？ -3身 上，能观察到两个十分有趣的行为：一边是毫不犹豫地下手铲除异已，一边是濒临绝境时仍挂念家乡的绝笔信。该说是穷凶极恶之人能被濒死的绝望唤醒良知，还是说对家的情感是支撑他在杀戮中存活、保持清醒的主要动力？\n实验至今已记录了多种“恶”的样本，其中那些危险的、矛盾的、有趣的，也许可以再次投入游戏、进行融合，进行更深层的研究……'
        },
        {
          role: '佣兵',
          id: 4,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '佣兵',
          id: 5,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

