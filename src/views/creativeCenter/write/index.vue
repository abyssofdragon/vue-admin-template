<template>
  <div style="padding:16px;">
    <Row>
      <Col span="2">
        <div>
          协作者：
        </div>
      </Col>
      <Col span="18">
        <Select v-model="author" filterable multiple>
          <Option v-for="item in cityList" :key="item.value" :value="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="4">
             <Button type="success" long @click="submit">发布</Button>
          </Col>
    </Row>
    <Row>
      <Col span="24" style="padding-right:10px">
        <Editor ref="editor" v-model="article" />
      </Col>
    </Row>
    <Row>
        <Col span="24" style="padding-right:10px">
         {{this.article}}
        </Col>
      </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article:'123<br>即将',
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
  },
  methods: {
    submit() {
      console.log(111, this.article)
    }
  }
}
</script>
