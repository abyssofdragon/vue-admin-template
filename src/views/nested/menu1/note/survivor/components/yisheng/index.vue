<template>
  <div>
    <h3>医生</h3>
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
          role: '医生',
          type: '传闻',
          text: '要在这个疯狂的世界里存活，光行善举可不够――不是所有的病人都能得到妥善的照顾，也并非每位医者都怀着仁心仁德。'
        },
        {
          role: '医生',
          type: '故事背景',
          text: '她有野心，极其聪明看起来又不失真诚，但在那双眼睛后面还藏着更多东西，要在这个疯狂的世界里存活，有时候就得做些惊人之举。已经对不停地搬迁感到疲倦，艾米丽希望能借此找到一个可以被称为“家”的地方，并且最终得到她从未拥有的安全感和稳定生活。在此之前，她得解决过去遗留的一些”问题“。'
        }
      ],
      deductionCN: [
        {
          role: '医生',
          id: 1,
          title: '注射研修',
          content: '每个注射医师都经过这样的时光，在为病人进行第一次注射时，早在自己身上实践过千百次',
          conclusion: '“余愿尽己之能力与判断力之所及，恪守为病家谋福之信条，并避免一切堕落害人之败行。”'
        },
        {
          role: '医生',
          id: 2,
          title: '诊所开张',
          content: '获得执业资格后我用所有资蓄租下了一间小小的铺面，我想要帮助更多的人。',
          conclusion: '照片：看起来更年轻的艾米丽医生站在一间叫做“莉迪亚琼斯诊所”的建筑物面前。'
        },
        {
          role: '医生',
          id: 3,
          title: '技艺渐精',
          content: '虽然诊所的病人不多，但这里能提供医学院里无法接触到的经验。',
          conclusion: '一页账簿：记录着六月到十二月的收入和日常支出，收入与支出严重失衡，这间诊所在亏损。'
        },
        {
          role: '医生',
          id: '4',
          title: '医术精湛',
          content: '尽管很残酷，但对于个人诊所而言，哪怕一次失误，也可能带来无法挽回的结果。',
          conclusion: '一张名片：莉迪亚琼斯，可靠而保密的妇产科医生。质地优良的纸张和精细的印刷体现了名片主人的财力，看来她已然度过难关。'
        },
        {
          role: '医生',
          id: '5',
          title: '仁心仁德',
          content: '永远不要忘记自己的誓词：无论何适何遇，逢男或女，民人奴隶，余之唯一目的，为病家谋福。',
          conclusion: '一张告示：琼斯医生将在周三上午将在白沙街59号的疯人院进行义诊，周三营业时间调整至下午2点到6点。'
        },
        {
          role: '医生',
          id: '6',
          title: '誓约',
          content: '心灵的圣洁正是终生宝藏之所在。',
          conclusion: '“余必不以毒物药品与他人，并不做此项之指导，虽人请求亦必不与之。”'
        },
        {
          role: '医生',
          id: '7',
          title: '独力难支',
          content: '有时候面对生活的困境，你不得不妥协，但逃避真的能解决问题吗？',
          conclusion: '诊所广告：琼斯医生为女性顾客提供私密的医疗服务，这听起来像某些不可告人的勾当。'
        },
        {
          role: '医生',
          id: '8',
          title: '掩盖真相',
          content: '不！不能被抓住，为什么会变成这样……',
          conclusion: '照片：图片中拍摄到了几只饥饿的野狗，它们在莉迪亚琼斯诊所外面撕咬着一袋垃圾，也许我不该深究那是什么。'
        },
        {
          role: '医生',
          id: '9',
          title: '铤而走险',
          content: '有时候要达到目的，不得不破坏规则',
          conclusion: '一页账簿：收入大幅度增长，看起来那则广告卓有成效，仅仅三个月，诊所已经转亏为盈。'
        },
        {
          role: '医生',
          id: '10',
          title: '崩坏',
          content: '破坏永远比创造更轻松，每个人都要小心。',
          conclusion: '一篇报道：某妇人在莉迪亚琼斯诊所接受了非法手术，手术途中医生抛下病人离开了诊所。'
        },
        {
          role: '医生',
          id: '11',
          title: '逃之夭夭',
          content: '我把你们救下来，并不是真的想带你们走，只是想让你们再体验一次绝望的滋味。',
          conclusion: '通缉令：尽管年龄和神情都不太一致，但莉迪亚琼斯，看起来就是化名艾米丽黛儿的医生。'
        }
      ],
      letterCN: [
        {
          role: '医生',
          id: 1,
          year: '2020',
          title: '给洛琳修女的信',
          letter: '尊敬的洛琳修女：\n我犯下了非常严重的错误。\n这导致在未来很长一段时间内，我将无法回到白沙街疯人院继续之前的志愿者工作。\n写信给您并不是想要为我糟糕的行为辩解，只是在离开前，我认为有必要向您报告我在工作中发现的一些事实。\n白沙街疯人院的病历记录存在着一些可怕的谬误。\n经过对病患丽莎·贝克的治疗与评估，我意识到那些孩子们——来自孤儿院的孩子们，他们也许在性情上不那么温顺，我的意思是，他们的确不那么容易感到快乐，并表现出多疑或偏执，但基于我的认识，这些孩子们，从心智和行为逻辑上，与“正常”的孩子并没有什么区别。这些孤儿们也许遭遇了一些恐怖的事情，也许他们的行为存在偏差，但我相信他们仍然值得第二次机会。\n因此，恳请您发起对院内病患的重新评估。\n 为了您自身的安全与一些必要的隐私顾虑，我强烈建议您向第三方的专业人士寻求协助。\n我知道自己的建议听起来有些荒谬，也许在不久之后您会听到一些关于我的“传闻”，但在那些孩子的治疗过程中，我遵守了自己的誓言并将为之战斗至最后一刻。\n为了病人的福祉，为了那些可怜的孩子，请您尽快发起评估。\n\n您忠诚的莉迪娅·琼斯'
        },
        {
          role: '医生',
          id: 2,
          year: '2021',
          title: '一封邀请函',
          letter: '尊敬的黛儿女士:\n或许，您更希望我称呼您为琼斯医生?\n请原谅我的贸然叨扰。\n对于您目前的处境，我深感惋惜。\n对于那个意外，我的一位朋友，觉得他多少也有些责任。我受他所托，希望能做些什么，对如今的局面有所挽回。\n比如一笔可观的资金援助?\n或许，我们可以给彼此一个与过去和解的机会?诚邀您来我的庄园一叙，地址与旅行费用随信奉上。\n\n德罗斯\n敬上'
        },
        {
          role: '医生',
          id: 3,
          year: '2022',
          title: '艾米丽·黛儿一页实验档案',
          letter: '编号：4-0-4\n姓名：艾米丽·黛儿\n\n【测试标记】\n1、被需要\n2、同情心\n3、救赎\n\n【测试倾向】\n\n寻求自我救赎的“罪人”\n\n【测试结果】\n1、整体评价: \n由于4- 0 - 4的职业背景和际遇, 对于她的到来，我本存在较高的警惕，但多年的逃亡生涯和内心煎熬已然使她曾经敏锐的观察力和基于职业追求带来的判断力在大多数时候都失去了效力，让她成为了一个足够安全的实验对象。\n2、流程说明：\n如实验计划所设计的，4 - 0 - 4对4 - 1 - 1表现出了超乎寻常的关注和保护欲，这种倾向随着实验的进行愈发高涨，直至逐渐变质。\n实验初期，4 - 0 - 4的这种倾向仅停留在对4 - 1 - 1释出友善信号，并提供力所能及的保护。\n到中期，4 - 0 - 4意识到了4 - 1 - 1本身的危险性，她非但没有远离，反而将最初的保护措施升级为阻断威胁。\n在此期间，因为针对4 - 0 - 3关键信息的投放，4 - 0 - 4本身也直接暴露在了危险之中，事实上，4 - 0 - 4察觉到了这一点，却表现得近乎置若罔闻。\n这种反常，在实验末期，她对是抹除威胁到4 - 1 - 1的安全隐患还是利用这个安全隐患转嫁自身生存威胁进行抉择时，得到了验证, 4 - 0 - 4最终选择了前者。\n\n3.实验总结：\n4 - 0 - 4作为这组实验中联系实验对象的重要纽带，实际起到的作用超出预期。\n在最初实验目的的设计上，她本应只作为一个催化4 - 1 - 1和4 - 0 - 3实验效果的参与者存在。但她与4 - 1 - 1复杂的过去，以及危桥效应影响下产生的情感链接，让实验主体4 - 1 - 1的实验结果产生了另一种可能性，虽然这种可能性最终未被实践，但却为之后的实验提供了一种新的设计思路。\n同时对于4 - 0 - 4的观察，让我意识到负罪感能起到的实验效果较难被准确观察与控制。\n在偿还亏欠和自我救赎的优先级判断中，主体意识和客体存在随时都在影响，即便有大量实验对象信息作为数据支撑，仍会伴随较大的随机性，并不太适合应用于此阶段实验。'
        },
        {
          role: '医生',
          id: 4,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '医生',
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

