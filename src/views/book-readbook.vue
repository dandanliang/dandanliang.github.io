<template>
    <div>
        <!--占位符-->
        <div class="Station">
        </div>
        <!--标题-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">新书快递</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
    
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="newbook in newbooks">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong style="display:block;"> {{newbook.title}}</strong>
                    <span class="star">{{starStr(newbook)}}</span>
                    <i>{{newbook.star}}</i>
                </div>
            </div>
        </div>
        <div class="Station">
        </div>
        <!--banner2部分-->
        <div class="banner2" v-for="zm in zhaomu">
            <img src="../../static/bookbgmusic.png">
            <div class="footer-text">
                <strong>{{zm.text}}</strong>
            </div>
        </div>
        <!---->
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">最受关注的虚构类图书</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="xgbook in xgbooks">
                    <a href="#" class="aimg">
                        <img :src="xgbook.img">
                    </a>
                    <strong> {{xgbook.title}}</strong>
                    <p class="star text">{{xgbook.numders}}人想看</p>
                    <i></i>
                </div>
            </div>
        </div>
        <!--book-more组件-->
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">最受关注的非虚构类图书</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="fxgbook in fxgbooks">
                    <a href="#" class="aimg">
                        <img :src="fxgbook.img">
                    </a>
                    <strong style="display:block;"> {{fxgbook.title}}</strong>
                    <span class="star text">{{starStr(fxgbook)}}</span>
                    <i>{{fxgbook.star}}</i>
                </div>
            </div>
        </div>
        <!--使用choicelis组件-->
        <!--<choicelis :model="Hottj"></choicelis>-->
        <!--使用choicelis组件-->
        <!--占位符-->
    
        <!--占位符-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">豆瓣书店</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="sd in sudian">
                    <a href="#" class="aimg">
                        <img :src="sd.img">
                    </a>
                    <strong> {{sd.title}}</strong>
                    <p class="star text">{{sd.money}}元</p>
                    <i></i>
                </div>
            </div>
        </div>
        <!--book-more组件-->
        <!--占位符-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">图书资讯</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
    
        <home-panel :model="tszx" v-for="tszx in tszixun ">
            <span slot="top"></span>
            <span slot="bottom-left">
                <router-link to="/diary" class="names">作者：{{tszx.names}}</router-link>
            </span>
            <!--<span slot="bottom-right">×</span>-->
        </home-panel>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">限时特价电子书</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="xiantime in xians">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong style="dispaly:block;"> {{xiantime.title}}</strong>
                    <p>
                        <s class="wxjg">{{xiantime.wx}}</s>
                        <span class="star xsjg">{{xiantime.money}}元</span>
    
                    </p>
                </div>
            </div>
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">畅销图书榜</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <div class="banner ">
            <div class="banner-item">
                <div class="item" v-for="selling in sellings">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong style="display:block;"> {{selling.title}}</strong>
                    <span class="star">{{starStr(selling)}}</span>
                    <i>{{selling.star}}</i>
                </div>
            </div>
        </div>
        <div style="margin-top:50px;"></div>
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import homePanel from '@/components/homePanel';
import choicelis from '@/components/choicelis';
// import hotlikes from '@/components/hotlikes';
import axios from 'axios';
export default {
    components: {
        homePanel,
        bookMore,
        choicelis,
        // hotlikes
    },
    data() {
        return {
            newbooks: [],
            zhaomu: [],
            xgbooks: [],
            fxgbooks: [],
            sudian: [],
            tszixun: [],
            xians: [],
            sellings: [],

            // Hottj: {
            //     title: "八月展览演出",
            //     text: '八月最热门的活动都有在这',
            // },

            labe: {
                img: "../../static/8.jpg",
                title: '永远的托词',
                star: 5,
                text: "最近值得看的"
            }
        }
    },
    computed: {
        // aa() {
        //     return this.tabs.length;
        // }
    },
    methods: {
        starStr(item) {
            let result = [];
            for (let i = 0; i < item.star; i++) {
                result.push("☆");
            }
            return result.join("");
        },
        tabClick(tab) {
            // this.$router.push({path:tab.path});
            this.$router.push({ path: tab.path });
        },
        setStyle(tab) {
            if (this.$route.path === tab.path) return { class: "active" };
            else return {};
        }
    },
    created() {
        axios.post("api/read", { uid: "555" }).then((n) => {
            this.newbooks = n.data.newbooks;
            this.zhaomu = n.data.zhaomu;
            this.xgbooks = n.data.xgbooks;
            this.fxgbooks = n.data.fxgbooks;
            this.sudian = n.data.sudian;
            // debugger;
            this.tszixun = n.data.tszixun;
            this.xians = n.data.xians;
            this.sellings = n.data.sellings;
        }).catch((error) => {

        })
    }

}
</script>
<style>
/*bookmore组件样式开始*/

.tit {
    height: 18px;
    line-height: 18px;
    padding: 16px;
}

.tit span {
    height: 18px;
    width: 99%;
    font-size: 18px;
}

.tit a {
    display: block;
    font-size: 14px;
    color: rgb(63, 189, 82);
    float: right;
}

.banner {
    padding: 10px;
    height: 190px;
    overflow-x: auto;
}





.names {
    font-size: 12px;
    color: #9B9B9B;
    line-height: 1.5em;
}



.wxjg,
.xsjg {
    font-size: 15px;
}

.wxjg {

    color: #9B9B9B;
}

.xsjg {
    color: red;
}








































/*----bananer组件----*/

.text {
    font-size: 12px;
    color: #999;
}







































































/*::-webkit-scrollbar {
    width: 0px
}*/

.banner .banner-item {
    width: 10000px;
}

.banner .item {
    /*background: red;*/
    width: 110px;
    float: left;
}

.banner img {
    height: 134px;
}

.banner2 {
    height: 190px;
}

.banner2 img {
    width: 100%;
}

.footer-text {
    padding-top: 10px;
    margin-left: 20px;
}



































































/*.footer-text .text {
    line-height: 24px;
}*/
</style>


