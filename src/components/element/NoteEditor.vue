<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="笔记" name="1">
            <el-row>
              <el-col :span="24">
                <div class="editor" />
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
export default {
  name: 'NoteEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeNames: ['1'],
      indexCursor: null,
      lengthCursor: null,
      quill: null,
      options: {
        theme: 'snow',
        modules: {
          history: {
            delay: 0,
            maxStack: 500,
            userOnly: true
          },
          toolbar: [
            ['clean', 'bold', 'italic', 'underline', 'strike', 'blockquote'], // 清除文本格式 加粗 斜体 下划线 删除线 引用
            // ['code-block'], // 代码块
            [{ header: 1 }, { header: 2 }, { header: [1, 2, 3, 4, 5, 6, false] }], // 1、2 级标题 &  标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ 'direction': 'rtl' }, { align: [] }], // 文本方向 对齐方式
            [{ size: ['small', false, 'large', 'huge'] }, { color: [] }, { background: [] }], // 字体大小、字体颜色、字体背景颜色、, { font: [] } 字体种类
            ['link', 'image'] // 链接、图片、, 'video'视频
          ] // 工具菜单栏配置,
        },
        placeholder: '请输入笔记'
      }
    }
  },
  mounted() {
    // 初始化编辑器
    this.onEditorFocus()
  },
  cerated() {
    // 注意在这里打印this.quill是为空
    console.log(this.quill)// null
  },
  methods: {
    onEditorFocus() {
      const dom = this.$el.querySelector('.editor')
      this.quill = new Quill(dom, this.options)
      // 文本框内默认内容可解析HTML详情看官网
      this.quill.clipboard.dangerouslyPasteHTML(0, this.value)

      this.quill.on('selection-change', () => {
        // 我的理解为光标每落在编辑器上将执行
        if (this.quill.getSelection()) {
          const { index, length } = this.quill.getSelection()
          Object.assign(this, {
            indexCursor: index, // 字符在编辑器的下标
            lengthCursor: length// 选中的字符长度
          })
        }
      })
    }
  }
}
</script>
