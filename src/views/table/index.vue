<template>
  <div class="app-container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent" />
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      height="300"
      :data="words"
    >
      <vxe-column type="seq" width="80" />
      <vxe-column field="name" title="Name" type="html" />
      <vxe-column field="role" title="Role" type="html" />
      <vxe-column field="age" title="Age" type="html" />
      <vxe-column field="address" title="Address" type="html" />
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data() {
    return {
      words: [],
      filterName: '',
      wordData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
      ]
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
        const searchProps = ['name', 'role', 'age', 'address']
        const rest = this.wordData.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))
        this.words = rest.map(row => {
          const item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      } else {
        this.words = this.wordData
      }
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
