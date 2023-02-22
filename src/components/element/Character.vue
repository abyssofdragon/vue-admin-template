<template>
  <div class="container">
    <Row gutter="16">
      <Col span="23">
        <div class="character">
          <div id="note">
            <Editor ref="editor" v-model="note" />
          </div>
          <div id="description">
            <Description :description="description" />
          </div>
          <div id="deduction">
            <Deduction :deduction="deduction" />
          </div>
          <div id="letter">
            <Letter :letter="letter" />
          </div>
        </div>
      </Col>
      <Col span="1">
        <Anchor :affix="true" show-ink container=".character">
          <AnchorLink href="#note" title="笔记" />
          <AnchorLink href="#description" title="描述" />
          <AnchorLink href="#deduction" title="推演" />
          <AnchorLink href="#letter" title="信件" />
        </Anchor>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Col } from 'view-design'

export default {
  name: 'Character',
  components: { Col },
  props: {
    note: {
      type: String,
      default: function() {
        return []
      }
    },
    deduction: {
      type: Array,
      default: function() {
        return []
      }
    },
    description: {
      type: Array,
      default: function() {
        return []
      }
    },
    letter: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style>
.container {
  height: 100%;
  overflow-y: hidden;
}

.character {
  position: relative;
  overflow: auto;
  height: 850px;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  white-space: pre-wrap;
}

.el-table tr .el-table__expanded-cell {
  padding: 3.5px 58px 3.5px 0px;
}
</style>
