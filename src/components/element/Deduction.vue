<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="背景推演" name="1">
        <el-row>
          <el-col :span="24">
            <el-table
              :data="deduction"
              stripe
              border
              default-expand-all
              max-height="700"
              style="width: 100%"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    inline
                    class="demo-table-expand"
                  >
                    <el-form-item>
                      <div contenteditable="true">
                        {{ props.row.conclusion }}
                      </div>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="推演" prop="id" min-width="1" />
              <el-table-column label="标题" prop="title" min-width="2" />
              <el-table-column label="内容" prop="content" min-width="11" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Deduction',
  props: {
    deduction: {
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
}

.el-table tr .el-table__expanded-cell {
  padding: 3.5px 58px;
}
</style>
