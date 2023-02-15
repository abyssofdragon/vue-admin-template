<template>
  <div>
    <h3>求生者侧写</h3>
    <router-view />
    <NavSur :survivors="survivors" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      survivors: [
        {
          job: '作曲家',
          name: '阿尔瓦',
          py: 'zuoqujia'
        },
        {
          job: '古董商',
          name: '柯根',
          py: 'gudongshang'
        },
        {
          job: '教授',
          name: '“奥尔菲斯”',
          py: 'jiaoshou'
        },
        {
          job: '哭泣小丑',
          name: '菲利普',
          py: 'kuqixiaochou'
        },
        {
          job: '“小女孩”',
          name: '格蕾丝',
          py: 'xiaonvhai'
        },
        {
          job: '小说家',
          name: '威尔三兄弟',
          py: 'xiaoshuojia'
        },
        {
          job: '病患',
          name: '珀西',
          py: 'binghuan'
        },
        {
          job: '“心理学家”',
          name: '伽拉泰亚',
          py: 'xinlixuejia'
        },
        {
          job: '玩具商',
          name: '安东尼奥',
          py: 'wanjushang'
        },
        {
          job: '击球手',
          name: '安',
          py: 'jiqiushou'
        },
        {
          job: '画家',
          name: '邦邦',
          py: 'huajia'
        },
        {
          job: '昆虫学者',
          name: '玛丽',
          py: 'kunchongxuezhe'
        },
        {
          job: '“囚徒”',
          name: '卢基诺',
          py: 'qiutu'
        },
        {
          job: '守墓人',
          name: '罗比',
          py: 'shoumuren'
        },
        {
          job: '邮差',
          name: '伊德海拉',
          py: 'youchai'
        },
        {
          job: '调酒师',
          name: '巴尔克',
          py: 'tiaojiushi'
        },
        {
          job: '大副',
          name: '约瑟夫',
          py: 'dafu'
        },
        {
          job: '杂技演员',
          name: '谢必安/范无咎',
          py: 'zajiyanyuan'
        },
        {
          job: '野人',
          name: '哈斯塔',
          py: 'yeren'
        },
        {
          job: '咒术师',
          name: '美智子',
          py: 'zhoushushi'
        },
        {
          job: '勘探员',
          name: '瓦尔莱塔',
          py: 'kantanyuan'
        },
        {
          job: '入殓师',
          name: '杰克',
          py: 'rulianshi'
        },
        {
          job: '先知',
          name: '班恩',
          py: 'xianzhi'
        },
        {
          job: '舞女',
          name: '裘克',
          py: 'wunv'
        },
        {
          job: '牛仔',
          name: '里奥',
          py: 'niuzai'
        },
        {
          job: '调香师',
          name: '里奥',
          py: 'tiaoxiangshi'
        },
        {
          job: '祭司',
          name: '里奥',
          py: 'jisi'
        },
        {
          job: '盲女',
          name: '里奥',
          py: 'mangnv'
        },
        {
          job: '前锋',
          name: '里奥',
          py: 'qianfeng'
        },
        {
          job: '机械师',
          name: '里奥',
          py: 'jixieshi'
        },
        {
          job: '空军',
          name: '里奥',
          py: 'kongjun'
        },
        {
          job: '佣兵',
          name: '里奥',
          py: 'yongbing'
        },
        {
          job: '冒险家',
          name: '里奥',
          py: 'maoxianjia'
        },
        {
          job: '魔术师',
          name: '里奥',
          py: 'moshushi'
        },
        {
          job: '园丁',
          name: '里奥',
          py: 'yuanding'
        },
        {
          job: '“慈善家”',
          name: '里奥',
          py: 'cishanjia'
        },
        {
          job: '律师',
          name: '里奥',
          py: 'lvshi'
        },
        {
          job: '医生',
          name: '里奥',
          py: 'yisheng'
        },
        {
          job: '幸运儿',
          name: '里奥',
          py: 'xingyuner'
        }
      ]
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  margin-bottom: 18px;
}
</style>
