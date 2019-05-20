<template>
  <div>
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
    <div class="quill-code">
      <code class="hljs"
            v-html="contentCode"></code>
    </div>
    <div class="save-btn">
      <input type="button"
             value="保存"
             @click="saveForJson">
    </div>
    <div class="html-list"
         v-for="(item, index) in htmlList"
         :key="index">
      <span class="html-span"
            v-html="item.text"></span>
    </div>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  import { saveAs } from 'file-saver'
  import hljs from 'highlight.js'
  // import axios from 'axios'
  import webHtml from '../json/web.json'

  export default {
    name: 'web',
    components: {
      quillEditor
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      },
      contentCode () {
        return hljs.highlightAuto(this.editorContent).value
      }
    },
    mounted () {
      this.onscroll()
      this.initData()
    },
    data () {
      return {
        datas: '',
        webnav: false,
        timer: '', // 定义一个定时器
        isTop: true, // 定义一个布尔值，用于判断是否到达顶部
        editorContent: '',
        contentHtml: [],
        htmlList: [],
        editorOption: {
          modules: {
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }, // Include syntax module
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ], // Include button in toolbar
          },
          placeholder: '请输入...',
          theme: 'snow' // 主题 bubble snow
        }
      }
    },
    methods: {
      initData () {
        this.htmlList = webHtml
        console.log(this.htmlList)
        if (this.htmlList) {
          this.contentHtml = this.htmlList
        }
        console.log(this.htmlList)
        // console.log(this.$route.params)
        // axios.get('../json/web.json').then(res => {
        //   console.log(res)
        // }).catch(e => {
        //   console.log(e)
        // })
      },
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
      // 存为json文件
      saveForJson () {
        console.log(this.editorContent)
        if (this.editorContent) {
          let content = this.editorContent
          console.log(content)
          this.contentHtml.push({
            text: content
          })
          let blod = new Blob([JSON.stringify(this.contentHtml)], { type: '' })
          console.log(blod)
          saveAs(blod, 'web.json')
        }
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
  @mixin block-style {
    width: 98%;
    margin-left: 1%;
  }
  .quill-editor {
    width: 100%;
    padding: 0px 1%;
  }
  .quill-code {
    border: none;
    height: auto;
    > code {
      width: 98%;
      margin: 12px 1%;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-radius: 4px;
      height: 10rem;
      overflow-y: auto;
      resize: vertical;
    }
  }
  .save-btn {
    @include block-style;
    margin-bottom: 1em;
    text-align: right;
  }
  .html-list {
    @include block-style;
    font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", Helvetica,
      Arial, sans-serif;
    height: 100%;
    margin-bottom: 1em;
    border-radius: 0.6em;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    &:hover {
      // background-color: rgb(236, 236, 236);
      box-shadow: 0 0 10px #65bd60;
    }
    .html-span {
      font-size: 0.89em;
      color: rgb(48, 48, 48);
      margin: 0.2em 1.5em;
      line-height: 1.6em;
    }
  }
</style>
