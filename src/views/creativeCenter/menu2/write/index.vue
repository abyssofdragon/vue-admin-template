<template>
  <div>
    <Row>
      <Col span="1">
        <div>
          协作者：
        </div>
      </Col>
      <Col span="22">
        <Select v-model="author" filterable multiple>
          <Option v-for="item in cityList" :key="item.value" :value="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
    </Row>
    <Row>
      <Col span="24" style="padding-right:10px">
        <Editor ref="editor" v-model="note" />
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: '1',
          label: '椰奶咖啡'
        },
        {
          value: '2',
          label: 'DA'
        }
      ],
      author: []
    }
  }
}
</script>
