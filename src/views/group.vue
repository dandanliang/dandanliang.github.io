<template>
    <div class="group">
        <!--header部分-->
        <header1>
            <div class="tit">小组</div>
        </header1>
        <!--loda组件  -->
    
        <!--bg开始-->
        <div class="bg">
            <div class="bg-auto" v-for="renshu in numders">
                <h3>{{renshu.numders}}个有趣小组</h3>
                <p>立即选择加入吧</p>
            </div>
            <a class="txt">根据小组推荐</a>
        </div>
        <load v-if="fadein===1">{{fadeintext}}</load>
        <div class="cat">
            <a class="a" style="color: #fff;bottom: 10px; position: absolute;">有意思</a>
        </div>
        <!--文本-->
        <!--tab开始-->
        <tab2>
            <div class="book">影视</div>
        </tab2>
        <!--tab结束-->
    
        <!--content开始-->
    
        <div class="content" v-for="paper in papers">
            <div class="con-l">
                <div class="con-1-img">
                    <img :src="paper.img">
                </div>
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
    
                        <h3>{{paper.title}}</h3>
                        <p class="txt">{{paper.text}}</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">{{paper.gzcount}}人</a>
                        <a class="icon">
                            <!--<img :src="paper.img">-->
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--content结束-->
        <!--tab开始-->
        <tab2>
            <div class="book">读书</div>
        </tab2>
        <!--tab结束-->
        <!--content开始-->
    
        <div class="content" v-for="paper in papers">
            <div class="con-l">
                <div class="con-1-img">
                    <img :src="paper.img">
                </div>
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
    
                        <h3>{{paper.title}}</h3>
                        <p class="txt">{{paper.text}}</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">{{paper.gzcount}}人</a>
                        <a class="icon">
    
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--content结束-->
        <!--tab开始-->
        <tab2>
            <div class="book">音乐</div>
        </tab2>
        <!--tab结束-->
        <!--content开始-->
    
        <div class="content" v-for="item in items">
            <div class="con-l">
                <img :src="item.img">
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
    
                        <h3>{{item.tit}}</h3>
                        <p class="txt">{{item.txt}}</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">{{item.gzcounts}}人</a>
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
        <div style="margin-top:50px;"></div>
    </div>
</template>
<script>
import header1 from '@/components/headerNormal'
import footer2 from '@/components/footer'
import tab2 from '@/components/grouptitle'
import links from '@/components/link'
import load from '@/components/loading'

import axios from "axios";
export default {
    components: {
        footer2,
        links,
        header1,
        tab2,
        load
    },
    data() {
        return {
            fadein: 0,
            fadeintext: '数据在加载中……',
            papers: [],
            items: [],
            numders: [],

        }
    },
    created() {
        this.fadein = 1;
        axios.post("api/group", { uid: "123" }).then((a) => {
            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.papers = a.data.data;
                // debugger;
                self.numders = a.data.group1;
            }, 1000)

        }).catch((e) => {

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

.content {
    display: flex;
    /*margin: 9%;*/
    padding: 16px;
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

