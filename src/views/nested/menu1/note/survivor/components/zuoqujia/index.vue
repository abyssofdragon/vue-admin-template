<template>
  <div>
    <h3>作曲家</h3>
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
          role: '作曲家',
          type: '传闻',
          text: '在被家族彻底放逐之前，弗雷德里克·克雷伯格的人生，需要一段峰回路转的变奏。'
        },
        {
          role: '作曲家',
          type: '故事背景',
          text: '弗雷德里克·克雷伯格儿时备受脑中幽灵折磨，直到他第一次参加了父亲的演奏会，美妙的音乐如同天光破狱般，盖过了一切杂音，包括他脑海中的恶魔低语。\n从此他便迷恋上了音乐，唯有音乐才能让他摆脱脑海中的声音，他相信音乐就是他在这个世界的救赎，是洪水中生命的方舟。\n他以为他会像他家族中其他人一样，受到了缪斯女神的庇护，成为闪耀的艺术新星，然而欧忒耳佩并未更爱他。\n久而久之，人们对他的“欣赏”，更仰赖的是他出众的外貌和感情上“让淑女们难以自拔”的做派，而非几近枯竭的“才华”。'
        }
      ],
      deductionCN: [
        {
          role: '作曲家',
          id: 1,
          title: '声部',
          content: '多么幸运,多数人孤独地降生在这个世界。',
          conclusion: '一件洗礼袍:未被使用过,上面有着精致的矢车菊刺绣。'
        },
        {
          role: '作曲家',
          id: 2,
          title: '主音',
          content: '闭嘴,疯子。',
          conclusion: '第一封诊断回执:克雷伯格大人，我们认为令郎偶发的异常亢奋是由于一种儿童精神障碍所致,这在以前的病例中也偶有出现，他们多数会在成年后自愈。'
        },
        {
          role: '作曲家',
          id: 3,
          title: '复调',
          content: '我们应该学会聆听另一种声音。',
          conclusion: '第二封诊断回执:克雷伯格大人，我们认为令郎皮肤上的局部病征，应该是色素异常所致，不会对他的生活造成过多影响，也与他的精神障碍无关，无须担心。'
        },
        {
          role: '作曲家',
          id: '4',
          title: '奏鸣曲',
          content: '找到你最喜欢的旋律，或者，最擅长的。',
          conclusion: '一张交响演奏会的节目单:压轴曲是一套由弗雷德里克·克雷伯格担任指挥的组曲，这套组曲从曲作到各个乐器群组的首席，都有着相同的姓氏——克雷伯格。'
        },
        {
          role: '作曲家',
          id: '5',
          title: '变奏曲',
          content: '杂音,是指那些无法契合上旋律的音符。',
          conclusion: '一段乐评:或许是这个姓氏和初登场时的惊艳给了我们太高的期望,这位年轻人最近的作品显然非常不“克雷伯格”，而这种情况已经持续许久，以至于我甚至不需要写出他的名字，你们就知道我说的是谁。'
        },
        {
          role: '作曲家',
          id: '6',
          title: '小步舞曲',
          content: '多么遗憾,你是留下的那个。',
          conclusion: '一张单程火车票:头等包厢，出发地为维也纳，目的地为巴黎。'
        },
        {
          role: '作曲家',
          id: '7',
          title: '回旋曲',
          content: '缪斯热烈但吝啬。',
          conclusion: '一叠书信:每一封都附带一叠乐谱，从巴黎寄来维也纳,但最终都被随意丢弃在废纸箱里，除了第一封外，其他的都没有被拆开。'
        },
        {
          role: '作曲家',
          id: '8',
          title: '休止符',
          content: '阿佛洛狄忒善变却慷慨。',
          conclusion: '一张私人独奏会节目单:压轴曲为一套名为《重逢之时》的组曲，而整场演奏的演奏者，都是弗雷德里克·克雷伯格。'
        },
        {
          role: '作曲家',
          id: '9',
          title: 'D.C',
          content: '好久不见,白痴。',
          conclusion: '一封散发着馥郁香气的信件:亲爱的克雷伯格先生,我对您的提议非常欣赏，迫切地希望与您面谈，然而因为众所周知的原因，我无法邀请您前来府邸，但这周五我将去城中参加一场读书会,希望在那与您相见。'
        }
      ],
      letterCN: [
        {
          role: '作曲家',
          id: 1,
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '作曲家',
          id: 2,
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '作曲家',
          id: 3,
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '作曲家',
          id: 4,
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '作曲家',
          id: 5,
          year: 'TBD',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

