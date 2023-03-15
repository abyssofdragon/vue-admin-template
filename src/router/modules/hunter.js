export default {
  path: 'hunter',
  component: () => import('@/views/nested/menu1/note/hunter'),
  name: 'Hunter',
  meta: { title: '监管者报告' },
  children: [
    {
      path: 'zhizhu',
      component: () => import('@/views/nested/menu1/note/hunter/components/zhizhu'),
      name: 'Zhizhu',
      meta: { title: '0102 蜘蛛' }
    },
    {
      path: 'jiluyuan',
      component: () => import('@/views/nested/menu1/note/hunter/components/jiluyuan'),
      name: 'JIluyuan',
      meta: { title: '0121 记录员' }
    },
    {
      path: 'huangyizhizhu',
      component: () => import('@/views/nested/menu1/note/hunter/components/huangyizhizhu'),
      name: 'Huangyihizhu',
      meta: { title: '0124 黄衣之主' }
    },
    {
      path: 'hongdie',
      component: () => import('@/views/nested/menu1/note/hunter/components/hongdie'),
      name: 'Hongdie',
      meta: { title: '0218 红蝶' }
    },
    {
      path: 'sheyingshi',
      component: () => import('@/views/nested/menu1/note/hunter/components/sheyingshi'),
      name: 'Sheyingshi',
      meta: { title: '0311 摄影师' }
    },
    {
      path: 'yunv',
      component: () => import('@/views/nested/menu1/note/hunter/components/yunv'),
      name: 'Yunv',
      meta: { title: '0402 渔女' }
    },
    {
      path: 'emeng',
      component: () => import('@/views/nested/menu1/note/hunter/components/emeng'),
      name: 'Emeng',
      meta: { title: '0402 “噩梦”' }
    },
    {
      path: 'laxiangshi',
      component: () => import('@/views/nested/menu1/note/hunter/components/laxiangshi'),
      name: 'Laxiangshi',
      meta: { title: '0416 蜡像师' }
    },
    {
      path: 'aikugui',
      component: () => import('@/views/nested/menu1/note/hunter/components/aikugui'),
      name: 'Aikugui',
      meta: { title: '0425 爱哭鬼' }
    },
    {
      path: 'boshi',
      component: () => import('@/views/nested/menu1/note/hunter/components/boshi'),
      name: 'Boshi',
      meta: { title: '0518 博士' }
    },
    {
      path: 'lutou',
      component: () => import('@/views/nested/menu1/note/hunter/components/lutou'),
      name: 'Lutou',
      meta: { title: '0521 鹿头' }
    },
    {
      path: 'susanzhihun',
      component: () => import('@/views/nested/menu1/note/hunter/components/susanzhihun'),
      name: 'Susanzhihun',
      meta: { title: '0715 宿伞之魂' }
    },
    {
      path: 'xiaochou',
      component: () => import('@/views/nested/menu1/note/hunter/components/xiaochou'),
      name: 'Xiaochou',
      meta: { title: '0804 小丑' }
    },
    {
      path: 'jieke',
      component: () => import('@/views/nested/menu1/note/hunter/components/jieke'),
      name: 'Jieke',
      meta: { title: '0807 杰克' }
    },
    {
      path: '26haoshouwei',
      component: () => import('@/views/nested/menu1/note/hunter/components/26haoshouwei'),
      name: '26haoshouwei',
      meta: { title: '0808 26号守卫' }
    },
    {
      path: 'mengzhinvwu',
      component: () => import('@/views/nested/menu1/note/hunter/components/mengzhinvwu'),
      name: 'Mengzhinvwu',
      meta: { title: '1002 梦之女巫' }
    },
    {
      path: 'xiaotiqinjia',
      component: () => import('@/views/nested/menu1/note/hunter/components/xiaotiqinjia'),
      name: 'Xiaotiqinjia',
      meta: { title: '1027 小提琴家' }
    },
    {
      path: 'hongfuren',
      component: () => import('@/views/nested/menu1/note/hunter/components/hongfuren'),
      name: 'Hongfuren',
      meta: { title: '1102 红夫人' }
    },
    {
      path: 'niexi',
      component: () => import('@/views/nested/menu1/note/hunter/components/niexi'),
      name: 'Niexi',
      meta: { title: '1113 孽蜥' }
    },
    {
      path: 'diaokejia',
      component: () => import('@/views/nested/menu1/note/hunter/components/diaokejia'),
      name: 'Diaokejia',
      meta: { title: '1117 雕刻家' }
    },
    {
      path: 'polun',
      component: () => import('@/views/nested/menu1/note/hunter/components/polun'),
      name: 'Polun',
      meta: { title: '1125 破轮' }
    },
    {
      path: 'fengyan',
      component: () => import('@/views/nested/menu1/note/hunter/components/fengyan'),
      name: 'Fengyan',
      meta: { title: '1127 疯眼' }
    },
    {
      path: 'changzhang',
      component: () => import('@/views/nested/menu1/note/hunter/components/changzhang'),
      name: 'Changzhang',
      meta: { title: '1221 厂长' }
    },
    {
      path: 'yinshi',
      component: () => import('@/views/nested/menu1/note/hunter/components/yinshi'),
      name: 'Yinshi',
      meta: { title: 'TBD 隐士' }
    },
    {
      path: 'shouyeren',
      component: () => import('@/views/nested/menu1/note/hunter/components/shouyeren'),
      name: 'Shouyeren',
      meta: { title: 'TBD 守夜人' }
    }
  ]
}
