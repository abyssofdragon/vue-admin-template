<template>
  <div>
    <h5>26号守卫</h5>
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
          year: '2021',
          title: '一封包裹上的附信',
          letter: '尊敬的帕杜拉先生:\n您好!\n关于您希望提升延时装置精度的需求，我实在独木难支，于是将样本拿给了我的女儿一同研究，请您见谅——我应该不只一次提过，她已经成为了超越我的天才。\n但即便如此，我们依旧只能将装置的精度在确保长时间运转的情况下提升百分之十二。钟表结构简单，功能单一，只需要讲求每一分每一秒的精细，但这个机械装置的连携功能似乎远不止于此。根据我女儿的猜测，它甚至可能是某个自主校准系统里的一个环节？——我们无意窥探您的发明，但这个想法实在令我们匪夷所思，“机械”与“自主”两个词究竟要怎样才能联系在一起？\n改造后的装置将随信送达。能为您伟大的发明尽一点微薄之力，我们倍感荣幸。\n另，虽然唐突，但我们是否有机会能够就自主机械这个方向有进一步的交流？我的女儿对此尤其痴迷。\n祝您一切顺利!\n\n忠诚的，\n列兹尼克'
        },
        {
          id: 'II',
          year: '2022',
          title: '一页日记',
          letter: '今天订购了一批新的零件，用于改造26号。\n自从那次事件后，26号从未出现不受控制的现象，这是第一次。\n一定是那两个小鬼!\n机器人绝不可能有自主意识。\n 那个小男孩看起来更关心那些机关，那个小女孩……对！准是她趁我不注意的时候，对26号做了什么手脚。原本以为她的机器人报废后，这家伙会消停一段时间。\n我想我该重新看看26号的录像，或许有什么被我忽视掉的细节。\n……\n不，我应该先对这个蠢透了的机器下达终止指令！'
        },
        {
          id: 'III',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: '2024',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2025',
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
