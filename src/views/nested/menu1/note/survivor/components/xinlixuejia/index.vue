<template>
  <div>
    <h5>“心理学家”</h5>
    <Character :description="descriptionCN" :letter="letterCN" :deduction="deductionCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionCN: [
        {
          role: '',
          type: '传闻',
          text: ''
        },
        {
          role: '',
          type: '故事背景',
          text: ''
        }
      ],
      deductionCN: [
        {
          role: '“心理学家”',
          id: '1',
          title: '规划',
          content: '大人们总是喜欢询问孩子对未来的憧憬。',
          conclusion: '一篇日记：“你以后想做什么？艾达？”他们给了我问题，却没给我回答的机会。'
        },
        {
          role: '“心理学家”',
          id: '2',
          title: '抢跑',
          content: '我过早了解了一切，但这并不算一件坏事。',
          conclusion: '一张照片：一名医生正在装饰华丽的房间里看诊，十三四岁的女孩立于他身旁。门外，几个孩子正好奇地偷看病床上被绑缚的病人。'
        },
        {
          role: '“心理学家”',
          id: '3',
          title: '一个开始',
          content: '成长让人知道，自己到底想成为怎样的人。',
          conclusion: '一篇日记：我在路上遇到了一个饿极了的男孩，我给他买了个面包。但当我回去请求父亲的帮助时，父亲又一次拒绝了……我想不明白。'
        },
        {
          role: '“心理学家”',
          id: '4',
          title: '一个选择',
          content: '既然没法决定自己的姓名，那就选择最实用的使用方式。',
          conclusion: '一封回信：艾达·梅斯默，欢迎你加入心理学实验室进行学习研究。另，我有新的投资项目与梅斯默医生商讨，下周三将去府上拜访。'
        },
        {
          role: '“心理学家”',
          id: '5',
          title: '灵感',
          content: '我找到了我毕生的追求。',
          conclusion: '一份实验申请：关于催眠治疗的实验申请书。署名是心理学助理教授艾达·梅斯默。'
        },
        {
          role: '“心理学家”',
          id: '6',
          title: '坚持',
          content: '他们对失败的忍耐是有限的，但我不是。',
          conclusion: '一本笔记：不同的日期，下面用小字标注着不同医院和诊所的名字。每一页都写着长长的诊疗和研究记录。'
        },
        {
          role: '“心理学家”',
          id: '7',
          title: '埃米尔',
          content: '他是命中注定的，我最好的实验品。',
          conclusion: '未寄出的信：我在白沙街疯人院遇到了他，父亲。他是最合适的病例，也是一个真正了解我的男人。'
        },
        {
          role: '“心理学家”',
          id: '8',
          title: '无意识记',
          content: '无需刻意记录，新的记忆会重塑你。',
          conclusion: '一箱行李：两人份的杂物、房产转让证明、教师辞呈，以及白沙街疯人院的全体病人档案。'
        },
        {
          role: '“心理学家”',
          id: '9',
          title: '倒流',
          content: '先获得，再失去。',
          conclusion: '治疗记录：焦虑、强迫、幻觉、自主意识减退、频发噩梦。发病频率逐渐增加……不，那是三年前的埃米尔……'
        },
        {
          role: '“心理学家”',
          id: '10',
          title: '未来',
          content: '如那个人所说，我该尝试最新的治疗方式。',
          conclusion: '塞进行李箱的合影：站在小屋前的男女，两人拿着捧花，脸上洋溢着笑意。'
        }
      ],
      letterCN: [
        {
          role: '“心理学家”',
          id: 'I',
          year: '2022',
          title: '一封回信',
          letter: '尊敬的先生：\n谢谢你的提醒，你说的是对的。\n也许我太高估自己，我并没有治愈我爱人的能力，鉴于他近期的状况，我们希望试试你之前推荐的最新的治疗方式。\n但由于我爱人的精神状况十分不稳定，麻烦你尽量不要再上门拜访。我们可以保持通信，希望你能谅解。\n两周后我会携带邀请函去往你的庄园，届时也会带上你想了解的一切。\n艾达·梅斯默'
        },
        {
          role: '“心理学家”',
          id: 'II',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“心理学家”',
          id: 'III',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“心理学家”',
          id: 'IV',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '“心理学家”',
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

