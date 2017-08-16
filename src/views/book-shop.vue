<template>
    <div>
        <load v-if="fadein===1">{{fadeinmsg}}</load>
        <div class="shp-banner" id="shp-banner">
            <ul class="v-ul-banner" tag="ul" name="list">
                <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" class="ul-li">
                    <a :href="list.clickUrl">
                        <img :src="list.img" :alt="list.desc" width=' 376;' height="200;">
                    </a>
                </li>
            </ul>
            <div class="nav">
                <div class="v_tiems">
                    <a v-for="(item,index) in slideList.length" target="_blank" :class="{'V_active':index===currentIndex}" @mouseover="change(index)"></a>
                </div>
            </div>
        </div>
    
        <!--站位-->
        <div class="Station">
        </div>
    
        <!--casrt开始符-->
        <div class="Cart">
            <div class="fl">
                <em class="em-cart1"></em>
                <span class="cart-txt">购物车</span>
            </div>
            <span class="lines"></span>
            <div class="fr">
                <span class="cart-txt">我的集市</span>
            </div>
        </div>
        <!--cart结束符-->
        <!--站位-->
        <div class="Station">
        </div>
        <!--使用book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 新品首发</span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
    
        <!--使用leftbg组件-->
        <left-bg :model="shops" v-for="shops in news">
            <span slot="top" style="height:0;"></span>
            <span slot="bottom-left">
                <span class="cart-money">&yen;{{shops.money}}</span>
                <del class="cart-dels">&yen;149</del>
            </span>
            <span slot="bottom-right">×</span>
    
        </left-bg>
        <!--站位-->
        <div class="Station">
        </div>
        <!--使用book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 推荐话题</span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
        <!--使用shopbanner';-->
        <shop-banner :model="douban" v-for="douban in db">
            <div slot="bg-img">
                <img :src="douban.img" style="width: 100%;" />
            </div>
            <h2 slot="slot-h1" class="slot-title">#{{douban.title}}#</h2>
            <p slot="slot-txt" class="slot-txt">{{douban.text}}</p>
        </shop-banner>
        <shop-banner :model="shops">
            <div slot="bg-img">
                <img src="../../static/bookbgmusic.png" style="width: 100%;" />
            </div>
            <h2 slot="slot-h1" class="slot-title">#我的豆瓣收藏夹有什么#</h2>
            <p slot="slot-txt" class="slot-txt">晒出你的豆瓣收藏夹，让我们看看你走过的世界吧。</p>
        </shop-banner>
        <div style="margin-top:50px;"></div>
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import leftBg from '@/components/leftbg';
import shopBanner from '@/components/shopbanner';
import load from '@/components/loading';
import axios from 'axios';

export default {
    components: {
        bookMore,
        leftBg,
        shopBanner,
        load
    },
    data() {
        return {
            fadein: 0,
            fadeinmsg: "正在加载数据中……",
            news: [],
            db: [],
            // list: [],

            shop: {
                title: "豆瓣帆布包+早餐系列",
                body: "简约版型+多层版型+食欲满满，早餐图案=你不可或缺的搭配好物",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            },
            shops: [{
                title: "",
                txt: "",
                imgs: ""
            }],
            slideList: [
                {
                    "clickUrl": "#",
                    "desc": "1",
                    "img": "http://img001.mllres.com/images/201708/1502405276363640915.jpg",
                },
                {
                    "clickUrl": "#",
                    "desc": "2",
                    "img": "http://img004.mllres.com/images/201607/1467327423773766008.jpg",
                },
                {
                    "clickUrl": "#",
                    "desc": "3",
                    "img": "http://image.meilele.com/images/201609/1474155526796089067.jpg"
                }
            ],
            currentIndex: 0,
            timer: "",
        }
    }, methods: {
        go(currentIndex) {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop(currentIndex) {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay(currentIndex) {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },

    created() {

        // debugger;

        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay();
            }, 3000)
        })

        // go() {
        //     this.timer = setInterval(() => {
        //         this.autoPlay();
        //     }, 3000)
        // },
        // stop() {
        //     clearInterval(this.timer);
        //     this.timer = null;
        // },
        // change(index) {
        //     this.currentIndex = index;
        // },
        // autoPlay() {
        //     this.currentIndex++;
        //     if (this.currentIndex > this.slideList.length - 1) {
        //         this.currentIndex = 0;
        //     }

        this.fadein = 1;
        axios.post("api/market", { uid: "66" }).then((a) => {

            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.news = a.data.news;
                self.db = a.data.db;
                self.lis = a.data.banners;
            }, 1000);




        }).catch((error) => {

        })
    }

}
</script>

<style scoped>
.shp-banner {
    /* position: relative; */
    height: 200px;
    /* background-color: aqua; */
    /* overflow-x: scroll;
    overflow-y: hidden; */
}

.v-ul-banner {
    position: relative;
    /* overflow: hidden; */
    width: 1504px;
}

.v-ul-banner li {
    position: absolute;
}

.shp-banner .nav {
    position: absolute;
    /* width: 100%; */
    z-index: 21;
    bottom: 8px;
    text-align: center;
}



























































/* .ul-li {
    float: left;
    width: 376px;
    height: 200px;
} */

.v_tiems {
    margin: 0 auto;
    width: 60px;
}



.v_tiems a {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: .8;
    background: #fff;
    display: inline-block;
    margin: 0 4px;
    opacity: .6;
}

.V_active {
    background-color: #333;
}

.Cart {
    height: 55px;
    /*padding: 16px;*/
    display: flex;
}

.Cart .fl {
    flex: 1;
    /*background: red;*/
    height: 55px;
}

.Cart .fl span::before {
    content: "cs";
    /*overflow: hidden;
    */
    visibility: hidden;
    position: relative;
    width: 20px;
    height: 20px;
    background: red;
}

.Cart .fr {
    flex: 1;
    /*background: palegoldenrod;*/
    height: 55px;
}

.Cart .cart-txt {
    margin-left: 95px;
    line-height: 55px;
}


.Cart .lines {
    width: 1px;
    height: 55px;
    background-color: #DDD;
    padding: 0;
    margin-top: 2px;
}

.cart-news {
    color: #000;
    font: 700 20px/40px "微软雅黑";
}




.cart-money {
    font-size: 20px;
    color: red;
    margin-left: -10px;
    /* font-family: monospace; */
    margin-right: 10px;
}

.cart-dels {
    font-size: 16px;
}




























































































































































































/*------------------------------------*/

.slot-title {

    font-size: 20px;
}

.slot-txt {
    color: #b9b9b9;
    font-size: 14px;
    line-height: 30px;
}
</style>

