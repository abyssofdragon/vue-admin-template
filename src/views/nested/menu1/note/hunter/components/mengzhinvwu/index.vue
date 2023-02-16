<template>
  <div>
    <h5>梦之女巫</h5>
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
          year: '2020',
          title: '湖景村调查报告',
          letter: '尊敬的吉尔曼小姐:\n我们仍然无法与沃尔克取得联系，因此我们派遣了新的调查员——克里斯，由他进入湖景村继续调查。\n以下是克里斯发回的报告原件:\n12月3日，到达湖景村，未见到任何当地居民，在沃尔克寄宿的居民房屋中找到了他的行李和后续调查报告。通知当地警备人员后得知与湖景村相邻的林场在9月26日发生过火灾，湖景村当地居民在扑灭火灾中表现英勇，之后外界再未见到当地居民。\n12月4日，进入林场调查，发现一处疑似举行过祭祀活动的地点，我在篝火内找到了一些巨大的鳞片，很可能这里举行过活牲火祭。同时，林场内的河流存在异常，该区域的植物大量枯萎，污染源不明。\n12月5日，前往湖岸进行调查，尝试向湖中投入生肉与牲畜，未发现沃尔克报告中提到的巨大阴影。\n12月6日，前往沃尔克报告中提及的山洞，未见异常，只是一个荒废的矿洞。\n鉴于湖景村已没有任何居民活动，克里斯认为湖景村不再具有调查价值。\n\n祝安\n您忠诚的\n亚瑟·罗素'
        },
        {
          id: 'II',
          year: '2021',
          title: '一页散发出潮湿恶臭的纸张',
          letter: '…………的圣徒非常生气，我告诉他，意外常有发生，不过好在并不难处理。\n我打算26号在湖边的林子里等老尤金，他会带来他家那个寄居客，他总是“乐于助人”。\n我们可以赶在圣所打开前，完成净化工作。\n\n……一切都很顺利，如果不是老尤金的老婆！那个该死的疯婆子！总说在火里看到了什么。\n不过，用不着计较太多，可怜的老家伙，总是一惊一乍，连树丛中小畜生发出的“沙沙”声都能吓着她。\n那不过是……\n（后面的字迹逐渐扭曲到无法辨认，纸张周围似乎被什么东西腐蚀了，并不完整）'
        },
        {
          id: 'III',
          year: '2022',
          title: '一份缺页的环境调查记录',
          letter: '第一页\n事件发生后, 实验室受命前往湖景村进行环境调查, 初步观测中未发现明显异常。\n更详细报告需对环境样本进行化验后, 才可给出。\n\n第二页\n湖景村水质样本化验报告结论: 该湖区含量远高于同地区其他湖区, 有不明微生物沉积。\n\n第三页\n湖景村土壤样本化验报告结论: 该区域土壤湿度远高于周围区域, 土壤酸碱性异常, 部分土壤样本呈强酸性, 部分有大量不明微生物沉积。微生物类型与水质样本中的沉积微生物一致, 但浓度较低。\n\n第五页\n因调查员离职、调查记录缺失、初始调查环境在暴雨后已遭破坏等诸多原因, 实验室针对湖景村事件的环境调查到此为止。\n由于实验室条件所限, 目前仍无法通过留存样本判断湖景村环境调查中异常现象出现的原因及微生物种类, 故已将留存的土壤样本与水质样本一同呈送皇家学会。后续调查将由皇家学会委派调查员跟进。'
        },
        {
          id: 'IV',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

