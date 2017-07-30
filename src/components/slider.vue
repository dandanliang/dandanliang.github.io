
<template>
    <div>
        <div id="Slider">
            <slider :items="imgs" :width="750" :height="300" :sync="true"></slider>
        </div>
    
        <!-- start 说明文字 -->
        <div class="code">
            <style>
            .code {
                padding: 50px 20px 0;
                font-family: -apple-system-font, "Helvetica Neue";
            }
    
            .code code {
                color: green;
                width: 100%;
                display: block;
                overflow: auto;
                padding: 10px 0;
            }
    
            .code p {
                color: #333;
            }
            </style>
            <p>
                <strong>组件</strong>
            </p>
            <code>
                &lt;slider :items=&quot;imgs&quot; :width=&quot;750&quot; :height=&quot;300&quot; :sync=&quot;true&quot;&gt;&lt;/slider&gt;
            </code>
            <p>
                <strong>slider 数据</strong>
            </p>
            <code>
                let imgs = [
                <br> &nbsp;&nbsp;&nbsp;&nbsp;{href:'',src:'img/1.png'},
                <br> &nbsp;&nbsp;&nbsp;&nbsp;{src:'img/2.png'},
                <br> &nbsp;&nbsp;&nbsp;&nbsp;{href:'https://cn.vuejs.org/',src:'img/3.png'}
                <br> ]
            </code>
        </div>
    </div>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

html {
    outline: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html,
body {
    width: 100%;
    height: 100%;
}

ul,
li {
    list-style: none;
}
</style>

