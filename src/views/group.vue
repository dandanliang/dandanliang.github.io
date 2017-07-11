<template>
    <div class="group">
        <!--header部分-->
        <header1>
            <div class="tit">小组</div>
        </header1>
    
        <!--bg开始-->
        <div class="bg">
            <div class="bg-auto">
                <h3>6666666个有趣小组</h3>
                <p>立即选择加入吧</p>
            </div>
            <a class="txt">根据小组推荐</a>
        </div>
        <div class="cat">
            <a class="a" style="color: #fff;bottom: 10px; position: absolute;">有意思</a>
        </div>
        <!--文本-->
        <!--tab开始-->
        <div class="tab">
            <div class="tab1">
                <div class="Line">
                    <hr>
                </div>
            </div>
            <div class="tab2">
                <div class="book">读 书</div>
            </div>
            <div class="tab3">
                <div class="Line">
                    <hr>
                </div>
            </div>
        </div>
        <!--tab结束-->
        <!--content-->
        <!--content开始-->
        <div class="content" v-for="paper in papers">
            <div class="con-l">
                <img class="con-1-img" :src="papers.urls">
    
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
                        <h3>{{papers.titles}}</h3>
                        <p class="txt">{{papers.txt}}</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">{{papers.gzcount}}人</a>
                        <a class="icon">
    
                        </a>
                    </div>
                </div>
            </div>
    
        </div>
        <div class="content">
            <div class="con-l">
                <div class="con-1-img">
                </div>
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
                        <h3>英剧！英剧！</h3>
                        <p class="txt">看英剧的来，别扯别的！</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">12333人</a>
                        <a class="icon">
    
                        </a>
                    </div>
                </div>
            </div>
    
        </div>
        <div class="content">
            <div class="con-l">
                <div class="con-1-img">
                </div>
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
                        <h3>英剧！英剧！</h3>
                        <p class="txt">看英剧的来，别扯别的！</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">12333人</a>
                        <a class="icon">
    
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--content结束-->
        <links></links>
        <!--使用footer组件-->
        <footer2></footer2>
    </div>
</template>
<script>
import header1 from '@/components/headerNormal'
import footer2 from '@/components/footer'
import links from '@/components/link'
export default {
    components: {
        footer2,
        links,
        header1
    },
    data() {
        return {
            papers: [

            ]
        }
    },
    created() {
        axios.post('api/234', { url: '2344' }).then((a) => {
            this.papers = a.data;
        }).catch((error) => {

        })
    },
    // mathods: {
    //     get: function () {
    //         this.papers = JSON;
    //     }
    // },
    // filters: {
    //     imgUrl: function (value) {
    //         if (!value) return "";
    //         value = "img/" + value;
    //         return value;
    //     }
    // }

}

</script>
<style scoped>
.cat {
    height: 60px;
    background: red;
    position: relative;
    border-radius: 4px;
}

.cat,
.bg {
    padding: 10px;
    margin: 17px;
}



.bg .bg-auto {
    text-align: center;
    margin: 10px;
}

.bg h3 {
    color: #111;
    height: 30px;
    line-height: 30px;
}

.bg p {
    color: #525252;
    font-size: 18px;
}

.bg p,
a.txt {
    color: #525252;
}

.group {
    position: relative;
}
















/*.header .link {
    font-size: 20px;
    font-family: cursive;
    color: #fff;
    float: left;
    padding: 8px;
    line-height: 45px;
    position: relative;
}*/

.tit {
    line-height: 60px;
    font-size: 20px;
    font-family: "微软雅黑";
    color: #fff;
    text-align: center;
    display: block;
}

.search-link {
    position: absolute;
    top: 20px;
    right: 20px;
}

.search-link a,
span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: red;
    margin-left: 20px;
}

.tab {
    display: flex;
    padding: 10px;
    margin: 10px;
}

.tab1,
.tab3 {
    flex: 2;
}

.tab2 {
    flex: 1;
    text-align: center;
    padding: 10px;
}

.tab2 .book {
    color: #525252;
}

div.Line {
    padding: 20px 0;
    color: #e3e3e3;
}



.content {
    display: flex;
    margin: 9%;
    padding: 10px;
    border-radius: 5px;
    /*background: yellow;*/
}

.content .con-l {
    flex: 1;
}

.content .con-l .con-1-img {
    width: 100%;
    border-radius: 12%;
    height: 0;
    padding-bottom: 100%;
    /*background: red;*/
    box-shadow: 1px 1px 1px 1px #888888;
}

.con-l h3 {
    height: 30px;
    line-height: 30px;
}

.con-r {
    flex: 4;
    margin-left: 10px;
}

.con-r .con-r-tab {
    width: 100%;
}

.con-r-tab-1 {
    width: 68%;
    /*background: red;*/
    float: left;
}

.con-r-tab-1 h3 {
    height: 34px;
    line-height: 34px;
}

.con-r-tab-1 .txt {
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    color: #525252;
}


.con-r-tab-r {
    padding: 18px 0;
    /*background: greenyellow;*/
}

body {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    float: left;
    color: #e3e3e3;
}


.icon {
    display: -webkit-inline-box;
    width: 20px;
    height: 20px;
    border: 50%;
    background: red;
    border-radius: 50%;
    position: absolute;
    right: 25px;
}





























































































/*.About:after {
    content: "";
    background: #fc424f;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 12px;
    color: #e3e3e3;
}*/
</style>

