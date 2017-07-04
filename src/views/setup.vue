<<template>
  <div>
        <div class="header">
            <router-link to="/me" class="link" style="list-style:none;"><</router-link >
            <span>设置</span>
        </div>
          <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--推送部分-->
        <div class="Push">
            <div class="Push1">
                <p>推送</p>
                <div class="Jump">
                    <a>></a>
                </div>
            </div>
            <div class="Push1 Push2"> <p>推送标签</p>
                <div class="Jump">
                    <a>></a>
                </div></div>
        </div>
       <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--Push-->
        <div class="Push">
            <div class="Push1 Push2">
                    <p>清理存在空间</p>
                    <div class="Jump item-flow">
                        <p class="flow">123MB</p>
                        <a>></a>
                    </div>
                </div>
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--Push-->
        <div class="Push">
            <div class="Push1 Push2">
                    <p>将[小组]放在桌面</p>
                    <div class="Jump item-flow">
                        <p class="flow"></p>
                        <a></a>
                    </div>
                </div>
        </div>
         <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
         <!--Push-->
        <div class="Push">
            <div class="Push1">
                    <p>清理存在空间</p>
                    <div class="Jump item-flow">
                        
                        <a><p class="flow">来尽情吐槽吧</p>></a>
                    </div>
                </div>
             <div class="Push1 ">
                <p>网络诊断</p>
                <div class="Jump">
                    <a>></a>
                </div>
            </div>
        </div>
         <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--Push-->
        <div class="Push">
            <div class="Push1">
                    <p>新功能介绍</p>
                    <div class="Jump item-flow">
                        <a>></a>
                    </div>
                </div>
             <div class="Push1 ">
                <p class="About">关于</p>
                <div class="Jump">
                    <a>></a>
                </div>
            </div>
             <div class="Push1 ">
                <p >开源许可</p>
                <div class="Jump">
                    <a>></a>
                </div>
            </div>
        </div>
          <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>



  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    width: 100%;
    height: 60px;
    background-color: #ea6f5a;
}

.header .link {
    font-size: 20px;
    font-family: cursive;
    color: #fff;
    float: left;
    padding: 10px;
    line-height: 45px;
}

span {
    line-height: 60px;
    font-size: 24px;
    font-family: "微软雅黑";
    color: #fff;
    text-align: center;
    display: block;
}

.Push {
    box-shadow: 1px 1px 1px #f0f1ec;
    z-index: 22;
}

.Push1 {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f0f1ec;
}

.Push1 p {
    flex: 1;
    color: #4b4b4b;
    font-size: 18px;
}

.Push1 a {
    flex: 2;
    color: #989898;
    font-size: 20px;
    font-family: cursive;
}

.Push .Push2 {
    border-bottom: none;
}

.item-flow {
    position: relative;
}

.flow {
    float: left;
    margin-left: -23px;
    position: relative;
    left: -20px;
}

.About:after {
    content: "";
    background: #fc424f;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 12px;
}
</style>


