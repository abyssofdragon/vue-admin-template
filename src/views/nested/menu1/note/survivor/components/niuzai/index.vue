<template>
  <div>
    <h3>牛仔</h3>
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
          role: '牛仔',
          type: '传闻',
          text: '来自美洲大陆的冒险牛仔，他曾与神秘的印第安部落一起生活，练就了令人惊叹的套绳技艺。'
        },
        {
          role: '牛仔',
          type: '故事背景',
          text: '来自美洲大陆的牛仔，年少时曾与一位印第安部落的少女成为挚友，向她习得了令人惊叹的套索技艺。多年后，意外落难的凯文再次为印第安部落所救，热情爽朗的他很快融入了他们的生活。可惜好景不长，部落衰亡后，他选择漂流到欧洲大陆。'
        }
      ],
      deductionCN: [
        {
          role: '牛仔',
          id: 1,
          title: '遇见',
          content: '认识一位新朋友，在厄运降临之前，你总以为会是件幸运的事。',
          conclusion: '一张照片，跌坐在雪地里的男孩仰望着挡在身前衣衫褴褛的印第安女孩和不远处的疯牛。女孩手里牵着一条精致的套索。'
        },
        {
          role: '牛仔',
          id: 2,
          title: '知恩图报',
          content: '每一个有良知的人都不会对落难的女孩不管不顾，更何况她还是我的恩人。',
          conclusion: '一张合影：凯文一家和女孩围坐在破旧的壁炉旁，其乐融融，女孩正在把自己的套索递给他。'
        },
        {
          role: '牛仔',
          id: 3,
          title: '期待',
          content: '生活本就如此，不是所有的愿望都拿轻易实现。',
          conclusion: '也不是所有的离别都能有再见的机会'
        },
        {
          role: '牛仔',
          id: '4',
          title: '噩梦',
          content: '不，不可能!他们不是那样的人!至少原本不是。',
          conclusion: '悬赏告示：杀死印第安人的美国居民可以获得一笔赏金，这么说来，家里前不久添置的几头牛羊就是得益于它了。'
        },
        {
          role: '牛仔',
          id: '5',
          title: '生计',
          content: '离家出走不仅需要决心和勇气，还需要……钱',
          conclusion: '雇佣协议：农场主将定期向凯文阿尤索先生支付酬劳。幸好，对于身手矫健的牛仔来说，要维持生计也不是什么难事。'
        },
        {
          role: '牛仔',
          id: '6',
          title: '死里逃生',
          content: '被困在这里已经三天了，很冷很饿……我是不是……要死了?',
          conclusion: '一张照片：几个印第安人围绕着躺在火堆边的凯文，看上去像是族长的老人手里拿着一条精致的套索，情绪激动。'
        },
        {
          role: '牛仔',
          id: '7',
          title: '赎罪',
          content: '热心，是出于感激还是出于愧疚？',
          conclusion: '我所隐瞒的那两个人的罪孽，以及我的同胞对他们犯下的恶行，我想尽力弥补。'
        },
        {
          role: '牛仔',
          id: '8',
          title: '赶尽杀绝',
          content: '他们的攻击越来越频繁!我们似乎陷入了死局。',
          conclusion: '“相信我!我没有泄露大家的踪迹，我不是奸细”'
        },
        {
          role: '牛仔',
          id: '9',
          title: '犹豫',
          content: '如果我说出当年的真相……不……还是不要了。',
          conclusion: '“我曾和令媛是非常好的朋友，我们一起度过了一个美好的冬天。怎么……她后来没有回来吗？”'
        },
        {
          role: '牛仔',
          id: '10',
          title: '难承之重',
          content: '死人是不会出现的，那是……良心沉重的阴影。',
          conclusion: '一封给族长的告别信和一袋金币。看起来这是他的全部家当了。'
        }
      ],
      letterCN: [
        {
          role: '牛仔',
          id: 1,
          year: '2019',
          title: '【】敬启',
          letter: '尊敬的【】：\n既然您已经完成了我的委托，那不妨再听听这个流浪者的自白吧。\n就像在广袤的荒原里，两个旅人在星空下点起一个篝火，面对面坐下，娓娓自述彼此的故事。\n安吉丽娜，安吉丽娜——她曾向我描绘过，而我也终于见到了：\n我见过成千上万的野牛群奔驰在草原上。苏族的族人们跟着他们心中的图腾一起迁徙，跨越美洲，追逐夕阳。\n也见过被剥皮的野牛曝尸在草原上，满是贪欲留下的枪洞，连野狼都不愿意分食。\n我没有能力阻挡“文明”的扩张，也没有勇气为少数人争取他们生存的公理。\n我的父母给了我生命，但我选择离家出走。\n安吉丽娜给了我信任，但我没有保护好她。\n族长夫妇给了我温暖，但我没有以诚相待，甚至没有将其女儿的遗物归还——牧场的牛仔圈下了印第安人的猎场，而流浪的牛仔夺走了一对老夫妇对幼女最后的缅怀。\n安吉丽娜，安吉丽娜，原谅我吧，\n我还是那个手足无措的男孩。\n但我永远不会放弃你为我启蒙的自由：\n部族的勇士，与野牛狂奔，\n与荒狼共舞，与苍鹰比高。\n——来自凯文·阿尤索的自白书'
        },
        {
          role: '牛仔',
          id: 2,
          year: '2020',
          title: '凯文的庄园日记',
          letter: '第三夜\n“谁来喝那份毒药？”这场无休无止的争吵越来越丑陋了。\n那两个自诩“文明社会”来的人，就像两头臭鼻子的蠢牛，不停地对看不惯的家伙喷气。他们都一样自私狭隘，只会害怕、排挤那些自已无法理解，又不愿理解的东西——奇装异服、巫蛊符咒……和又一个离开家乡的异族女孩。\n就算是别有用心的巧合，我也不能让同样的事情发生两次。\n但我为什么没有早点站出来？就任由那个女孩也把我视作拉帮结派的小人？我怎么就沦落为——这该死的游戏！原来这就是它的真正恶意。\n原来我始终只是一个空有倔强，却没有勇气面对的懦夫，还谈什么牛仔的风范？勇士的精神？\n……\n我没有忘记，安吉丽娜……你心目中的部族英雄，行要成颂歌，写要成诗句。\n我尽力了。\n我只能写出这自我鄙夷的独白。\n目睹了种种不公的旁观者，妄自潇洒，却从没有放下。\n……我想要一次原谅自己的机会。\n也许……也许那份毒药只是一个考验？'
        },
        {
          role: '牛仔',
          id: 3,
          year: '2021',
          title: '凯文·阿尤索的一页实验档案',
          letter: '编号：5-?-4\n姓名：凯文·阿尤索\n\n【测试标记】\n1、自我否定\n2、道德洁癖\n3、情绪冲动\n\n【测试倾向】\n自诩自由，困于内疚的懦夫。\n\n【测试结果】(阶段性）\n1、整体评价：5-?-4号并未如计划参加“游戏”。但他的提前出局成为了“催化剂”，加速了实验的进程。\n\n2、流程说明：\n5-?-4号的既定思维逻辑非常容易摸透：只要善加利用其负罪感和道德上的洁癖，他本应是一个稳定可控的实验变量。\n然而，将5-?-4号与5-?-5号安排在同一个组内进行实验，是一个非常冒险，也非常有创造力的决定。两者之间的接触，走向了情理之中，意料之外的发展：鉴于5-?-4号并没有进入“游戏”环节，遂对其观察和研究只能暂时停留在“阶段性”上。这也是一种启发——“游戏”未必真的需要实验对象全员参与。\n\n3、阶段性总结：\n该实验目标最值得玩味的表现，是其与人相处的方式：5-?-4号在实验中对女性和男性表现出截然不同的偏执态度。\n5-?-4号对女性的保护欲，是不分民族、身份、立场的。其对女性的“利她行为”，往往超过了对异性的正常示好。结合其过往经历分析可得出：他将少年时期那段经历中的愧疚对象，映射到了其他女性身上，并加以过度的保护欲，以缓解内心惧怕悲剧重演的不安（这点在他与5-?-5号的后期接触中最为明显）。这也可以理解为是一种自我保护的心理暗示。 5-?-4号对男性的负面态度相对复杂，表面上看是一种夸张化的同性竞争。但也源自于上述少时牛仔经历中懦弱、自私等负面的自我认知。\n他往往将这些负面的自我评价映射到了其他男性身上。佐证之一，就是他会脱离对方男性的外表、态度、立场，只根据对方片面的话语和行为，就将对方比喻为狼、牛、鹰、马等自己熟悉的动物，辅以卑劣，蛮横，胆小等负面词汇进行界定和攻击。这完全是一种幼稚的主观偏见。\n换一种具体的方式表述：当有男女双方在他面前产生矛盾时，他就会在潜意识中将女性视作当年那位需要保护的伙伴，将男性视作需要防备和提点的、当年“手足无措”的自己。\n就此而言，他始终困在自己的愧疚之中。…'
        },
        {
          role: '牛仔',
          id: 4,
          year: '2022',
          title: '沾有酒渍的记录',
          letter: '在庄园的最后一夜：\n终于完成了修葺马场的委托，也是时候准备告别了——向往自由的勇士将继续冒险之旅。\n安逸的生活令我涣散，广袤的荒原、成群的野马……这些曾经记忆中的美好事物，也逐渐模糊远去。\n离别前夜，庄园的主人摆上丰盛的酒席，热情地为我饯行。过去两周，他甚至对我的健康状况亦颇为上心。\n但举杯欢谈之间，我常不经意地磨搓手心老茧，忍耐着数日以来挥之不去的头痛，总觉得丢失了什么曾经紧握的东西。\n许是担心过去的事被埋葬，我竟对坐在对面的新朋友敞开了心扉。\n\n……\n话题从两周前的狂欢游戏讲起——那两个与绅士行为大相径庭的家伙，竟对一个异族女孩步步紧逼！无休无止的争吵令我头痛……唯有将他们逐出庄园，才配得上牛仔的风范、勇士的精神。\n\n……\n聊到曾经的部落生活，我对过往种种细节已无法清晰明辨。“文明”的扩张、少数人的公理……但想到自己正在此适闲享乐，我便暂且安下心来——冲突与纷争大抵已悉数解决。\n\n……\n谈及亲密的人，我不禁沉溺于对安吉丽娜的想念中。虽然记不起她在面对发狂野牛时那慌张稚嫩的样子，但……见我对回忆产生迟疑，庄园主先生居然一反常态，唐突地问我这个女孩是否尚在。全然不顾我不悦的沉默，他竟还反复逼问。摔碎的酒杯、掀翻的器皿、晃动的重影……直到我要离席而去，他才意识到自己的失礼，在致歉之后回到彬彬有礼的做派，满意地点头，继续倾听故事。\n也许是酒精的作用，数天来偶发的头疼也减轻了不少，但口中所言所语的画面在脑中却越发模糊：安然离去的异族女孩…归复安稳的部族…微笑着的安吉丽娜，正挥着手，等我归家……\n无需继续胡思乱想。毕竟，明日醒来，便可启程了。'
        },
        {
          role: '牛仔',
          id: 5,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

