<template>
  <div v-highlight>
    <!-- <div class="top">
      <h1>
        <i class="iconfont icon-zhankai1"></i>
        <i class="iconfont icon-web-channel"><span>Web</span></i>
      </h1>
    </div> -->
    <a class="back-top"
       @click="toTop">
      <i class="iconfont icon-top"></i>
    </a>
    <quill-editor ref="myQuillEditor"
                  v-model="editorContent"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'

  export default {
    name: 'web',
    components: {
      quillEditor
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      },
    },
    mounted () {
      this.onscroll()
    },
    data () {
      return {
        datas: '',
        webnav: false,
        timer: '', // 定义一个定时器
        isTop: true, // 定义一个布尔值，用于判断是否到达顶部
        editorContent: '',
        editorOption: {
          // modules: {
          //   syntax: true, // Include syntax module
          //   toolbar: [['code-block']] // Include button in toolbar
          // },
          placeholder: '请输入...',
          theme: 'snow' // 主题 bubble snow
        }
      }
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
      onEditorChange (editor) {
        console.log('内容改变事件', editor)
      },
      // 把实体格式字符串转义成HTML格式的字符串
      escapeStringHTML (str) {
        str = str.replace(/&lt;/g, '<')
        str = str.replace(/&gt;/g, '>')
        return str
      },
      onscroll () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementsByClassName('back-top')[0].style.opacity = 1
        } else {
          document.getElementsByClassName('back-top')[0].style.opacity = 0
        }
        // 主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if (!this.isTop) {
          clearInterval(this.timer)
        }
        this.isTop = false
      },
      toTop () {
        let self = this
        this.timer = setInterval(() => {
          // 获取滚动条的滚动高度
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          // 用于设置速度差，产生缓动的效果
          let speed = Math.floor(-osTop / 6)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
          self.isTop = true // 用于阻止滚动事件清除定时器
          if (osTop === 0) {
            clearInterval(self.timer)
          }
        }, 30)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .quill-editor {
    width: 100%;
    padding: 0px 1%;
  }
</style>
