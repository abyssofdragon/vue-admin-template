<!-- 权限管理 -->
<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
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
      height="500"
      :row-config="{ isHover: true }"
      :data="display"
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-column type="seq" width="60" />
      <vxe-column field="id" title="用户ID" type="html" sortable />
      <vxe-column field="name" title="用户名" type="html" sortable />
      <vxe-column field="authority" title="用户权限" type="html" :formatter="formatterAuthority" :filters="[{label: '实习生', value: '1'}, {label: '管理员', value: '3'}, {label: '超级管理员', value: '5'}]" :filter-multiple="false" />
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
      id="authorityManage"
      v-model="showEdit"
      :title="selectRow ? '编辑&保存' : '新增&保存'"
      width="800"
      height="400"
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
            title="更改权限"
            title-align="left"
            :title-width="200"
            :span="24"
            :title-prefix="{ icon: 'vxe-icon-comment' }"
          />
          <vxe-form-item field="authority" title="用户权限" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.authority" transfer>
                <vxe-option
                  v-for="item in authorityList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                  :disabled="item.disabled"
                />
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="submit">提交</vxe-button>
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
import VXETable from 'vxe-table'
import XEUtils from 'xe-utils'

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
      initialTableData: [
        { id: 10001, name: 'JZY', authority: '5' },
        { id: 10002, name: 'ZPF', authority: '3' },
        { id: 10003, name: 'CC', authority: '3' },
        { id: 10004, name: 'LXH', authority: '3' },
        { id: 10005, name: 'RHF', authority: '3' },
        { id: 10006, name: 'ZCY', authority: '3' },
        { id: 10001, name: 'JZY', authority: '5' },
        { id: 10002, name: 'ZPF', authority: '3' },
        { id: 10003, name: 'CC', authority: '3' },
        { id: 10004, name: 'LXH', authority: '3' },
        { id: 10005, name: 'RHF', authority: '3' },
        { id: 10006, name: 'ZCY', authority: '3' },
        { id: 10001, name: 'JZY', authority: '5' },
        { id: 10002, name: 'ZPF', authority: '3' },
        { id: 10003, name: 'CC', authority: '3' },
        { id: 10004, name: 'LXH', authority: '3' },
        { id: 10005, name: 'RHF', authority: '3' },
        { id: 10006, name: 'ZCY', authority: '3' },
        { id: 10001, name: 'JZY', authority: '5' },
        { id: 10002, name: 'ZPF', authority: '3' },
        { id: 10003, name: 'CC', authority: '3' },
        { id: 10004, name: 'LXH', authority: '3' },
        { id: 10005, name: 'RHF', authority: '3' },
        { id: 10006, name: 'ZCY', authority: '3' }
      ],
      selectRow: null,
      showEdit: false,
      authorityList: [
        { label: '实习生', value: '1', disabled: false },
        { label: '管理员', value: '3', disabled: false },
        { label: '超级管理员', value: '5', disabled: true }
      ],
      formData: {
        authority: '1'
      },
      formRules: {
        authority: [
          { required: true, message: '请选择权限' }
        ]
      }
    }
  },
  created() {
    this.searchEvent()
  },
  methods: {
    formatterAuthority({ cellValue }) {
      const item = this.authorityList.find(item => item.value === cellValue)
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
        authority: row.authority
      }
      this.selectRow = row
      this.showEdit = true
    },
    submitEvent() {
      this.submitLoading = true
      setTimeout(() => {
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          VXETable.modal.message({ content: '保存成功', status: 'success' })
          Object.assign(this.selectRow, this.formData)
        }
      }, 500)
    },
    searchEvent() {
      this.loading = true
      const filterName = XEUtils.toValueString(this.filterName1).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const searchProps = ['name']
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
      console.log(1111, this.list)
      this.loading = false
      this.tablePage.totalResult = this.list.length
      this.display = this.list.slice((this.tablePage.currentPage - 1) * this.tablePage.pageSize, this.tablePage.currentPage * this.tablePage.pageSize)
      console.log(1111, this.display)
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
