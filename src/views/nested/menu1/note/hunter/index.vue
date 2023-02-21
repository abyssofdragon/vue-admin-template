<template>
  <div>
    <h3>监管者报告</h3>
    <router-view />
    <NavHun :hunters="hunters" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hunters: [
        {
          id: 26,
          job: '守夜人',
          name: '伊塔库亚',
          pinyin: 'shouyeren'
        },
        {
          id: 25,
          job: '隐士',
          name: '阿尔瓦',
          pinyin: 'yinshi'
        },
        {
          id: 24,
          job: '“记录员”',
          name: '柯根',
          pinyin: 'jiluyuan'
        },
        {
          id: 23,
          job: '“噩梦”',
          name: '“奥尔菲斯”',
          pinyin: 'emeng'
        },
        {
          id: 22,
          job: '蜡像师',
          name: '菲利普',
          pinyin: 'laxiangshi'
        },
        {
          id: 21,
          job: '渔女',
          name: '格蕾丝',
          pinyin: 'yunv'
        },
        {
          id: 20,
          job: '破轮',
          name: '威尔三兄弟',
          pinyin: 'polun'
        },
        {
          id: 19,
          job: '“博士”',
          name: '珀西',
          pinyin: 'boshi'
        },
        {
          id: 18,
          job: '雕刻家',
          name: '伽拉泰亚',
          pinyin: 'diaokejia'
        },
        {
          id: 17,
          job: '小提琴家',
          name: '安东尼奥',
          pinyin: 'xiaotiqinjia'
        },
        {
          id: 16,
          job: '“使徒”',
          name: '安',
          pinyin: 'shitu'
        },
        {
          id: 15,
          job: '26号守卫',
          name: '邦邦',
          pinyin: '26haoshouwei'
        },
        {
          id: 14,
          job: '红夫人',
          name: '玛丽',
          pinyin: 'hongfuren'
        },
        {
          id: 13,
          job: '孽蜥',
          name: '卢基诺',
          pinyin: 'niexi'
        },
        {
          id: 12,
          job: '爱哭鬼',
          name: '罗比',
          pinyin: 'aikugui'
        },
        {
          id: 11,
          job: '梦之女巫',
          name: '伊德海拉',
          pinyin: 'mengzhinvwu'
        },
        {
          id: 10,
          job: '疯眼',
          name: '巴尔克',
          pinyin: 'fengyan'
        },
        {
          id: 9,
          job: '摄影师',
          name: '约瑟夫',
          pinyin: 'sheyingshi'
        },
        {
          id: 8,
          job: '宿伞之魂',
          name: '谢必安/范无咎',
          pinyin: 'susanzhihun'
        },
        {
          id: 7,
          job: '黄衣之主',
          name: '哈斯塔',
          pinyin: 'huangyizhizhu'
        },
        {
          id: 6,
          job: '红蝶',
          name: '美智子',
          pinyin: 'hongdie'
        },
        {
          id: 5,
          job: '蜘蛛',
          name: '瓦尔莱塔',
          pinyin: 'zhizhu'
        },
        {
          id: 4,
          job: '“杰克”',
          name: '杰克',
          pinyin: 'jieke'
        },
        {
          id: 3,
          job: '鹿头',
          name: '班恩',
          pinyin: 'lutou'
        },
        {
          id: 2,
          job: '小丑',
          name: '裘克',
          pinyin: 'xiaochou'
        },
        {
          id: 1,
          job: '厂长',
          name: '里奥',
          pinyin: 'changzhang'
        }
      ]
    }
  }
}
</script>
