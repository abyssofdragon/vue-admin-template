<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="背景故事" name="1">
        <el-row>
          <el-col :span="24">
            <el-table :data="description" stripe border default-expand-all max-height="300" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item>
                      <div contenteditable="true">{{ props.row.text }}</div>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="背景故事" prop="type" min-width="12" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
export default {
  name: 'Description',
  props: {
    description: {
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
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    white-space: pre-wrap;
    line-height: 20px;
  }

  </style>
