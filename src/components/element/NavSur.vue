<!-- 求生者导航卡片 -->
<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="求生者导航" name="1">
        <el-row :gutter="12">
          <el-col v-for="survivor in survivors" :key="survivor.id" :span="4">
            <el-card shadow="hover" class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ survivor.job }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push(survivor.pinyin)">详情</el-button>
              </div>
              {{ survivor.name }}
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'NavSur',
  props: {
    survivors: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['']
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
