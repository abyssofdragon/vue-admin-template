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
          job: '隐士',
          name: '阿尔瓦',
          py: 'yinshi'
        },
        {
          job: '“记录员”',
          name: '柯根',
          py: 'jiluyuan'
        },
        {
          job: '“噩梦”',
          name: '“奥尔菲斯”',
          py: 'emeng'
        },
        {
          job: '蜡像师',
          name: '菲利普',
          py: 'laxiangshi'
        },
        {
          job: '渔女',
          name: '格蕾丝',
          py: 'yunv'
        },
        {
          job: '破轮',
          name: '威尔三兄弟',
          py: 'polun'
        },
        {
          job: '“博士”',
          name: '珀西',
          py: 'boshi'
        },
        {
          job: '雕刻家',
          name: '伽拉泰亚',
          py: 'diaokejia'
        },
        {
          job: '小提琴家',
          name: '安东尼奥',
          py: 'xiaotiqinjia'
        },
        {
          job: '“使徒”',
          name: '安',
          py: 'shitu'
        },
        {
          job: '26号守卫',
          name: '邦邦',
          py: '26haoshouwei'
        },
        {
          job: '红夫人',
          name: '玛丽',
          py: 'hongfuren'
        },
        {
          job: '孽蜥',
          name: '卢基诺',
          py: 'niexi'
        },
        {
          job: '爱哭鬼',
          name: '罗比',
          py: 'aikugui'
        },
        {
          job: '梦之女巫',
          name: '伊德海拉',
          py: 'mengzhinvwu'
        },
        {
          job: '疯眼',
          name: '巴尔克',
          py: 'fengyan'
        },
        {
          job: '摄影师',
          name: '约瑟夫',
          py: 'sheyingshi'
        },
        {
          job: '宿伞之魂',
          name: '谢必安/范无咎',
          py: 'susanzhihun'
        },
        {
          job: '黄衣之主',
          name: '哈斯塔',
          py: 'huangyizhizhu'
        },
        {
          job: '红蝶',
          name: '美智子',
          py: 'hongdie'
        },
        {
          job: '蜘蛛',
          name: '瓦尔莱塔',
          py: 'zhizhu'
        },
        {
          job: '“杰克”',
          name: '杰克',
          py: 'jieke'
        },
        {
          job: '鹿头',
          name: '班恩',
          py: 'lutou'
        },
        {
          job: '小丑',
          name: '裘克',
          py: 'xiaochou'
        },
        {
          job: '厂长',
          name: '里奥',
          py: 'changzhang'
        }
      ]
    }
  }
}
</script>
