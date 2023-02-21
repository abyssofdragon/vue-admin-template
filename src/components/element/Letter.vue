<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件" name="1">
        <el-row>
          <el-col :span="24">
            <!-- <el-table :data="letter" stripe border max-height="300" style="width: 100%">
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
            </el-table> -->
            <vxe-toolbar>
              <template #buttons>
                <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent" />
              </template>
            </vxe-toolbar>

            <vxe-table
              round
              stripe
              border
              :row-config="{isHover: true}"
              :data="display"
              :column-config="{resizable: true}"
              max-height="300"
            >
              <vxe-column field="role" title="角色" type="html" width="100px" />
              <vxe-column field="id" title="信件" type="html" width="50px" />
              <vxe-column field="year" title="年份" type="html" width="60px" />
              <vxe-column field="title" title="标题" type="html" width="200px" />
              <vxe-column field="letter" title="内容" type="html" width="780px" />
              <template #empty>
                <span style="color: red;">
                  <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
                  <p>No Data</p>
                </span>
              </template>
            </vxe-table>
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
      display: [],
      filterName: '',
      activeNames: ['1']
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
        const searchProps = ['role', 'id', 'year', 'title', 'letter']
        const rest = this.letter.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))
        this.display = rest.map(row => {
          const item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      } else {
        this.display = this.letter
      }
    }
  }
}
</script>

<style>
.keyword-lighten {
  color: #000;
  background-color: #ffff00;
}

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
