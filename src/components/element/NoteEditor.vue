<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="笔记" name="1">
            <el-row>
              <el-col :span="24">
                <quill-editor
                  ref="myQuillEditor"
                  v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                />
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NoteEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: ['1'],
      indexCursor: null,
      lengthCursor: null,
      content: this.note,
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
        [{ align: [] }], // 对齐方式-----[{ align: [] }]
        [{ size: fontSizeStyle.whitelist }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
        [{ font: fonts }], // 字体种类-----[{ font: [] }]
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        [{ direction: 'ltl' }], // 文本方向-----[{'direction': 'rtl'}]
        [{ direction: 'rtl' }], // 文本方向-----[{'direction': 'rtl'}]
        [{ indent: '-1' }, { indent: '+1' }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
        [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
        [{ script: 'sub' }, { script: 'super' }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
        ['blockquote', 'code-block'], // 引用  代码块-----['blockquote', 'code-block']
        ['clean'], // 清除文本格式-----['clean']
        ['link', 'image', 'video'] // 链接、图片、视频-----['link', 'image', 'video']
      ],
      editorOption: {
        // some quill option
        placeholder: '请输入笔记',
        modules: {
          toolbar: {
            container: toolbarOptions
            // handlers: {
            //   image: this.handleImgUpload
            // }
          }
        }
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', this.content)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  }
}
</script>
