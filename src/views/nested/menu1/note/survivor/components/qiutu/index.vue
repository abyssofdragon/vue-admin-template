<template>
  <div>
    <h3>“囚徒”</h3>
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
          role: '“囚徒”',
          type: '传闻',
          text: '卢卡·巴尔萨曾是世人瞩目的发明天才，即便身陷囹圄时也未曾放弃心中最隐密的愿望，而今他重获自由，再也没有什么能阻止他去完成那最伟大的蓝图了。'
        },
        {
          role: '“囚徒”',
          type: '故事背景',
          text: '曾经的卢卡‧巴尔萨在绝大多数人眼中友善亲和，他对各种科学发明充满了好奇。拜入城中最著名的大发明家门下，成为了一位发明助理，很多人看好他继承大发明家衣钵，但一切在一场学术争端后戛然而止。大发明家声称卢卡将研究成果私卖给了竞争对手，一场实验室电力事故使大发明家身亡，卢卡的大脑也遭受了损伤并背负了谋杀指控。卢卡被判处绞刑，却在最后时刻不知为何得到了赦免。但家产也被用来支付给发明家遗孀赔偿。然而，卢卡并未放弃实践自己那项发明的决心，所收到那封附带巨额奖励条件的邀请函后，他决定铤而走险。'
        }
      ],
      deductionCN: [
        {
          role: '“囚徒”',
          id: 1,
          title: '弧光',
          content: '短暂，危险，耀眼如太阳的幻觉。',
          conclusion: '一篇日志：我在父亲的书箱发现了三张手稿，天才的杰作，但看起来似乎少了几页，不过没有关系，有朝一日我一定会完成它。'
        },
        {
          role: '“囚徒”',
          id: 2,
          title: '阻抗',
          content: '那些成就你的东西，也会阻碍你。',
          conclusion: '一张被撕碎的入学通知：我们非常荣幸可以迎接像卢卡斯・巴尔萨克阁下这样尊贵的人物入校，相信不久的将来您的家族一定能以你为荣。'
        },
        {
          role: '“囚徒”',
          id: 3,
          title: '介质',
          content: '能量的传播，需要通过碰撞实现。',
          conclusion: '一张拍卖成交纪录：在一系列昂贵的古董成交纪录里，一位叫做阿尔瓦的竞拍者，以不可置信的价格竞拍走了一张手稿。'
        },
        {
          role: '“囚徒”',
          id: '4',
          title: '调谐',
          content: '你只是拥有者，而非创造者。',
          conclusion: '一则轶闻:城中一位贵族因为常年投资新兴产业失败耗光所有家产，只能拍卖妻子的嫁妆还债，气死了自己的妻子，他的儿子无法原谅他，离家出走。'
        },
        {
          role: '“囚徒”',
          id: '5',
          title: '耦合',
          content: '智慧的共振，需要相似的灵魂。',
          conclusion: '一张广告:工业博览会将于近日在城中举行，届时世界各地的发明家将齐聚于此，本市大发明家阿尔瓦·洛伦兹也将出席。'
        },
        {
          role: '“囚徒”',
          id: '6',
          title: '校正',
          content: '每一场试验，都有不同的校验标准。',
          conclusion: '一篇日记:我终于拜入了洛伦兹的门下，以一张手稿作为代价，但总有一天他会明白，我本身远比那些手稿有价值。'
        },
        {
          role: '“囚徒”',
          id: '7',
          title: '互感',
          content: '时间，并不一定能改变一切。',
          conclusion: '一张旧合影:照片上的两个人一个是一身工装、初出茅庐时的洛伦兹，一个是衣着华贵，看起来跟卢卡·巴尔萨有六七分像的年轻人。'
        },
        {
          role: '“囚徒”',
          id: '8',
          title: '临界',
          content: '天赋的兑现条件是什么？',
          conclusion: '第一份实验记录:即便实验步骤各不相同，但实验结果都是失败，前段的实验者签名是洛伦兹，中段是洛伦兹和巴尔萨，后段，只有巴尔萨。'
        },
        {
          role: '“囚徒”',
          id: '9',
          title: '互斥',
          content: '疯子，还是窃贼？',
          conclusion: '一张报警备案:阿尔瓦·洛伦兹报警自己的实验室失窃，丢失的物品除了一些记录客户信息的交易档宾外还有一些私人手稿。警方初步怀疑是洛伦兹的竞争对手所为。'
        },
        {
          role: '“囚徒”',
          id: '10',
          title: '极',
          content: '你只是需要一个契机。',
          conclusion: '第二份实验报告:实验者是巴尔萨，所有实验步骤都完全相同，实验结果没有填写。'
        },
        {
          role: '“囚徒”',
          id: '11',
          title: '超调量',
          content: '最小的改变，最大的偏差。',
          conclusion: '一则警讯:洛伦兹实验室发生爆炸，这次爆炸造成三人丧生，两人重伤，一人轻伤，爆炸起因警方初步推断为洛伦兹发明助理卢卡·巴尔萨进行违规实验所致。'
        }
      ],
      letterCN: [
        {
          role: '“囚徒”',
          id: 1,
          year: '2021',
          title: '一封陈旧的自荐信',
          letter: '尊敬的洛伦兹教授：\n您好。我是前日在莱顿工业与艺术博览会上与您交谈的学生，卢卡斯·巴尔萨克。自展会一别后，我实在无法抑制内心的激动与对您的景仰！冒昧致信，望请海涵。\n在博览会之前，我就有幸拜读过教授的文章，对您在电磁学方面的研究及您的电子论初步猜想产生了极其浓重的兴趣。而展会上与您简单而宝贵的交流，更是坚定了我想要加入您的研究室的决心。事实上，当我看到展台上那件伟大作品的瞬间，我就确信，它将成为我毕生的追求！虽然目前它只是个模型构想，但我坚信在您的理论指导及实验论证下，终有一日，“永恒的完美机器”将不再是空谈。\n另外，想必您已听闻又有一国科学院通过了类似“拒绝审理倍立方，三等分角，以及表现永恒运动的任何机器”这样的决议，这也许会使我们今后研究所付出的代价翻倍，但我绝不会退缩，毕竟献身科学的代价，我、或者说我的家族早就尝过了。我是说，我绝不认为这一系列研究是他们所谓的浪费工具、时间与才智。我们也并非是一无所获的！虽然并不想提及那个人，但他，我的父亲，在为这项研究耗尽家业后总算是得出了一些也许还不太成熟的理论猜想……至于那些试验记录和理论猜想的手稿，都附于信末。敬请教授审阅，也望您能给予宝贵的指导意见。\n感谢您于百忙之中阅读我的自荐信，期盼能成为您的学生。\n\n您诚挚的\n卢卡斯·巴尔萨克'
        },
        {
          role: '“囚徒”',
          id: 2,
          year: '2022',
          title: '一页字迹凌乱的日记',
          letter: '真相被记录在那些繁密的计算缝隙里，我不会看错，的确是赫尔曼·巴尔萨克的笔迹。\n难怪拍卖会上洛伦兹不惜斥以巨资，难怪那个人的手稿全被他锁了起来，原来只不过因为手稿字里行间全是他背叛那个人的证据!\n虽然我不在乎那个人死亡的真相，但阿尔瓦·洛伦兹，这个盛誉在外的大发明家，“完美机器” 的第一推动者，我的导师，竟然是个彻头彻尾沽名钓誉的伪善者！居然要靠剽窃合作者的成果立足?\n抄袭对象还偏偏是……令人作呕。\n从时间上看，也许他腐烂得比那个人还要久。\n我不该忘的，老鼠总是群居，鬣狗才急需合作。阿尔瓦·洛伦兹可是和那个抛家弃子的败类合作多年的人，能是什么好东西?\n今天之前会因为“小洛伦兹”这个称号而自得的我真是蠢透了，我不想也不可能成为他，没有自我思考的人只是动物，不，甚至比不过昆虫，这个蚤蝼，沙蝗，尺蠖，拟叶的螽斯！'
        },
        {
          role: '“囚徒”',
          id: 3,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“囚徒”',
          id: 4,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“囚徒”',
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

