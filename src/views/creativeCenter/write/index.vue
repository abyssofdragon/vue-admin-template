<template>
  <div style="padding:16px;">
    <Row>
      <Col span="2">
        <div>
          协作者：
        </div>
      </Col>
      <Col span="14">
        <Select v-model="author" filterable>
          <Option v-for="item in cityList" :key="item.value" :value="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="4">
        <Button type="success" long @click="submit">确认协作者</Button>
      </Col>
      <Col span="4">
        <Button type="success" long @click="submit">发布文章</Button>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="2">
        <div>
          标题：
        </div>
      </Col>
      <Col span="10">
        <Input v-model="title" placeholder="请输入标题" />
      </Col>
      <Col span="2">
        <div>
          标签：
        </div>
      </Col>
      <Col span="10">
        <Select v-model="tag" filterable multiple>
          <Option v-for="item in tagList" :key="item.value" :value="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
    </Row>
    <Row>
      <Col span="24" style="padding-right:10px">
        <Editor ref="editor" v-model="article" />
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: '请输入',
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
      tagList: [
        {
          value: '1',
          label: '空军'
        },
        {
          value: '2',
          label: '魔术师'
        }
      ],
      tag: [],
      title: '标题'
    }
  },
  methods: {
    submit() {
      console.log(111, this.article)
    }
  }
}
</script>
