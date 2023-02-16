<template>
  <div>
    <h5>破轮</h5>
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
          title: '一叠潦草的剧本',
          letter: '威尔家族的快乐生活\n\n主要演员表：\n威尔三兄弟 饰 寡言的伯爵、悲观的夫人、戏谑的小少爷\n“凯瑟琳” 饰 凯瑟琳\n……\n\n内景——威尔家族的庄园——餐厅——清晨\n威尔家族伯爵和夫人阴沉地坐于餐厅。\n小少爷来迟，蹦跳着进场。\n小少爷：早餐是果酱配面包？看起来真不错！\n伯爵沉默不语，摆弄着刀叉。\n夫人：不……鲜红的果酱，又是不吉利的一天……\n小少爷：“还有洗净的番茄——上面没有那些恶心的泥巴，哥哥们一定也会很喜欢。”\n伯爵皱眉。\n伯爵：那个人贩子——\n小少爷：哦，那个人贩子……我可怜的哥哥们被他骗入剧团这么久，还差点被卖到马戏团——\n小少爷笑着比了比自己矮小的身形，又指了指同样矮小的伯爵和夫人。\n小少爷：就因为我们家族这与众不同的身形？\n伯爵瞪了小少爷一眼，愤懑地敲了敲桌子。\n夫人：可恨的凶手！圣凯瑟琳剧院的老板！就是他伤害了我的孩子们！\n夫人捂脸发抖。\n夫人：就算这个卑劣的家伙已束手就擒，但想到他还在地下室里琢磨那些不堪的念头，我就不得安宁。\n伯爵：轮刑！轮刑！伤我家族之人！轮刑！\n夫人：一起抓到的，那个叫凯瑟琳的演员呢？她嘴上讨饶，但一定也有瓜葛！\n小少爷：不如交给我处理——她值得一场生动的演出。\n\n外景——庄园外——角斗场——中午\n伯爵、夫人位于角斗场观赛台上，小少爷和被镣铐绑住的凯瑟琳在角斗场内。\n夫人：我的孩子，你真的要和这个女帮凶同台吗？这太危险了！\n小少爷：哥哥们在剧院里的精彩经历，她可一样都不能错过！\n小少爷笑着钻进了一个巨大的、装满钉刺的特制轮子。\n凯瑟琳面对逼近的钉刺轮子，惊恐地扭着手脚和镣铐。\n凯瑟琳：饶了我吧！剧场老板的所作所为，我全然不知！我只是一直、一直在舞台上演出而已！\n轮子绕着凯瑟琳旋转着、发出刺耳的声音。\n小少爷：跟我说说你的演出。\n凯瑟琳：扮演“圣凯瑟琳”，击碎“处刑的车轮”，日复一日。\n夫人捂脸悲鸣。\n夫人：击碎车轮？日复一日？你习以为常，从未为此愧疚？\n伯爵闷声。\n伯爵：车轮？击碎？日复一日？！\n凯瑟琳：那……那只是一幕演出啊……\n小少爷：对你，那只是演出。嘿嘿嘿……可我，无法欣赏那种卑劣的舞台。\n凯瑟琳：那您，您喜欢什么样的故事？\n小少爷：……嘻嘻，这种。\n钉刺轮子旋转、飞起、砸落。'
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

