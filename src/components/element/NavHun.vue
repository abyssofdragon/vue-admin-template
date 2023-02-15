<!-- 监管者导航卡片 -->
<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="监管者导航" name="1">
        <el-row :gutter="12">
          <el-col v-for="hunter in hunters" :key="hunter.id" :span="4">
            <el-card shadow="hover" class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ hunter.job }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push(hunter.py)">详情</el-button>
              </div>
              {{ hunter.name }}
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'NavHun',
  props: {
    hunters: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1']
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
