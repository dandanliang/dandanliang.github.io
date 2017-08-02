<template>
    <div>
        <!--占位符-->
        <div class="Station">
        </div>
        <!--占位符结束-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 今日更新</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <div class="tv-con">
            <div class="tv-cons">
                <div class="tv-con-item" v-for="renew in renews">
                    <div class="tv-fl">
                        <div class="tv-img">
                            <img :src="renew.img">
                        </div>
                    </div>
                    <div class="tv-fr">
                        <h2>{{renew.title}}</h2>
                        <span class="star">{{starStr(renew)}}
                            <em>{{renew.star}}</em>
                        </span>
                        <p>{{renew.text}}
                            <br>
                            <span>{{renew.numders}}人想看</span>
                        </p>
    
                    </div>
                </div>
            </div>
        </div>
        <!--占位符-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 最近值得看的国产剧</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="recent in recents">
                    <a href="#" class="aimg">
                        <img :src="recent.img">
                    </a>
                    <strong style="display:block"> {{recent.title}}</strong>
                    <span class="star">{{starStr(recent)}}</span>
                    <i> {{recent.star}}</i>
                </div>
            </div>
        </div>
        <!--占位符-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 最近值得看的美剧</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="ustv in ustvs">
                    <a href="#" class="aimg">
                        <img :src="ustv.img">
                    </a>
                    <strong style="display:block"> {{ustv.title}}</strong>
                    <span class="star">{{starStr(ustv)}}</span>
                    <i> {{ustv.star}}</i>
                </div>
            </div>
        </div>
        <!--占位符-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 最近值得看的泰剧</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="tg in tgs">
                    <a href="#" class="aimg">
                        <img :src="tg.img">
                    </a>
                    <strong style="display:block"> {{tg.title}}</strong>
                    <span class="star">{{starStr(tg)}}</span>
                    <i> {{tg.star}}</i>
                </div>
            </div>
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 你可能感兴趣的</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--组件-->
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
        <book-more>
            <span>最近期待看的国产电视剧</span>
        </book-more>
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 选择电视剧类型</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <lian-jie :model="liuxing" v-for="liuxing in mold">
            <span slot="slot-name1" class="colors">{{liuxing.name}}</span>
            <span slot="slot-name2" class="colors">{{liuxing.name}}</span>
            <span slot="slot-name3" class="colors">{{liuxing.name}}</span>
            <span slot="slot-name4" class="colors">{{liuxing.name}}</span>
        </lian-jie>
    
        <div style="margin-top:60px;"></div>
    </div>
</template>
<script>
import homePanel from '@/components/homePanel';
import bookMore from '@/components/bookmore';
import hotlikes from '@/components/hotlikes';
import lianJie from '@/components/molds';
import axios from "axios";
export default {
    components: {
        homePanel,
        bookMore,
        hotlikes,
        lianJie

    },
    data() {
        return {
            renews: [],
            recents: [],
            ustvs: [],
            tgs: [],
            items1: [],
            items2: [],
            panel: [],
            labe: {
                img: "../../static/8.jpg",
                title: '永远的托词',
                star: 5,
                text: "最近值得看的"
            },
            mold: [{
                name: "喜剧",
                path: "/city"
            }, {
                name: "美剧",
                path: "/city"
            }, {
                name: "歌剧",
                path: "/city"
            }, {
                name: "青春剧",
                path: "/city"
            }]


        }
    },

    methods: {
        starStr(item) {
            let result = [];
            for (let i = 0; i < item.star; i++) {
                result.push("☆");
            }
            return result.join("");
        }
    },
    created() {
        axios.post("api/tv", { uid: "123" }).then((n) => {
            this.renews = n.data.renews;
            this.recents = n.data.recents;
            this.ustvs = n.data.ustvs;
            this.tgs = n.data.tgs;
            this.items1 = n.data.items1;
            this.items2 = n.data.items2;
            this.panel = n.data.panels;
        }).catch((error) => {

        })
    }

}
</script>
<style scoped>
.colors {
    display: inline-block;
    border: 1px solid rgb(63, 189, 82);
    height: 26px;
    line-height: 26px;
    border-radius: 20px;
    color: rgb(63, 189, 82);
    padding: 0 20px;
    margin-right: 10px;
    flex: 1;
    margin-bottom: 20px;
}

.more-span-txt {
    height: 18px;
    width: 99%;
    font-size: 18px;
}

.more-right-a {
    position: absolute;
    right: 0;
    margin-right: 10px;
    font-size: 14px;
    color: rgb(63, 189, 82);
}

.banner {
    padding: 10px;
    height: 190px;
    overflow-x: auto;
}

.banner .banner-item {
    width: 10000px;
}

.banner .item {
    width: 110px;
    float: left;
}

.tv-con {
    height: 200px;
    padding: 16px;
    clear: both;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 10px;
}

.tv-con .tv-cons {
    position: relative;
    width: 10000px;
    overflow: hidden;
}

.tv-con-item {
    border: 1px solid #999;
    display: flex;
    height: 200px;
    width: 362px;
    float: left;
    margin-right: 10px;
}

.tv-con-item .tv-fl {
    flex: 1;
}

.tv-con-item .tv-fl .tv-img {
    /*background: red;*/
    padding: 10px 0 0 10px;
}

.tv-fl .tv-img img {
    height: 177px;
    width: 121px;
}

.tv-con-item .tv-fr {
    flex: 2;
    padding: 10px;
}

.tv-con-item .tv-fr .star {
    line-height: 30px;
}

.tv-con-item .tv-fr p {
    color: #a7a7a7;
    line-height: 22px;
}
































/*============more-span==========*/

.more-span {
    height: 18px;
    width: 99%;
    font-size: 18px;
}


.row {
    padding: 16px;
    display: flex;
}

.row .row-fl {
    float: left;
}
</style>


