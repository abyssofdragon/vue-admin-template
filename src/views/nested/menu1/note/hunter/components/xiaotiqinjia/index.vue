<template>
  <div>
    <h5>小提琴家</h5>
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
          title: '一篇宫廷乐师的手记',
          letter: '已经入夜了，直到三天约定到期前的最后几个小时，房间里才终于传出了的琴音。\n那不是连续的篇章，每演奏几秒或十几秒，跃动的音符就被突然掐断。在窒息的安静中，我的灵魂被攥住悬在半空，直到音符又突兀地续上来。\n即便一直断断续续，这也是我这辈子听过最勾人心弦的曲子了：它让我徜徉在一个难以言喻的世界……抛下世俗的束缚和规矩，只剩自由，为所欲为……\n（笔记逐渐模糊）\n……\n就在刚才，送食物的佣人惊恐地从房间里逃了出来，嚷着看到的异象：一张宫廷戏剧的魔鬼面具掉在地上张牙舞爪……安东尼奥大师像被牵线一般扯在墙上吊起了手脚……琴弦和琴弓自己在他身前演奏……\n上帝为证！我绝不相信他的胡言乱语，更不会去一探究竟。我怎么能因一时好奇打断大师的创作？\n等等、等等！琴音，琴音完全停止了——这令人匪夷所思的杰作终于完成了？\n我再不奢望自己能达到那位大师一样“为才华所累”的境界，只是卑微地企盼着能有幸欣赏这支作品的完整演出……'
        },
        {
          id: 'II',
          year: '2022',
          title: '杂乱乐谱背面的留言',
          letter: '亲爱的安德莉亚：\n\n数月未见，最近还好吗？\n曾经，我们无数次庆幸那首咏叹调能拨开你耳中的迷障。比起那些听力健全、自诩高雅之人，你更能与我共鸣琴弓下书写的文字，琴弦中讲述的语言，乐谱上镌刻的回忆。\n“我想你，亲爱的。\n当阳光在海面跳跃时，\n当月光照耀在清泉时，\n当星光点缀在银河时……”\n琴弦跳动，你的声声唱词敲开了我的心门，填满了所有空间。\n而如今，这扇门再一次关闭，我成为了那个失聪者，闭耳塞听。\n\n你知道，我拥抱欢愉，避畏苦难。\n你也知道，我向来忌惮那首曲子，拼尽所有意志抵御着它的魅惑；\n即便你百般恳求，甚至以分手相胁，我也绝不会……也绝不该……\n……我！我还是妥协了。\n当再次演奏那首独弦曲，身体的每个骨骼，都不再属于自己了。沉浸在魔鬼之音的海洋中，苦涩腥咸的旋律刺痛着五官，模糊了所有感官的边界——\n为琴弦所俘获的傀儡，再度沉浸于销金窟的欢愉和久违的快感中。\n直到远处的哭喊穿透了一切——眼看着挥砍的琴弓随着惯性渐渐摆落，我心中恐惧和后悔才阵阵袭来。\n瑟缩在一片狼藉中的你哭泣着逃出了房间。\n阳光、月光、星光……在那一刻，所有音符都暗淡无光。\n…………\n我为你受到的伤害感到抱歉。\n我为发生的一切感到抱歉。\n我为我所做的和没有做的感到抱歉。\n\n那天之后，我四处奔波演奏，在人海中寻觅那双温润的目光，那声心中共鸣的天籁。\n……但你没有出现。\n直到一位自称剧院老板的人将我指向欧利蒂丝庄园：\n“在这里，你不仅可以见到她，还可以永远摆脱‘他’。”\n这是一场没有退路的赌局，但这次也绝不会血本无归。\n我深信你也在期待这段故事的续写，抑或是，一段与前奏相匹配的尾奏——\n这首曲子就名为《安德莉亚》。\n\n爱你的，\n安东尼奥'
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
