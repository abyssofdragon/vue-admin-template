<template>
  <div>
    <h5>渔女</h5>
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
          role: '渔女',
          type: '传闻',
          text: '无法发声的人终会如鱼儿一样任人宰割。在懂得这个道理后，格蕾丝拿起了鱼叉。'
        },
        {
          role: '渔女',
          type: '故事背景',
          text: '不会说话的格蕾丝成为了全村的牺牲品，她被刺破了双脚，打伤了双腿，带着满腔愤恨被沉入湖水之中。她和鱼儿们一样无法开口，被世人隔绝。\n但与鱼不一样的是，沉入水底的她有了更漫长的时间用来记住仇恨……'
        }
      ],
      deductionCN: [
        {
          role: '渔女',
          id: '1',
          title: '渔村',
          content: '童话故事总是始于无名的小村庄。',
          conclusion: '一张照片：搁浅的死鱼，寂静的湖岸……几个渔民一脸愁苦地看着空荡荡的渔网。'
        },
        {
          role: '渔女',
          id: '2',
          title: '竹篮',
          content: '顺水漂来的礼物，里面是一个小小的包裹。',
          conclusion: '一张字条：格蕾丝，生于4月2日。'
        },
        {
          role: '渔女',
          id: '3',
          title: '“怪胎”',
          content: '那些与众不同的，是独属于主角的特殊标志。',
          conclusion: '一张诊断书：失语症，先天发声困难。颈侧有不明赘生物，怀疑与发声障碍有关，可考虑手术切除。'
        },
        {
          role: '渔女',
          id: '4',
          title: '奇迹',
          content: '她漂亮，神秘，文静——她来后，似乎一切都变好了。',
          conclusion: '一则报道：人们依然没查清鱼群搁浅死亡的缘由，但灾害终于结束……也许我们应该感谢神赐，今年是格外不错的收成。'
        },
        {
          role: '渔女',
          id: '5',
          title: '同伴',
          content: '你喜欢水吗？我也是。',
          conclusion: '一张照片：远处燃着丰收庆典的篝火，女孩坐在月光下的湖边，水面有鱼儿的鳞光闪动。'
        },
        {
          role: '渔女',
          id: '6',
          title: '崇拜',
          content: '像书里写的那样，大家都爱她，敬畏她。',
          conclusion: '一篇宣讲稿：我们收养了神女，神女也会回报我们。她顺水而来，亦是神的意志的化身。是她驱散了当年的灾难，这次，我们同样需要神的帮助。'
        },
        {
          role: '渔女',
          id: '7',
          title: '众望所归',
          content: '亲爱的，你之前做过的那些，可不可以再来一次？',
          conclusion: '一篇日记：“湖面漂满了死鱼！又来了，又来了……格蕾丝为什么不做点什么？”'
        },
        {
          role: '渔女',
          id: '8',
          title: '“背叛”',
          content: '怀疑，失望，愤怒。只因为这和人们希冀的不一样。',
          conclusion: '一封匿名信：她背叛了你们！你们都信了伪神，天灾是真神给你们的惩罚！'
        },
        {
          role: '渔女',
          id: '9',
          title: '归宿',
          content: '她每走一步，双脚都如刀割一般疼痛。',
          conclusion: '挽回的方式：献出她才能平息真神的愤怒，她应该成为第一个祭品，最能表达你们虔诚的、需要被沉入水中的祭品。'
        },
        {
          role: '渔女',
          id: '10',
          title: '泡沫',
          content: '故事的最后，她化为了泡沫。',
          conclusion: '她沉入水底时，隐隐听到耳边有一个声音——“快，用这把利刃刺入他们的心脏。”'
        }
      ],
      letterCN: [
        {
          role: '渔女',
          id: 'I',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '渔女',
          id: 'II',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '渔女',
          id: 'III',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '渔女',
          id: 'IV',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '渔女',
          id: 'V',
          year: '2027',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

