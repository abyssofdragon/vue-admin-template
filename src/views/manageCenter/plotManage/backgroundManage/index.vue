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
      height="500"
      :row-config="{ isHover: true }"
      :data="display"
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-column type="seq" width="60" />
      <vxe-column field="type" title="类型" type="html" :formatter="formatterType" :filters="[{label: '监管者', value: '1'}, {label: '求生者', value: '2'}]" :filter-multiple="true" />
      <vxe-column field="id" title="ID" type="html" sortable />
      <vxe-column field="role" title="角色" type="html" sortable />
      <vxe-column field="rumor" title="传闻" type="html" />
      <vxe-column field="background" title="背景故事" type="html" />
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
            title="背景故事"
            title-align="left"
            :title-width="200"
            :span="24"
            :title-prefix="{message: '角色的背景故事', icon: 'vxe-icon-info-circle' }"
          />
          <vxe-form-item field="role" title="角色" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-if="selectRow" v-model="data.role" placeholder="请输入角色" disabled />
              <vxe-input v-else v-model="data.role" placeholder="请输入角色" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="type" title="类型" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-if="selectRow" v-model="data.type" transfer>
                <vxe-option
                  v-for="item in typeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                  :disabled="true"
                />
              </vxe-select>
              <vxe-select v-else v-model="data.type" transfer>
                <vxe-option
                  v-for="item in typeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="rumor" title="传闻" :span="24" :item-render="{}" :title-suffix="{message: '传闻', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.rumor" :autosize="{minRows: 2, maxRows: 4}" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="background" title="详情" :span="24" :item-render="{}" :title-suffix="{message: '背景故事', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.background" :autosize="{minRows: 2, maxRows: 4}" />
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
// 筛选 https://vxetable.cn/v3/#/table/base/filter
// 排序 https://vxetable.cn/v3/#/table/base/sort
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
        {
          id: '1',
          type: '1',
          role: '26号守卫',
          rumor: '巴尔克的26号守卫型机器人，储存着大量定时炸弹。',
          background: '巴尔克失败了二十五次，在最后一次他获得了26号，这曾是他最得意的作品。26号拥有极高的自主意识，这大大提升了它的工作效率，也让巴尔克得以暂时获得“假期”，远离繁杂重复的劳作，投入到新的机关设计里去。在此期间，26号的自我意识逐渐形成，它甚至拥有了一个“名字”——邦邦。巴尔克恼怒地发现26号的效率在自我意识的过度发展后逐渐降低，因此他更换了26号的中央枢纽并编写了新规则。奇怪的事情发生了，无论巴尔克更换多少次中央枢纽，修改多少次规则，26号在重启后都会播放同一句话：“很高兴认识你，邦邦。”'
        }
      ],
      typeList: [
        { label: '监管者', value: '1' },
        { label: '求生者', value: '2' }
      ],
      selectRow: null,
      showEdit: false,
      formData: {
        role: '',
        rumor: '',
        type: '',
        background: ''
      },
      formRules: {
        role: [
          { required: true, message: '请输入角色' }
        ],
        type: [
          { required: true, message: '请选择角色类型' }
        ],
        rumor: [
          { required: true, message: '请输入传闻' }
        ],
        background: [
          { required: true, message: '请输入背景故事' }
        ]
      }
    }
  },
  created() {
    this.searchEvent()
  },
  methods: {
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
        name: row.name,
        role: row.role,
        type: row.type,
        rumor: row.rumor,
        background: row.background
      }
      this.selectRow = row
      this.showEdit = true
    },
    insertEvent() {
      this.formData = {
        name: '',
        type: '',
        role: '',
        rumor: '',
        background: ''
      }
      this.selectRow = null
      this.showEdit = true
    },
    submitEvent() {
      this.submitLoading = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          VXETable.modal.message({ content: '保存成功', status: 'success' })
          Object.assign(this.selectRow, this.formData)
        } else {
          VXETable.modal.message({ content: '新增成功', status: 'success' })
          $table.insert(this.formData)
        }
      }, 500)
    },
    async removeEvent(row) {
      const type = await VXETable.modal.confirm('您确定要删除该数据?')
      const $table = this.$refs.xTable
      if (type === 'confirm') {
        $table.remove(row)
      }
    },
    searchEvent() {
      this.loading = true
      const filterName = XEUtils.toValueString(this.filterName1).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const searchProps = ['rumor', 'background']
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
