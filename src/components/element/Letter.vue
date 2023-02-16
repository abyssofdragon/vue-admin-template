<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件" name="1">
        <el-row>
          <el-col :span="24">
            <el-table :data="letter" stripe border max-height="300" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item>
                      <div contenteditable="true">{{ props.row.letter }}</div>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="信件" prop="id" min-width="1" />
              <el-table-column label="年份" prop="year" min-width="1" />
              <el-table-column label="标题" prop="title" min-width="12" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
import XEUtils from 'xe-utils'

export default {
  name: 'Letter',
  props: {
    letter: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1'],
      dispaly: [],
      filterName: ''
    }
  },
  created() {
    this.searchEvent()
  },
  methods: {
    searchEvent() {
      const filterName = XEUtils.toValueString(this.filterName).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const searchProps = ['year', 'title', 'content']
        const rest = this.letter.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))
        this.dispaly = rest.map(row => {
          const item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      } else {
        this.dispaly = this.letter
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
  line-height: 20px;
}

</style>
