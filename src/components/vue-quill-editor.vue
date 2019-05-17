<template>
  <div class="edit_container">
    <quill-editor ref="myQuillEditor"
                  v-model="editorContent"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
    </quill-editor>
    <!-- 从数据库读取展示 -->
    <!-- <div v-html="str"
         class="ql-editor">
      {{str}}
    </div> -->
    <button @click="saveHtml">保存</button>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'

  export default {
    name: 'quill-editor',
    comments: {
      quillEditor
    },
    data () {
      return {
        editorContent: `W Can a man still be brave if he's afraid? That is the only time a man can be brave. `,
        editorOption: {}
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      },
    },
    methods: {
      // 准备编辑器
      onEditorReady (editor) {
        console.log('准备编辑器')
      },
      // 失去焦点事件
      onEditorBlur () {
        console.log('失去焦点事件')
      },
      // 获得焦点事件
      onEditorFocus () {
        console.log('获得焦点事件')
      },
      // 内容改变事件
      onEditorChange () {
        console.log('内容改变事件')
      },
      // 把实体格式字符串转义成HTML格式的字符串
      escapeStringHTML (str) {
        str = str.replace(/&lt;/g, '<')
        str = str.replace(/&gt;/g, '>')
        return str
      },
      saveHtml () {
        console.log(this.editorContent)
      },
    }
  }
</script>
<style lang="scss" scoped>
  // @import "quill/dist/quill.core.css";
  // @import "quill/dist/quill.snow.css";
  // @import "quill/dist/quill.bubble.css";
</style>

