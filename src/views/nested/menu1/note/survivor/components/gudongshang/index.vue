<template>
  <div style="padding:8px;">
    <h5>古董商</h5>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件" name="1">
        <el-row>
          <el-col :span="24">
            <el-table :data="letterCN" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item>
                      <v-html contenteditable="true">{{ props.row.letter }}</v-html>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="NO" prop="id" />
              <el-table-column label="年份" prop="year" />
              <el-table-column label="标题" prop="title" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterCN: [
        {
          id: 'I',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'II',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'III',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        }
      ]
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
