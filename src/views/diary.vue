<template>
    <div>
        <!--headers部分  -->
        <div class="w headers">
            <div class="fl ">
                <router-link to="/home" class="lt">&lt;</router-link>
                <span class="text">日记</span>
            </div>
            <div class="fr" v-for="btn in adds">
                <span>{{btn.name}}</span>
            </div>
        </div>
        <!--title部分  -->
        <div class="w title" v-for="tit in biaoti">
            <h2 class="titles">{{tit.headers}}</h2>
        </div>
        <div class="w riji" v-for="ming in names">
            <p class="text">{{ming.names}}
                <span class="times">的日记</span>
            </p>
            <p class="times">{{ming.times}}</p>
        </div>
        <!--摘要部分  -->
        <div class="w">
            <div v-for="summary in summarys">
                <div class="summary">
    
                    <p class="summary1">{{summary.text}}</p>
    
                </div>
                <div class="summary2">
                    <p class="font7">{{summary.text}}</p>
                </div>
            </div>
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt riji-more">
                作者
                <i class="shuxian"></i> 美味帮帮忙
            </span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
        <!--主体内容部分  -->
        <div class="w bodys" v-for="bodys in nrong">
            <p class="text">{{bodys.text}}</p>
            <p class="text">{{bodys.text2}}</p>
            <p class="text">{{bodys.text3}}</p>
    
            <img :src="bodys.img" class="mg2">
            <p class="text">{{bodys.text}}</p>
            <p class="text">{{bodys.text}}</p>
            <p class="text">{{bodys.text}}</p>
    
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class=" riji-more-china">
                <i class="riji-more-china-i">|</i>&nbsp;&nbsp; “麻将”在中国
            </span>
            <span slot="more-right ">
                <a class="more-right-a "></a>
            </span>
        </book-more>
        <div class="w bodys" v-for="bodys in nrong">
            <p class="text">{{bodys.text}}</p>
            <p class="text">{{bodys.text2}}</p>
            <p class="text">{{bodys.text4}}</p>
            <div class="mg2">
                <img src="../../static/8.jpg">
                <p class="tw5">{{bodys.text5}}</p>
            </div>
            <p class="text">{{bodys.text2}}</p>
            <p class="text">{{bodys.text4}}</p>
            <p class="text">{{bodys.text}}</p>
    
        </div>
    
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import axios from 'axios';
export default {
    components: {
        bookMore,
    },
    data() {

        return {
            biaoti: [],
            names: [],
            adds: [{
                name: '喜欢1',
                path: '/home'
            }, {
                name: '喜欢2',
                path: '/home'
            }, {
                name: '喜欢2',
                path: '/home'
            }],
            summarys: [

            ], nrong: []
        }
    },
    methods: {
        tabClick(tab) {
            // this.$router.push({path:tab.path});
            this.$router.push({ path: tab.path });
        }
    },
    created() {
        axios.post("api/diary", { uid: "2016" }).then((a) => {
            // debugger;
            this.nrong = a.data.texts;
            this.biaoti = a.data.data;


        }).catch((error) => {

        })
    }
}
</script>
<style scoped>
.headers {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e3e3e3;
    padding: 0 16px;
    clear: both;
}

.fl {
    float: left;
}

.fl .lt {
    font-size: 20px;
    color: rgb(63, 189, 82);
}

.fl .text {
    margin-left: 20px;
}

.fr {
    float: right;
}

.fr span {
    margin-right: 20px;
    color: rgb(63, 189, 82);
}


















/*title部分样式  */

.w {
    padding: 0 16px;
}

.title {
    height: 30px;
}

.title .titles {
    line-height: 30px;
    /* background: red; */
}

.title h1 {
    width: 100%;
}




















/*日记部分样式  */

.riji {
    padding: 0 16px;
    line-height: 20px;
}

.riji .text {
    color: #333;
}

.riji .times,
.riji .text,
.tw5 {
    font-size: 14px;
}

.riji .times,
.riji-more {
    color: #969696;
}

.tw5 {
    text-align: center;
}

.shuxian {
    display: inline-block;
    font-style: normal;
    background: #969696;
    width: 1px;
    height: 16px;
    line-height: 16px;
    margin-top: 0px;
}

.riji-more-china,
.riji-more-china .shuxian {
    font: 700 24px/30px "微软雅黑";
}




















/*摘要  */

.summary {
    background: #e3e3e3;
}

.summary p {
    font-size: 16px;
    color: #9B9B9B;
    margin: 16px;
    padding: 16px 0;
}

.font7 {
    font: 700 16px/26px "微软雅黑";
}

.bodys .text {
    font: 400 16px/26px "\5FAE\8F6F\96C5\9ED1";
    /* margin-bottom: 20px; */
}

.bodys .text,
.mg2 {
    margin-bottom: 20px;
}
</style>


