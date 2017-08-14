<template>
    <div>
        <load v-if="fadein===1">{{fadeinmsg}}</load>
        <!--占位符-->
        <div class="Station">
        </div>
    
        <!--标题-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">电影热映</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="tabmovie in tabmovies">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong class="strong-block"> {{tabmovie.movie}}</strong>
                    <span class="star">{{starStr(tabmovie)}}</span>
                    <i> {{tabmovie.star}}</i>
                </div>
            </div>
        </div>
    
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">展览类</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="zhangsl in tabzhangs">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{zhangsl.title}}</strong>
                    <p class="star text">{{zhangsl.numders}}人想看</p>
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
            <span slot="fl-h1" class="more-span-txt">精选推荐</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--使用choicelis组件-->
    
        <!--使用choicelis组件-->
    
        <!--banner2部分-->
        <div class="banner2" v-for="bag in bags">
            <img src="../../static/bookbgmusic.png">
            <div class="man">
                <strong class="mantxt">{{bag.text}}</strong>
            </div>
        </div>
        <!---->
        <!--占位符-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">今日推荐影人</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="todaymovie in todays">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{todaymovie.name}}</strong>
                    <p class="star text">{{todaymovie.text}}</p>
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
            <span slot="fl-h1" class="more-span-txt">你可能会感兴趣的</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
    
        <!--hotlikes组件-->
        <div class="row">
            <hotlikes :model="item1" class="row-fl" v-for="item1 in items1">
                <!--<p>{{starStr(labe)}} 3</p>-->
            </hotlikes>
        </div>
        <!--hotlikes组件-->
        <div class="row">
            <hotlikes :model="item2" class="row-fl" v-for="item2 in items2">
                <!--<p>{{starStr(labe)}} 3</p>-->
            </hotlikes>
        </div>
        <!--标题-->
        <book-more>
            <!--<span slot="fl-h1" class="more-span-txt">电影热映</span>-->
            <span slot="more-right">
                <a class="more-right-a centers" style="margin-right: 43%;right: 0;">查看更多&gt;</a>
            </span>
        </book-more>
        <!--占位符-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">最受欢迎影评</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <home-panel :model="cinecism" v-for="cinecism in cinecismlikes">
            <span slot="top"></span>
            <span slot="bottom-left">
                <router-link to="/diary" class="cinecism"> {{cinecism.name}}</router-link>
                &nbsp;
                <span class="cinecism">评论</span>&nbsp;
                <span class="cinecism">
                    《{{cinecism.yingming}}》</span>
            </span>
            <!--<span slot="bottom-right">×</span>-->
        </home-panel>
        <!--banner-->
        <div style="margin-top:50px;"></div>
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import homePanel from '@/components/homePanel';
// import choicelis from '@/components/choicelis';
import hotlikes from '@/components/hotlikes';
import load from '@/components/loading';
import axios from 'axios';
export default {
    components: {
        homePanel,
        bookMore,
        // choicelis,
        hotlikes,
        load

    },
    data() {
        return {
            items1: [],
            items2: [],
            tabmovies: [],
            tabzhangs: [],
            tabs: [],
            bags: [],
            todays: [],
            cinecismlikes: [],
            fadein: 0,
            fadeinmsg: "数据在加载中……",
            labe: {
                img: "../../static/8.jpg",
                title: '永远的托词',
                star: 5,
                text: "最近值得看的"
            }
        }
    },
    computed: {
        aa() {
            return this.tabs.length;
        }
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
        this.fadein = 1;
        axios.post("api/bookmovie", { uid: "666" }).then((a) => {
            // debugger;
            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.tabmovies = a.data.data;
                self.tabzhangs = a.data.data1;
                self.bags = a.data.bag;
                self.todays = a.data.todays;
                self.items1 = a.data.youlike01;
                self.items2 = a.data.youlike02;
                self.cinecismlikes = a.data.pingying;
            }, 1000);


        }).catch((error) => {

        })
    }

}
</script>
<style>
/*bookmore组件样式开始*/

.row {
    padding: 16px;
    display: flex;
}

.row .row-fl {
    float: left;
}

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


















/*影评样式*/

.cinecism {
    font-size: 12px;
    color: #9B9B9B;
    line-height: 1.5em;
}

.strong-block {
    display: block;
}

















/*----bananer组件----*/

.banner .banner-item {
    width: 10000px;
}

.banner .item {
    /*background: red;*/
    width: 110px;
    /*text-align: center;*/
    float: left;
}

.banner img {
    height: 134px;
}

.text {
    font-size: 12px;
    color: #999;
}


.banner2 {
    height: 190px;
}

.banner2 img {
    width: 100%;
}

.man {
    margin-left: 20px;
    line-height: 40px;
}


.banner i {
    font-style: normal
}
</style>


