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
          id: 40,
          job: '记者',
          name: '爱丽丝',
          pinyin: 'jizhe'
        },
        {
          id: 39,
          job: '作曲家',
          name: '阿尔瓦',
          pinyin: 'zuoqujia'
        },
        {
          id: 38,
          job: '古董商',
          name: '柯根',
          pinyin: 'gudongshang'
        },
        {
          id: 37,
          job: '教授',
          name: '“奥尔菲斯”',
          pinyin: 'jiaoshou'
        },
        {
          id: 36,
          job: '哭泣小丑',
          name: '菲利普',
          pinyin: 'kuqixiaochou'
        },
        {
          id: 35,
          job: '“小女孩”',
          name: '格蕾丝',
          pinyin: 'xiaonvhai'
        },
        {
          id: 34,
          job: '小说家',
          name: '威尔三兄弟',
          pinyin: 'xiaoshuojia'
        },
        {
          id: 33,
          job: '病患',
          name: '珀西',
          pinyin: 'binghuan'
        },
        {
          id: 32,
          job: '“心理学家”',
          name: '伽拉泰亚',
          pinyin: 'xinlixuejia'
        },
        {
          id: 31,
          job: '玩具商',
          name: '安东尼奥',
          pinyin: 'wanjushang'
        },
        {
          id: 30,
          job: '击球手',
          name: '安',
          pinyin: 'jiqiushou'
        },
        {
          id: 29,
          job: '画家',
          name: '邦邦',
          pinyin: 'huajia'
        },
        {
          id: 28,
          job: '昆虫学者',
          name: '玛丽',
          pinyin: 'kunchongxuezhe'
        },
        {
          id: 27,
          job: '“囚徒”',
          name: '卢基诺',
          pinyin: 'qiutu'
        },
        {
          id: 26,
          job: '守墓人',
          name: '罗比',
          pinyin: 'shoumuren'
        },
        {
          id: 25,
          job: '邮差',
          name: '伊德海拉',
          pinyin: 'youchai'
        },
        {
          id: 24,
          job: '调酒师',
          name: '巴尔克',
          pinyin: 'tiaojiushi'
        },
        {
          id: 23,
          job: '大副',
          name: '约瑟夫',
          pinyin: 'dafu'
        },
        {
          id: 22,
          job: '杂技演员',
          name: '谢必安/范无咎',
          pinyin: 'zajiyanyuan'
        },
        {
          id: 21,
          job: '野人',
          name: '哈斯塔',
          pinyin: 'yeren'
        },
        {
          id: 20,
          job: '咒术师',
          name: '美智子',
          pinyin: 'zhoushushi'
        },
        {
          id: 19,
          job: '勘探员',
          name: '瓦尔莱塔',
          pinyin: 'kantanyuan'
        },
        {
          id: 18,
          job: '入殓师',
          name: '杰克',
          pinyin: 'rulianshi'
        },
        {
          id: 17,
          job: '先知',
          name: '班恩',
          pinyin: 'xianzhi'
        },
        {
          id: 16,
          job: '舞女',
          name: '裘克',
          pinyin: 'wunv'
        },
        {
          id: 15,
          job: '牛仔',
          name: '里奥',
          pinyin: 'niuzai'
        },
        {
          id: 14,
          job: '调香师',
          name: '里奥',
          pinyin: 'tiaoxiangshi'
        },
        {
          id: 13,
          job: '祭司',
          name: '里奥',
          pinyin: 'jisi'
        },
        {
          id: 12,
          job: '盲女',
          name: '里奥',
          pinyin: 'mangnv'
        },
        {
          id: 11,
          job: '前锋',
          name: '里奥',
          pinyin: 'qianfeng'
        },
        {
          id: 10,
          job: '机械师',
          name: '里奥',
          pinyin: 'jixieshi'
        },
        {
          id: 9,
          job: '空军',
          name: '里奥',
          pinyin: 'kongjun'
        },
        {
          id: 8,
          job: '佣兵',
          name: '里奥',
          pinyin: 'yongbing'
        },
        {
          id: 7,
          job: '冒险家',
          name: '里奥',
          pinyin: 'maoxianjia'
        },
        {
          id: 6,
          job: '魔术师',
          name: '里奥',
          pinyin: 'moshushi'
        },
        {
          id: 5,
          job: '园丁',
          name: '里奥',
          pinyin: 'yuanding'
        },
        {
          id: 4,
          job: '“慈善家”',
          name: '里奥',
          pinyin: 'cishanjia'
        },
        {
          id: 3,
          job: '律师',
          name: '里奥',
          pinyin: 'lvshi'
        },
        {
          id: 2,
          job: '医生',
          name: '里奥',
          pinyin: 'yisheng'
        },
        {
          id: 1,
          job: '幸运儿',
          name: '里奥',
          pinyin: 'xingyuner'
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
