<template>
  <div class="app-container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent" />
      </template>
    </vxe-toolbar>

    <vxe-table
      round
      stripe
      border
      :row-config="{isHover: true}"
      :data="display"
    >
      <vxe-column type="seq" width="5%" />
      <vxe-column field="role" title="角色" type="html" width="5%" />
      <vxe-column field="id" title="推演" type="html" width="5%" />
      <vxe-column field="title" title="标题" type="html" width="10%" />
      <vxe-column field="content" title="内容" type="html" width="25%" />
      <vxe-column field="conclusion" title="结论" type="html" width="50%" />
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data() {
    return {
      display: [],
      filterName: '',
      deduction: [
        {
          role: '病患',
          id: 1,
          title: '甜梦',
          content: '母胎里的温度，是生命最初的记忆。',
          conclusion: '一张照片：面露愁色的夫妇，身边围绕着三个孩子，妇人怀里还抱着一个刚刚满月的婴儿。'
        },
        {
          role: '病患',
          id: 2,
          title: '幼犬',
          content: '为了生存，动物有时会放弃最弱的幼崽。',
          conclusion: '一张照片：眼神涣散的妇人被绑在床上，地上散落着摔碎的碗盘。最小的男孩望着门外，紧紧捏着父亲的手指。'
        },
        {
          role: '病患',
          id: 3,
          title: '新家',
          content: '遮风挡雨，勉强果腹，以及不善的饲主。',
          conclusion: '一篇日记：那个新来的小孩今天只要到三便士零钱，养着这种废物，不加多养几条狗！'
        },
        {
          role: '病患',
          id: '4',
          title: '圈养',
          content: '抢占领地并不是必备的技能……至少对人来说不是。',
          conclusion: '一篇日记：该死的小废物掉进了赛场，但他活着出来了！那些脑满肠肥的家伙们兴奋得要命，或许……'
        },
        {
          role: '病患',
          id: '5',
          title: '挣扎',
          content: '我该成为什么？',
          conclusion: '一张照片：看守的男人捂着流血的胳膊，满身伤痕的男孩瞪着他，他眼睛通红，嘴里咬着一个面包。'
        },
        {
          role: '病患',
          id: '6',
          title: '认知',
          content: '忘记你曾为人。',
          conclusion: '一张照片：笼子里睡着一名少年，脚踝上戴着镣铐，一旁的破碗里有些糊状的食物。'
        },
        {
          role: '病患',
          id: '7',
          title: '暴雨',
          content: '冲走所有污垢、垃圾、痕迹……',
          conclusion: '病患档案：身份不明，年龄不明，高烧，失忆，发现于白沙街街口。'
        },
        {
          role: '病患',
          id: '8',
          title: '艾达·梅斯默',
          content: '念出那个名字，跟她走。',
          conclusion: '一张纸条：艾达？药？'
        },
        {
          role: '病患',
          id: '9',
          title: '重塑',
          content: '每个十月十日，都是新的开始。',
          conclusion: '一篇日记：有个男人来找艾达……他很奇怪，他们辽了什么？艾达说，是好肖息。明明艾达说过，认何人都不会知到这里。'
        },
        {
          role: '病患',
          id: '10',
          title: '旅途',
          content: '只要她愿意。',
          conclusion: '一本病历：夹着许多东西的病历本，最后一页粘着一枚铁丝掰成的戒指。'
        },
        {
          role: '“慈善家”',
          id: 1,
          title: '“慈善”',
          content: '人们愿意给予那些好人信赖，所以我正试图做一个好人。',
          conclusion: '“噢，当然。我喜欢做慈善。”'
        },
        {
          role: '“慈善家”',
          id: 2,
          title: '无声潜行',
          content: '压低重心，放缓脚步，别被监管者发现，这正是我擅长的。',
          conclusion: '克利切·皮尔森完全不像个养尊处优的慈善家，他似乎对隐匿行迹颇有心得。'
        },
        {
          role: '“慈善家”',
          id: 3,
          title: '秘密',
          content: '在时间流逝中，没有任何秘密是永远缄默的。',
          conclusion: '孤儿日记1：“好心的太太给了我一块白面包，又热又软乎。可我却眼看着克利切从她背后拿了她的钱袋子。我真坏。”'
        },
        {
          role: '“慈善家”',
          id: '4',
          title: '宝藏',
          content: '别祈求宝藏从天而降，用你的双手去创造它。',
          conclusion: '孤儿日记2：“克利切说今晚上有个新来的孩子。他真走运，只少了左边。维诺妮卡说他需要休息，我看到她抱着换洗的床单，全是红色的污渍。希望他第二天能赶上早饭。”'
        },
        {
          role: '“慈善家”',
          id: '5',
          title: '逃离真相',
          content: '与真实背道而驰，这总能让我感到舒适和安全。',
          conclusion: '一张合照：克利切·皮尔森与一群残疾的小孩，他们背后的墙壁上挂着一条横幅：家，甜蜜的家。'
        },
        {
          role: '“慈善家”',
          id: '6',
          title: '协作',
          content: '在街头讨生活你往往需要学会合作，这里也不例外。',
          conclusion: '一篇报道：由克利切·皮尔森经营的白沙街第一家孤儿院正式运营。'
        },
        {
          role: '“慈善家”',
          id: '7',
          title: '灯下盲',
          content: '只见光，不见影，人往往看不到光鲜亮丽表面下的龌龊。',
          conclusion: '照片：克利切·皮尔森与一位穿着制服的神父在孤儿院中指挥着残疾的小孩演奏曲目。'
        },
        {
          role: '“慈善家”',
          id: '8',
          title: '掩人耳目',
          content: '这些傀儡散发着不祥的气息，它们好像在看着你。',
          conclusion: '给克利切·皮尔森·的信1：孤儿院里的孤儿们被确诊为精神障碍后应当被送往天主教会开办的疯人院内统一管理。'
        },
        {
          role: '“慈善家”',
          id: '9',
          title: '绝地求生',
          content: '监管者越来越近，而我绝不会放弃希望，我不会再被抓住。',
          conclusion: '档案：一张克利切·皮尔森的入狱照，左下角写着“偷窃”。'
        },
        {
          role: '“慈善家”',
          id: '10',
          title: '重新出发',
          content: '即使事情变得越来越槽糕，也要想办法振作起来。',
          conclusion: '一篇文章：上周教会医院的义诊中，发现白沙街孤儿院内有至少12名儿童罹患不同程度的精神疾病。白沙街孤儿院将由教会进行改造，作为儿童精神病院投入使用。'
        },
        {
          role: '“慈善家”',
          id: '11',
          title: '逃之夭夭',
          content: '即使事情变得越来越槽糕，也要想办法振作起来。',
          conclusion: '给克利切皮尔森的信2：明智的选择，上帝会感念您的慷慨，当然，政府给予的赔偿将弥补您在财政上的一切损失。白沙街需要一间新的孤儿院，我认为，此事委托您再合适不过了。'
        },
        {
          role: '昆虫学者',
          id: 1,
          title: '稳态',
          content: '安全的生活取决于相对不变的环境。',
          conclusion: '一张照片：梅莉和一名年龄相仿的男子，在一片茂密的森林里，幸福相拥。'
        },
        {
          role: '昆虫学者',
          id: 2,
          title: '生物相',
          content: '我们真心渴望的，往往是表面生活所无法满足的。',
          conclusion: '一份处方：安眠药。'
        },
        {
          role: '昆虫学者',
          id: 3,
          title: '个体化原理',
          content: '那些痛苦，倘若无法让人却步，就只会让人索取更多。',
          conclusion: '一本字迹杂乱的笔记本:我对她的一成不变感到恶心。'
        },
        {
          role: '昆虫学者',
          id: '4',
          title: '向光性',
          content: '相信你所愿意相信的，难道不会更快乐吗?',
          conclusion: '一张照片：梅莉独自一人坐在餐桌上，沉默地凝视着对面空空的座位。'
        },
        {
          role: '昆虫学者',
          id: '5',
          title: '底栖生物',
          content: '海的底部有美梦也有绝望。',
          conclusion: '教会法院司法分居协议书：判决双方为司法分居。'
        },
        {
          role: '昆虫学者',
          id: '6',
          title: '关键性',
          content: '权利往往掌握在沉默的少数手中。',
          conclusion: '一张照片：梅莉坐在餐桌上,一名年龄相仿的男子坐在她的对面，面露不悦。'
        },
        {
          role: '昆虫学者',
          id: '7',
          title: '地理隔离',
          content: '那么近，那么远、',
          conclusion: '一份邀请函：我们对您的过往经历十分有兴趣，相信您的风趣幽默能感染我校学生。'
        },
        {
          role: '昆虫学者',
          id: '8',
          title: '专性寄生物',
          content: '生命的轻与重，他和我。',
          conclusion: '一篇日记：我将拿什么面对以后漫长的人生，缺失的生活？'
        },
        {
          role: '昆虫学者',
          id: '9',
          title: '异域物种形成',
          content: '周遭的气味发生了微妙的变化。',
          conclusion: '一张照片：一群蜜蜂围绕着一个戴着面纱的女子。'
        },
        {
          role: '昆虫学者',
          id: '10',
          title: '噬母现象',
          content: '每一次新生，总归需要伴随一些“牺牲”',
          conclusion: '一篇日记：我知道什么才能让我的精神世界永远快乐。'
        },
        {
          role: '昆虫学者',
          id: '11',
          title: '卵生',
          content: '新的个体破卵而出',
          conclusion: '一张照片：梅莉独自一人坐在餐桌上，微笑地看着对面的座位。'
        }
      ]
    }
  },
  created() {
    this.searchEvent()
  },
  methods: {
    searchEvent() {
      const filterName = XEUtils.toValueString(this.filterName).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const searchProps = ['role', 'id', 'title', 'content', 'conclusion']
        const rest = this.letter.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))
        this.display = rest.map(row => {
          const item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      } else {
        this.display = this.deduction
      }
    }
  }
}
</script>

    <style>
  .keyword-lighten {
    color: #000;
    background-color: #ffff00;
  }
  </style>
