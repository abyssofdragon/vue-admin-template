<template>
  <div style="padding: 8px">
    <h5>击球手</h5>
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
          year: '2022',
          title: '一封越洋信件',
          letter:
            '尊敬的大人:\n听闻，在德里的您身体逐渐好转，我甚感宽慰，真理的传播需要您这般虔诚之人的身先士卒，吾等才有去教化那些愚人的机会。\n这对他们本身也是救赎，不是么?\n就像您年初送来的“礼物”，刚来时，还过得去的球技和谦卑温和的个性是他为数不多的可取之处，如若没有您的慧眼，他便只能在湿热的污泥中终此一生，如何能有机会感受到帝国的荣光?\n他甚至得到了子爵大人的青睐，获得了步入文明的机会。\n关于这件事，或许您已经从额尔金公爵听到了一些传闻，是的，那些都是真的，任性的子爵大人要求那个“礼物”和他一起上课，而不仅仅是板球的玩乐。\n我们都觉得这多少有点不妥，但子爵大人那位显赫的父亲，显然并不在乎以对这小小僭越之举的默许，来换取一个安静的午后。\n不过这也不是全然没有好处，那个“礼物”终于能顺畅而准确地与我们交流，并对我们毫无防备，且充满感恩之情（相较于对他矜贵的队友而言）。\n因此，我们得以获得一些有趣的信息，关于他的家乡，关于那些神奇的香料提炼。\n我想这些对您接下来的行动应该会有所帮助，具体内容已随信奉上。\n期待您下一次捷报。\n\n您忠诚的盟友'
        },
        {
          id: 'II',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'III',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'IV',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: '2026',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>
