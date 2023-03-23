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
      :column-config="{resizable: true}"
      :data="display"
      @cell-dblclick="cellDBLClickEvent"
    >
      <vxe-column type="seq" width="60"  />
      <vxe-column field="role" title="角色" type="html" sortable />
      <vxe-column field="id" title="ID" type="html" sortable />
      <vxe-column field="content" title="内容" type="html" />
      <vxe-column field="conclusion" title="结论" type="html" />
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
      v-model="showEdit"
      :title="selectRow ? '编辑&保存' : '新增&保存'"
      width="800"
      min-width="600"
      min-height="300"
      :loading="submitLoading"
      resize
      destroy-on-close
    >
      <template #default>
        <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
          <vxe-form-item
            title="背景推演"
            title-align="left"
            :title-width="200"
            :span="24"
            :title-prefix="{message: '角色的背景推演', icon: 'vxe-icon-info-circle' }"
          />
          <vxe-form-item field="role" title="角色" :span="12" :item-render="{}" >
            <template #default="{ data }">
              <vxe-input v-model="data.role" placeholder="请输入角色" disabled v-if="isEdit"/>
              <vxe-input v-model="data.role" placeholder="请输入角色" v-else />
            </template>
          </vxe-form-item>
          <vxe-form-item field="id" title="推演ID" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.id" placeholder="请输入推演ID" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="content" title="内容" :span="24" :item-render="{}" :title-suffix="{message: '请输入推演内容', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.content" :autosize="{minRows: 2, maxRows: 4}" />
            </template>
          </vxe-form-item>
          <vxe-form-item field="conclusion" title="结论" :span="24" :item-render="{}" :title-suffix="{message: '请输入推演结论', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.conclusion" :autosize="{minRows: 2, maxRows: 4}" />
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
          role: '26号守卫',
          id: 1,
          title: '助手',
          content: '创造的第一步决定了上限',
          conclusion: '实验记录1;连续25个失败品，只得到一个可用的结果。二十六分之一的概率，希望这一切都值得。'
        },
        {
          role: '26号守卫',
          id: 2,
          title: '性价比',
          content: '暂时的浪费是为了之后更有效率',
          conclusion: '实验记录2:26号能够胜任实验室以外的建筑工作，包括“保姆工作”。一次明智的投资！'
        },
        {
          role: '26号守卫',
          id: 3,
          title: '负担',
          content: '记忆和能量是有上限的，一些额外的内容会变成负担',
          conclusion: '实验记录3：是德罗斯小姐的声音，26号录下了那句话。这会占用存储空间，也许我该消除那部分内容。'
        },
        {
          role: '26号守卫',
          id: '4',
          title: '家庭',
          content: '这是一种以婚姻、血缘、收养或同居等关系为基础而形成的共同生活单位',
          conclusion: '实验记录4：小混球又不小心弄丢了一些值钱的物件，从他“真正”的父母那里回来后……他尝试自己承担全部责任，但这种容忍和保护只会使他们变得越来越贪婪。'
        },
        {
          role: '26号守卫',
          id: '5',
          title: '偷猎者',
          content: '这是比鬣狗更狡猾残暴的一群畜生',
          conclusion: '影像记录1：:一群偷猎者正在追赶一只瘸腿的雌性驼鹿并沿途放下新的捕兽夹。'
        },
        {
          role: '26号守卫',
          id: '6',
          title: '实验场所',
          content: '如果我们需要进行一些必要的实验，安全是最重要的',
          conclusion: '实验记录5：我希望这次事故不会让班恩大发雷霆，至少，这证明26号具备了守卫的基础功能。也许我应该增加延时装置，避免弹药爆炸得太迅速。'
        },
        {
          role: '26号守卫',
          id: '7',
          title: '通行口令',
          content: '人类是一种既不可靠也不稳定的装置',
          conclusion: '实验记录6：任何需要人工验证的通行验证方式都不如机器准确，但德罗斯夫妇显然认为留下足够的雇员可以为当地就业率提供助益。即使这种行为会带来损害自身财产安全的风险。'
        },
        {
          role: '26号守卫',
          id: '8',
          title: '失控',
          content: '实验的意义之一正是检验理论假说的正确性',
          conclusion: '实验记录7：延时装置的小问题带来了大麻烦。我得重新进入实验室制造26号的运动组件。为了消除德罗斯小姐对不归林的好奇心，我会给26号留下影像记录核心与互动模块。'
        },
        {
          role: '26号守卫',
          id: '9',
          title: '暴乱',
          content: '众愚政治是一种病态的大众统治，很容易被有心人煽动',
          conclusion: '影像记录2：拿着火把与枪支的人群蜂拥而来，其中有一些熟悉的面孔，他们带走了两个孩子。'
        },
        {
          role: '26号守卫',
          id: '10',
          title: '回忆',
          content: '他从来没真正删除那段记录',
          conclusion: '影像记录0：穿着白色连衣裙的女孩笑着说：“很高兴认识你，邦邦。”'
        }
      ],
      selectRow: null,
      isEdit:false,
      showEdit: false,
      formData: {
        role: '示例',
        id: '0',
        content: '示例',
        conclusion: ''
      },
      formRules: {
        role: [
          { required: true, message: '请输入角色' }
        ],
        id: [
          { required: true, message: '请输入推演节点ID' }
        ],
        content: [
          { required: true, message: '请输入背推演内容' }
        ],
        conclusion: [
          { required: true, message: '请输入推演结论' }
        ]
      }
    }
  },
  created() {
    this.searchEvent()
  },
  methods: {
    visibleMethod({ data }) {
      return data.flag1 === 'Y'
    },
    cellDBLClickEvent({ row }) {
      this.editEvent(row)
    },
    editEvent(row) {
      this.formData = {
        role: row.role,
        id: row.id,
        content: row.content,
        conclusion: row.conclusion
      }
      this.selectRow = row
      this.isEdit=true,
      this.showEdit = true
    },
    insertEvent() {
      this.formData = {
        role: '',
        id: '',
        content: '',
        conclusion:''
      }
      this.selectRow = null
      this.isEdit=false
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
        const searchProps = ['role', 'content', 'conclusion']
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
