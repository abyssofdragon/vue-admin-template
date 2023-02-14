<template>
  <div>
    <h1>{{ title }}</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件" name="1">
        <el-row>
          <el-col :span="24">
            <el-table :data="letter" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item>
                      <v-html contenteditable="true">{{ props.row.letter }}</v-html>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="NO" prop="id" style="width: 10%" />
              <el-table-column label="年份" prop="year" style="width: 10%" />
              <el-table-column label="标题" prop="title" style="width: 80%" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  props: {
    title: {
      type: String,
      default: ''
    },
    letter: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    white-space: pre-wrap;
}
</style>
