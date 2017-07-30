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
        <hotlikes :model="labe"></hotlikes>
        <hotlikes :model="labe"></hotlikes>
        <book-more>
            <span>最近期待看的国产电视剧</span>
        </book-more>
        <home-panel :model="dsj">
            <span slot="top"></span>
            <span slot="bottom-left">
                <router-link to="/">详情 </router-link>
            </span>
            <span slot="bottom-right">×</span>
        </home-panel>
    </div>
</template>
<script>
import homePanel from '@/components/homePanel';
import bookMore from '@/components/bookmore';
import hotlikes from '@/components/hotlikes';
import axios from "axios";
export default {
    components: {
        homePanel,
        bookMore,
        hotlikes

    },
    data() {
        return {
            renews: [],
            recents: [],
            ustvs: [],
            tgs: [],
            labe: {
                img: "../../static/8.jpg",
                title: '永远的托词',
                star: 5,
                text: "最近值得看的"
            },
            dsj: {
                title: "醉玲珑",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "../../static/01.jpg"
            }


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
        }).catch((error) => {

        })
    }

}
</script>
<style scoped>
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
</style>


