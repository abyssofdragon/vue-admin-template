<template>
  <div>
    <h5>红蝶</h5>
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
          title: '一封陈旧的信',
          letter: '尊敬的唐纳利先生:\n自那次会面以来，已过去6个月，不知您近况如何?\n我已妥善处置了您的寄存物件，并确保她不会再为人所见。\n只是搬迁花费超出预期，望您可再援助一二，以避免寄存费用不足。\n另，听闻令郎发起了一项令人不安的调查，请尽快回信以避免发生争端。\n\n祝安康\n\n您忠诚的\n尤金·海沃德'
        },
        {
          id: 'II',
          year: '2021',
          title: '一张泛黄的信纸',
          letter: '亲爱的迈尔斯：\n很抱歉，当我找到那个信物的下落时，它已经被人从拍卖行拍走。\n卖家是匿名，拍卖行不愿提供其身份。而外围调查，由于事情已经过去一些日子了，有效信息也并不多，只知道一位身材窈窕，面容姣好的年轻女性，有一些地方口音。\n但就描述而言，这位卖家与美智子大相径庭。\n至于买家，我用了一些手段得到了他的通信方式，但多次试图联系，通信都石沉大海。\n不过请放心，在我完成城中调查后，我将亲自前往他的庄园拜访，希望这位慷慨的绅士可以割爱。\n（那庄园离你新的目的地不远,如果你有意愿，我们或许可以一同前往？）\n衷心的希望，属于你的一切，终能回到你身边。\n\n你忠诚的朋友\n贝坦菲尔'
        },
        {
          id: 'III',
          year: '2022',
          title: '一页日记',
          letter: '昨天晚上，在我即将入睡时，庄园的仆人出现在我客房门口，他们仍然没有贝坦菲尔的消息，按当初我与贝坦菲尔的约定，她理应在三天前就到达这里，这多多少少让我感到有一些意外。\n而更让我意外的是，仆人把那枚帽针交给了我。\n它早已不是我记忆中的样子，宝石剥落殆尽，帽针尾端也被打磨得如利器般尖锐，这让它看起来更像一个工具，而非饰品。\n仆人说庄园主人改变了主意，如果我愿意，天亮后就可以带着这枚帽针离开，我有一夜的时间考虑。\n深夜，我握着这枚帽针陷入沉眠，梦里我又回到了那座夜色昏黄的小镇，但与这些年缠绕我的梦魔不同。今夜的小镇平静而祥和，耳边，美智子最爱的那支和歌，也终于唱到了最后的段落。\n我再次睁眼时，已是清晨，看着手中的帽针，想到那被它带走的一切，我做出了决定。\n早餐时，我告诉仆人，我不会离开，我仍坚持要知道庄园主人曾许诺告知的“故事”的结局，即便条件是参与庄园主人的游戏。'
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

