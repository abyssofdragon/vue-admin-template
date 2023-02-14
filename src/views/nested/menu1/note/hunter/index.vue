<template>
  <div style="padding:16px;">
    <h2>监管者报告</h2>
    <el-row :gutter="12">
      <el-col v-for="hunter in hunters" :key="hunter.id" :span="4">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ hunter.job }}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push('hunter/'+hunter.py)">详情</el-button>
          </div>
          {{ hunter.name }}
        </el-card>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hunters: [
        {
          job: '隐士',
          name: '阿尔瓦'
        },
        {
          job: '“记录员”',
          name: '柯根'
        },
        {
          job: '“噩梦”',
          name: '“奥尔菲斯”'
        },
        {
          job: '蜡像师',
          name: '菲利普'
        },
        {
          job: '渔女',
          name: '格蕾丝'
        },
        {
          job: '破轮',
          name: '威尔三兄弟'
        },
        {
          job: '“博士”',
          name: '珀西'
        },
        {
          job: '雕刻家',
          name: '伽拉泰亚'
        },
        {
          job: '小提琴家',
          name: '安东尼奥'
        },
        {
          job: '“使徒”',
          name: '安'
        },
        {
          job: '26号守卫',
          name: '邦邦'
        },
        {
          job: '红夫人',
          name: '玛丽'
        },
        {
          job: '孽蜥',
          name: '卢基诺'
        },
        {
          job: '爱哭鬼',
          name: '罗比'
        },
        {
          job: '梦之女巫',
          name: '伊德海拉'
        },
        {
          job: '疯眼',
          name: '巴尔克'
        },
        {
          job: '摄影师',
          name: '约瑟夫'
        },
        {
          job: '宿伞之魂',
          name: '谢必安/范无咎'
        },
        {
          job: '黄衣之主',
          name: '哈斯塔'
        },
        {
          job: '红蝶',
          name: '美智子'
        },
        {
          job: '蜘蛛',
          name: '瓦尔莱塔'
        },
        {
          job: '“杰克”',
          name: '杰克'
        },
        {
          job: '鹿头',
          name: '班恩'
        },
        {
          job: '小丑',
          name: '裘克'
        },
        {
          job: '厂长',
          name: '里奥'
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
