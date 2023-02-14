export default {
  path: 'survivor',
  component: () => import('@/views/nested/menu1/note/survivor'),
  name: 'Survivor',
  meta: { title: '求生者侧写' },
  children: [
    {
      path: 'zhoushushi',
      component: () => import('@/views/nested/menu1/note/survivor/components/zhoushushi'),
      name: 'Zhoushushi',
      meta: { title: '0103 咒术师' }
    },
    {
      path: 'lvshi',
      component: () => import('@/views/nested/menu1/note/survivor/components/lvshi'),
      name: 'Lvshi',
      meta: { title: '0112 律师' }
    },
    {
      path: 'mangnv',
      component: () => import('@/views/nested/menu1/note/survivor/components/mangnv'),
      name: 'Mangnv',
      meta: { title: '0113 盲女' }
    },
    {
      path: 'jisi',
      component: () => import('@/views/nested/menu1/note/survivor/components/jisi'),
      name: 'Jisi',
      meta: { title: '0201 祭司' }
    },
    {
      path: 'shoumuren',
      component: () => import('@/views/nested/menu1/note/survivor/components/shoumuren'),
      name: 'Shoumuren',
      meta: { title: '0213 守墓人' }
    },
    {
      path: 'tiaojiushi',
      component: () => import('@/views/nested/menu1/note/survivor/components/tiaojiushi'),
      name: 'Tiaojiushi',
      meta: { title: '0214 调酒师' }
    },
    {
      path: 'maoxianjia',
      component: () => import('@/views/nested/menu1/note/survivor/components/maoxianjia'),
      name: 'Maoxianjia',
      meta: { title: '0301 冒险家' }
    },
    {
      path: 'yisheng',
      component: () => import('@/views/nested/menu1/note/survivor/components/yisheng'),
      name: 'Yisheng',
      meta: { title: '0317 医生' }
    },
    {
      path: 'kantanyuan',
      component: () => import('@/views/nested/menu1/note/survivor/components/kantanyuan'),
      name: 'Kantanyuan',
      meta: { title: '0319 勘探员' }
    },
    {
      path: 'xiaoshuojia',
      component: () => import('@/views/nested/menu1/note/survivor/components/xiaoshuojia'),
      name: 'Xiaoshuojia',
      meta: { title: '0402 小说家' }
    },
    {
      path: 'kongjun',
      component: () => import('@/views/nested/menu1/note/survivor/components/kongjun'),
      name: 'Kongjun',
      meta: { title: '0403 空军' }
    },
    {
      path: 'huajia',
      component: () => import('@/views/nested/menu1/note/survivor/components/huajia'),
      name: 'Huajia',
      meta: { title: '0423 画家' }
    },
    {
      path: 'yeren',
      component: () => import('@/views/nested/menu1/note/survivor/components/yeren'),
      name: 'Yeren',
      meta: { title: '0430 野人' }
    },
    {
      path: 'cishanjia',
      component: () => import('@/views/nested/menu1/note/survivor/components/cishanjia'),
      name: 'Cishanjia',
      meta: { title: '0507 “慈善家”' }
    },
    {
      path: 'rulianshi',
      component: () => import('@/views/nested/menu1/note/survivor/components/rulianshi'),
      name: 'Rulianshi',
      meta: { title: '0511 入殓师' }
    },
    {
      path: 'qianfeng',
      component: () => import('@/views/nested/menu1/note/survivor/components/qianfeng'),
      name: 'Qianfeng',
      meta: { title: '0515 前锋' }
    },
    {
      path: 'jiqiushou',
      component: () => import('@/views/nested/menu1/note/survivor/components/jiqiushou'),
      name: 'Jiqiushou',
      meta: { title: '0529 击球手' }
    },
    {
      path: 'zajiyanyuan',
      component: () => import('@/views/nested/menu1/note/survivor/components/zajiyanyuan'),
      name: 'Zajiyanyuan',
      meta: { title: '0601 杂技演员' }
    },
    {
      path: 'wunv',
      component: () => import('@/views/nested/menu1/note/survivor/components/wunv'),
      name: 'Wunv',
      meta: { title: '0609 舞女' }
    },
    {
      path: 'moshushi',
      component: () => import('@/views/nested/menu1/note/survivor/components/moshushi'),
      name: 'Moshushi',
      meta: { title: '0704 魔术师' }
    },
    {
      path: 'qiutu',
      component: () => import('@/views/nested/menu1/note/survivor/components/qiutu'),
      name: 'Qiutu',
      meta: { title: '0710 “囚徒”' }
    },
    {
      path: 'yongbing',
      component: () => import('@/views/nested/menu1/note/survivor/components/yongbing'),
      name: 'Yongbing',
      meta: { title: '0723 佣兵' }
    },
    {
      path: 'kuqixiaochou',
      component: () => import('@/views/nested/menu1/note/survivor/components/kuqixiaochou'),
      name: 'Kuqixiaochou',
      meta: { title: '0813 哭泣小丑' }
    },
    {
      path: 'tiaoxiangshi',
      component: () => import('@/views/nested/menu1/note/survivor/components/tiaoxiangshi'),
      name: 'Tiaoxiangshi',
      meta: { title: '0825 调香师' }
    },
    {
      path: 'jixieshi',
      component: () => import('@/views/nested/menu1/note/survivor/components/jixieshi'),
      name: 'Jixieshi',
      meta: { title: '0913 机械师' }
    },
    {
      path: 'xiaonvhai',
      component: () => import('@/views/nested/menu1/note/survivor/components/xiaonvhai'),
      name: 'Xiaonvhai',
      meta: { title: '0913 小女孩' }
    },
    {
      path: 'jizhe',
      component: () => import('@/views/nested/menu1/note/survivor/components/jizhe'),
      name: 'Jizhe',
      meta: { title: '0913 记者' }
    },
    {
      path: 'dafu',
      component: () => import('@/views/nested/menu1/note/survivor/components/dafu'),
      name: 'Dafu',
      meta: { title: '0924 大副' }
    },
    {
      path: 'xinlixuejia',
      component: () => import('@/views/nested/menu1/note/survivor/components/xinlixuejia'),
      name: 'Xinlixuejia',
      meta: { title: '1010 “心里学家”' }
    },
    {
      path: 'binghuan',
      component: () => import('@/views/nested/menu1/note/survivor/components/binghuan'),
      name: 'Binghuan',
      meta: { title: '1010 病患' }
    },
    {
      path: 'xianzhi',
      component: () => import('@/views/nested/menu1/note/survivor/components/xianzhi'),
      name: 'Xianzhi',
      meta: { title: '1031 先知' }
    },
    {
      path: 'jiaoshou',
      component: () => import('@/views/nested/menu1/note/survivor/components/jiaoshou'),
      name: 'Jiaoshou',
      meta: { title: '1113 教授' }
    },
    {
      path: 'xingyuner',
      component: () => import('@/views/nested/menu1/note/survivor/components/xingyuner'),
      name: 'Xingyuner',
      meta: { title: '1122 幸运儿' }
    },
    {
      path: 'wanjushang',
      component: () => import('@/views/nested/menu1/note/survivor/components/wanjushang'),
      name: 'Wanjushang',
      meta: { title: '1129 玩具商' }
    },
    {
      path: 'yuanding',
      component: () => import('@/views/nested/menu1/note/survivor/components/yuanding'),
      name: 'Yuanding',
      meta: { title: '1221 园丁' }
    },
    {
      path: 'kunchongxuezhe',
      component: () => import('@/views/nested/menu1/note/survivor/components/kunchongxuezhe'),
      name: 'Kunchongxuezhe',
      meta: { title: '1222 昆虫学者' }
    },
    {
      path: 'youchai',
      component: () => import('@/views/nested/menu1/note/survivor/components/youchai'),
      name: 'Youchai',
      meta: { title: '1225 邮差' }
    },
    {
      path: 'niuzai',
      component: () => import('@/views/nested/menu1/note/survivor/components/niuzai'),
      name: 'Niuzai',
      meta: { title: '1227 牛仔' }
    },
    {
      path: 'gudongshang',
      component: () => import('@/views/nested/menu1/note/survivor/components/gudongshang'),
      name: 'Gudongshang',
      meta: { title: 'TBD 古董商' }
    },
    {
      path: 'zuoqujia',
      component: () => import('@/views/nested/menu1/note/survivor/components/zuoqujia'),
      name: 'Zuoqujia',
      meta: { title: 'TBD 作曲家' }
    }
  ]
}
