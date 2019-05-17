<template>
  <div v-highlight>
    <pre>
<!-- 声明什么类型的代码 -->
<code class="css">
.hljs {
  font-family: "Inconsolata", "Monaco", "Consolas", "Andale Mono", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
  font-size: 13px;
  width: 98%;
  margin-left: 1%;
  background: #282c34;
  padding: 0px 0.5em 0.5em 0.5em;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #333;
  -webkit-box-shadow: 0px 0px 10px #333;
  white-space: pre;
}
</code>
<code class="javascript">
  // 声明什么类型的代码
  var a = 123;
  var b = document.getElementById('tr')
</code>
<code class="html">
  &lt;div&gt;&lt;/div&gt;<!-- html代码需要转义 -->
</code>
<code class="nohighlight">
  var aa = 1
</code>
<code class="plaintext">
  var aa = 1
</code>
<code class="http">
  POST /task?id=1 HTTP/1.1
  Host: example.org
  Content-Type: application/json; charset=utf-8
  Content-Length: 137

  {
    "status": "ok",
    "extended": true,
    "results": [
      {"value": 0, "type": "int64"},
      {"value": 1.0e+3, "type": "decimal"}
    ]
  }
</code>
        </pre>
  </div>
</template>
<script>
  export default {

  }
</script>
