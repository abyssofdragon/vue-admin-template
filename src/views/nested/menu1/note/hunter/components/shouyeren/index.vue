<template>
  <div>
    <h3>守夜人</h3>
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
          role: '守夜人',
          type: '传闻',
          text: '文明与道德被埋在黎明前，踽行于无止境的风雪中，伊塔库亚早忘了自己为谁守夜。'
        },
        {
          role: '守夜人',
          type: '故事背景',
          text: 'TBD'
        }
      ],
      deductionCN: [
        {
          role: '守夜人',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: 3,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '守夜人',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '守夜人',
          id: 1,
          year: '2021',
          title: '给劳拉姑妈的信',
          letter: '亲爱的劳拉姑妈，\n非常感谢您之前的帮助，多利和小山姆已经恢复了健康，从前天起，它们已经开始正常吃草了。\n自母亲走后，只有父亲和小羊们与我相依为命。这些天，我有件非常困惑的事想向您求助，因为除您之外，再也没有会帮助我、关心我的人了。\n您知道，自母亲生病起，父亲的状态一直不好。他很少跟别人交流，甚至不再去做礼拜。有一天，他不知从哪里带回了一座猫形的神像。那猫实在诡异——它通体乌黑，有两只澄黄发亮的眼睛，简直像活的一样！每当我不小心与它对视时，都能感到它正紧紧地盯着我。\n父亲整天对神像念念有词，我劝导了他很久，他都置若未闻。直到母亲离世后，他才像从梦中惊醒似的，把猫神像收了起来。我原以为事情就此结束，直到上周……一个奇怪的男人来我家拜访。那人的服装上画着奇怪的图腾，半张脸都笼在帽子的阴影里，手臂上还有些闪电状的瘢痕。父亲与他长谈了很久，语气谦恭地称他为“教友”。紧接着——他们又把猫神像拿了出来，一起向它祷告！\n那男人从何而来？和猫神像又有什么关系？姑妈，我害怕极了，整夜难以入眠。我担心父亲已经被人蛊惑、背叛了我们的信仰。我不能再失去他！我不奢求他能得到神的宽恕——但，该怎样才能让他知道，认错了救命的绳索，只会愈发沉入悲惨的深渊？\n希望得到您的帮助和建议，期待您的回信，请您一定、一定替我保密。\n\n您的侄女，\n安'
        },
        {
          role: '守夜人',
          id: 2,
          year: '2022',
          title: '一封笔迹潦草的信',
          letter: '致我的亲人，我的教友，崇高而理性的阿尔瓦：\n感恩我们伟大的神明、黑夜中的真理。感激最真实的智慧——漆黑之眼的启示。在那日集会后，我这不堪的身躯上终于被剥下一粒俗世的碎片，得以在谎言包裹成的茧壳中瞥见一隅世间的真实。\n我为曾经的自己所不齿，我被那些愚蠢的谎言紧紧相逼、几近摧垮。我的家庭在他们的毒害下一步步落入深渊，而如今他们甚至想伤害我可怜的女儿……\n感恩漆黑之眼。愚钝如我，却仍有幸在泥淖中挣扎，a在被他们焚烧成灰烬前触到阿尔瓦投下的绳索。\n你告诉我，被“人”架构的神，本就是和人类同等愚蠢的东西。他们都被困于人的劣根性，否定自我、以神之名欺压同类。他们擅于“虚构光明，用阳光粉饰愚蠢，以圣人自持”……哈，若他们真是圣人，又怎会将我养育多年的女儿污蔑成恶魔的容器？ 怎会认为我那可怜又虔诚的妻子死于对信仰的亵渎？可怜的汉娜，她咽气时还是祷告的姿势，她还在为我们的女儿赎莫须有的罪……\n我会彻底离开这肮脏的地方，我的教友。我们要去更清净安宁的乡下生活，到那时再与你细谈。我感激漆黑之眼的启示，也将更认真地洗濯自己身上的愚蠢，得以侍奉我们的神。\n而正如它的启示中所说：\n漆黑之眼是宇宙的眼，它与宇宙同源，诞生于黑暗。因此它将真理藏于黑夜，避开被白日粉饰的愚蠢；\n相信它，你们便要学会分辨那藏于光芒的偏见，不再承受他人之愚昧；不可再进行灼烧自我的赎罪，对编造真相者摇尾乞怜；\n你们自知人类的愚蠢，便要摒弃、远离那愚蠢。\n但摒弃愚蠢与阳光后，却在夜里盲了的瞎子们呵，只要虔诚地向下凝望……它便能成为你们唯一的锐利的眼。'
        },
        {
          role: '守夜人',
          id: 3,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '守夜人',
          id: 4,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '守夜人',
          id: 5,
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

