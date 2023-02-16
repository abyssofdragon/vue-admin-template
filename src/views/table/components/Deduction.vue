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
          role: '昆虫学者',
          id: '1',
          title: '稳态',
          content: '安全的生活取决于相对不变的环境。',
          conclusion: '一张照片：梅莉和一名年龄相仿的男子，在一片茂密的森林里，幸福相拥。'
        },
        {
          role: '昆虫学者',
          id: '2',
          title: '生物相',
          content: '我们真心渴望的，往往是表面生活所无法满足的。',
          conclusion: '一份处方：安眠药。'
        },
        {
          role: '昆虫学者',
          id: '3',
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
