<!-- 剧情管理 -->
<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="vxe-icon-square-plus" @click="insertEvent()">新增</vxe-button>
        <vxe-input v-model="filterName1" type="search" placeholder="试试全表搜索" @keyup="searchEvent" />
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable"
      border
      stripe
      :loading="loading"
      resizable
      show-overflow
      :row-config="{ isHover: true }"
      :data="display"
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-column type="seq" width="60" />
      <vxe-column field="rtype" title="类型" type="html" :formatter="formatterType" :filters="[{label: '监管者', value: 2}, {label: '求生者', value: 1}]" :filter-multiple="true" width="80px" />
      <vxe-column field="rjob" title="角色" type="html" sortable width="80px" />
      <vxe-column field="rrumor" title="传闻" type="html" />
      <vxe-column field="rback" title="背景故事" type="html" />
      <vxe-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button type="text" icon="vxe-icon-edit" @click="editEvent(row)" />
          <vxe-button type="text" icon="vxe-icon-delete" @click="removeEvent(row)" />
        </template>
      </vxe-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
    <vxe-pager
      border
      size="medium"
      :loading="loading"
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
      :total="tablePage.totalResult"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange"
    />
    <vxe-modal
      id="backgroundManage"
      v-model="showEdit"
      :title="selectRow ? 'Update' : 'New'"
      width="800"
      height="500"
      min-width="600"
      min-height="300"
      :loading="submitLoading"
      resize
      destroy-on-close
      show-zoom
      remember
      storage
      transfer
    >
      <template #default>

        <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
          <vxe-form-item
            title="角色信息"
            title-align="left"
            :title-width="200"
            :span="24"
            :title-prefix="{ message: '角色的背景故事', icon: 'vxe-icon-info-circle' }"
          />
          <vxe-form-item field="rid" title="RID" :span="8" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.rid" placeholder="RID" disabled />
            </template>
          </vxe-form-item>
          <vxe-form-item field="rtype" title="类型" :span="8" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-if="selectRow" v-model="data.rtype" transfer disabled>
                <vxe-option
                  v-for="item in typeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </vxe-select>
              <vxe-select v-else v-model="data.rtype" transfer>
                <vxe-option
                  v-for="item in typeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="rno" title="RNO" :span="8" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.rno" placeholder="RNO" disabled />
            </template>
          </vxe-form-item>
          <vxe-form-item field="rjob" title="角色职业" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-if="selectRow" v-model="data.rjob" placeholder="请输入角色职业" disabled />
              <vxe-input v-else v-model="data.rjob" placeholder="请输入角色职业" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="rname" title="角色名字" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.rname" placeholder="请输入角色名字" />
            </template>
          </vxe-form-item>
          <vxe-form-item
            title="背景故事"
            title-align="left"
            :title-width="200"
            :span="24"
            :title-prefix="{message: '角色的背景故事', icon: 'vxe-icon-info-circle' }"
          />
          <vxe-form-item field="rrumor" title="传闻" :span="24" :item-render="{}" :title-suffix="{message: '传闻', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.rrumor" :autosize="{minRows: 2, maxRows: 4}" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="rback" title="详情" :span="24" :item-render="{}" :title-suffix="{message: '背景故事', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.rback" :autosize="{minRows: 2, maxRows: 4}" />
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button v-if="selectRow" type="submit" @click="putRoleUpdate">修改</vxe-button>
              <vxe-button v-else type="submit" @click="postRoleAdd">新增</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>

  </div>
</template>
<script>
// 全表搜索 https://vxetable.cn/v3/#/table/advanced/search
// 弹框编辑 https://vxetable.cn/v3/#/table/edit/popupForm
// 筛选 https://vxetable.cn/v3/#/table/base/filter
// 排序 https://vxetable.cn/v3/#/table/base/sort
import VXETable from 'vxe-table'
import XEUtils from 'xe-utils'
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      },
      list: [],
      display: [],
      filterName1: '',
      submitLoading: false,
      initialTableData: [],
      typeList: [
        { label: '监管者', value: 2 },
        { label: '求生者', value: 1 }
      ],
      selectRow: null,
      showEdit: false,
      formData: {},
      formRules: {
        rjob: [
          { required: true, message: '请输入角色' }
        ],
        rtype: [
          { required: true, message: '请选择角色类型' }
        ],
        rrumor: [
          { required: true, message: '请输入传闻' }
        ],
        rback: [
          { required: true, message: '请输入背景故事' }
        ],
        rname: [
          { required: true, message: '请输入角色名字' }
        ]
      }
    }
  },
  created() {
    this.getRoleAll()
  },
  methods: {
    getRoleAll() {
      axios({
        method: 'get',
        url: 'http://localhost:8080/role/getAllRoles',
        timeout: 30000
        // data: FormDatas
      }).then(res => {
        this.initialTableData = res.data.data
        this.tablePage.totalResult = this.initialTableData.length
        this.display = this.initialTableData.slice((this.tablePage.currentPage - 1) * this.tablePage.pageSize, this.tablePage.currentPage * this.tablePage.pageSize)
      })
    },
    putRoleUpdate() {
      const data = this.formData
      axios({
        method: 'put',
        url: 'http://localhost:8080/role/updateRole',
        timeout: 30000,
        data
        // data: FormDatas
      }).then(res => {
        this.getRoleAll()
      })
    },
    postRoleAdd() {
      const data = this.formData
      axios({
        method: 'post',
        url: 'http://localhost:8080/role/addRole',
        timeout: 30000,
        data
        // data: FormDatas
      }).then(res => {
        this.getRoleAll()
      })
    },
    deleteRole(row) {
      axios({
        method: 'delete',
        url: 'http://localhost:8080/role/deleteRole/' + row.rid,
        timeout: 30000
        // data: FormDatas
      }).then(res => {
        this.getRoleAll()
      })
    },
    formatterType({ cellValue }) {
      const item = this.typeList.find(item => item.value === cellValue)
      return item ? item.label : ''
    },
    visibleMethod({ data }) {
      return data.flag1 === 'Y'
    },
    cellDBLClickEvent({ row }) {
      this.editEvent(row)
    },
    editEvent(row) {
      this.formData = {
        rid: row.rid,
        rno: row.rno,
        rjob: row.rjob,
        rname: row.rname,
        rtype: row.rtype,
        rrumor: row.rrumor,
        rback: row.rback
      }
      this.selectRow = row
      this.showEdit = true
    },
    insertEvent() {
      this.formData = {
        rid: null,
        rjob: null,
        rno: null,
        rname: null,
        rtype: null,
        rrumor: null,
        rback: null
      }
      this.selectRow = null
      this.showEdit = true
    },
    submitEvent() {
      this.submitLoading = true
      setTimeout(() => {
        // const $table = this.$refs.xTable
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          VXETable.modal.message({ content: '保存成功', status: 'success' })
          // Object.assign(this.selectRow, this.formData)
        } else {
          VXETable.modal.message({ content: '新增成功', status: 'success' })
          // $table.insert(this.formData)
        }
      }, 500)
    },
    async removeEvent(row) {
      const type = await VXETable.modal.confirm('您确定要删除该数据?')
      if (type === 'confirm') {
        this.deleteRole(row)
        this.getRolesAll()
      }
    },
    searchEvent() {
      this.loading = true
      const filterName = XEUtils.toValueString(this.filterName1).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const searchProps = ['rrumor', 'rback']
        const rest = this.initialTableData.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))
        this.list = rest.map(row => {
          const item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      } else {
        this.list = this.initialTableData
      }
      this.loading = false
      this.tablePage.totalResult = this.list.length
      this.display = this.list.slice((this.tablePage.currentPage - 1) * this.tablePage.pageSize, this.tablePage.currentPage * this.tablePage.pageSize)
    },
    handlePageChange({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage
      this.tablePage.pageSize = pageSize
      this.searchEvent()
    }
  }
}
</script>

      <style>
      .keyword-lighten {
      color: #000;
      background-color: #FFFF00;
      }
      </style>
