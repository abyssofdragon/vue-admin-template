<template>
  <div>
    <h5>爱哭鬼</h5>
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
          year: '2020',
          title: '给德罗斯男爵的信',
          letter: '尊敬的德罗斯男爵:\n作为精神病学领域的专家，您一直乐于分享并不断地给予我医疗上的建议。这次写信打扰，是想请您帮助我进行一项鉴定，如您愿意拨冗前往白沙街疯人院，我将不胜感激。\n在收到一位义工的举报信后，我察觉到白沙街疯人院内可能存在着一些恐怖的谬误。我不能也不应当在这封信中透露，但今天院内发生的一桩“事故”使我彻夜难眠，我坐在书桌前，反复地诘问自己，是否遵循了神的旨意?\n我曾对您说过，这所疯人院将是我的家庭。在一个井然有序凡事基于友爱和睦的家庭中，孩子们对父母拥有绝对的信赖与服从，父母又如何可无视孩子们所遭受的折磨?正如雅各书2:17所言“信心若无行为便是死的” ，又有 第九诫“不可做假证，害你的近人”，我若将自己视作孩子们的父母，则不可无视他们的真实处境和那些不应降临到他们身上的痛苦。\n为了您的安全和确保复诊计划的顺利实施，我将以捐助人的身份将您介绍给杜克神父。\n期待您的回信。\n\n祝安\n洛琳修女'
        },
        {
          id: 'II',
          year: '2021',
          title: '扉页被撕毁的日记本',
          letter: '2月11日\n吵死了!新来的家伙真是个爱哭鬼!\n\n2月12日\n我就猜到会发生这种事!只是小哭包居然没事，反而他姐姐……不过容貌并不能当饭吃，缺了一只手更容易得到施舍。\n说起来幸好今天有个讨得最少的倒霉蛋垫底，不然我又得被“臭老鼠”打了。\n\n2月22日\n最近进进出出的陌生人变多了，还会在夜里搬运奇怪的器具。\n我昨晚看到一堆可以折叠的小刀，样子跟普通刀子不太一样，多洛雷斯说那是医疗放血工具，但我觉得那刀看起来更合适撬锁，所以悄悄拿了一把。\n其他还有什么内外都能拆分的玩偶娃娃、装饰着很多金属的腰带和头带、看起来像金属但能流动的液体……我长这么大从来没见过这些，反倒是多洛雷斯脸色不太好，自言自语放血疗法，电击腰带、人体模型……\n我问她怎么知道那么多，多洛雷斯只说以前在家庭医生那见过，我不知道她是不是在说谎，但也许他俩真的不是普通穷苦人家的孤儿。\n\n3月29日\n虽然讨厌的老鼠变成了修女和神父，但严苛的规矩同样让人喘不过气。还有那些苦涩的药剂，他们说我病了，但我知道我没病。\n\n4月6日\n最近脑子好晕，好累，所幸勉强还能握住炭笔。\n\n4月9日\n我看到了!多洛雷斯把小哭包的汤药倒在了窗外的杜松树下!我这愚蠢的脑子真是被老鼠啃了，我也早该这么做!\n\n4月23日\n糟了，多洛雷斯也开始大叫了，她认不出小哭包了?可她不是把汤药倒了吗?\n\n4月24日\n我就猜到我就猜到，他们会拖走多洛雷斯我就猜到!\n今晚要不要偷偷去看看?\n我记得那有个提拉式的窗户，虽然一直锁着而且很重，但我的小刀应该能撬开。\n\n4月25日\n我这个房间都能听到多洛雷斯的惨叫，更别提小哭包的位置了，我要不要过去安慰他?说起来已经好久没听到他哭了。\n等等，我好像听到了斧子落地的声音……他想干什么?\n不会的，应该没事吧，他那么矮进不去的，窗户也那么重……\n窗户?窗户好像……\n我的老天!糟透了!昨晚离开时我忘了关窗!'
        },
        {
          id: 'III',
          year: '2022',
          title: '半块白面包压住的纸片',
          letter: '亲爱的罗比:\n姐姐终于等到这一天了，你看今晚多安静啊，没有聒噪的打骂声，也没有人会来打扰我。\n我终于可以像个正常人一样提着篮子去见你了。还给你拿了一块白面包喔——姐姐终于拿到了。\n我想我该趁还拿得动笔，趁脑子还清醒的间隙，和你好好说说话。\n小罗比还记得我们一家四口在一起的日子吗？\n那种充溢满胸腔的软糯糯的暖意，是我如今逐渐麻痹的五感中最清晰的感知。\n那时每次睡前父亲母亲都会给我们一人一个晚安吻，而你会在每天清晨轻吻我的脸，等我睁眼，你就拉着我说姐姐早安。逆着晨光，你的眼睛笑盈盈的，像天使一样，我一辈子都不会忘。\n那时我常常想，这微不足道的一生最值得自豪的，就是有这么温柔的父亲母亲，有这么可爱的罗比。\n然而，然而……\n都说没人能预料到爱何时来临，一旦发生就不能回头。在这一点上，死亡与它多么相似啊。\n但对我来说整个世界被掩埋的绝望，对他们来说，不过就只是杜松树下多了一抔土那么不值一提。\n即便有人不再存在，白沙街疯人院依旧如常，冰冷得让人窒息，无所感受，无从思考、机械的重复，宛如死亡。\n我不怕自己就这样死去，只怕在去见你前不能为你做任何事。\n\n不过现在，这样的机会降临了，过去的屈辱都是值得的。你知道吗罗比，他们最初对我特别戒备。\n可高高在上的“神明”们，谁能拒绝一个逗乐又听话的傻子呢？\n既然他们早已丧失了人性，既然疯人院就是个地狱，那就让一切都埋在这抔土下好了！\n放心，姐姐也会去见你的。能让罗比不孤单的话，姐姐也会开心。\n\n对了，还有最重要的一句：\n我的天使，生日快乐。\n\n永远爱你并且永远想你的\n姐姐'
        },
        {
          id: 'IV',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2024',
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
