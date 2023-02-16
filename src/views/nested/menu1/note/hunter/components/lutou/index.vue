<template>
  <div>
    <h5>鹿头</h5>
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
          title: '给巴尔克的信',
          letter: '亲爱的巴尔克:\n你已经在实验室里待了快一个月，小姐和少爷都开始朝林场跑了，这里对他们来说太过危险，偷猎者们一直在附近游荡。我甚至在林场里找到了新的捕兽夹，那些带着利齿的钢箍可以轻松地粉碎他们的脚踝。\n我希望你能制造一点防范这些混蛋偷猎者的装置，什么都可以，但是千万别太有杀伤力！我永远忘不了你那个威力巨大的“点火装置”，它差点引起了一场山火。\n说一些能让人能感到愉快的事吧，我在林场里发现了一只被遗弃的驼鹿幼崽。它太瘦弱了，一直在发抖，甚至没法自己站起来，我想这就是为什么它被单独留在灌木丛里。现在正是羊群产仔的季节，找几头母羊把它养大应该不难。\n我觉得“黑鼻子”是个不错的名字，如果你有更好的选择记得告诉我。\n\n你忠诚的朋友\n班恩·佩雷兹'
        },
        {
          id: 'II',
          year: '2021',
          title: '一张留言',
          letter: '巴尔克,\n\n我看到那些新的机关了,你也见到那个人了,对么?\n当我看到那个站在荒废之地尽头的身影时,我不得不怀疑一切是否是我的幻觉。\n我试探着像以前那样询问有什么可以效劳。\n我太久没有这样与人交流了,无法确定是否能被认出。\n幸好,我最担心的情况没有发生。\n因为那个人说:\n“继续你的工作,班恩,那些违反规则的人,需要付出代价。”\n一如曾经，我将如其所愿。'
        },
        {
          id: 'III',
          year: '2022',
          title: '一张沾满机油与血渍的纸条',
          letter: '你是对的，即便猎人忘记了猎弓的归属，即便愤怒的箭镞会伤及无辜，但我们都已无法再回头。\n更何况，终我一生，遇见的无辜之人屈指可数，而他们，都已经死在了那个血色月夜。\n非常不幸，你我都不在其中。\n所以，也只有你我，能帮助他将那些无辜之人无法宣泄的怨怒和不甘，还给这污秽的世界。\n\n班恩'
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

