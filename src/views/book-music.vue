<template>
    <div class="bookmusic">
        <!--站位-->
        <div class="Station">
        </div>
        <load v-if="fadein===1">{{fadeinmsg}}</load>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">华语新碟版</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="hot in hots">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{hot.title}}</strong>
                    <p class="slot-txt">{{hot.names}}</p>
    
                    <span class="star times">{{starStr(hot)}}</span>
                    <i>{{hot.star}}</i>
                </div>
            </div>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">欧美新碟版</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="us in usa">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{us.title}}</strong>
                    <p class="slot-txt">{{us.name}}</p>
    
                    <span class="star times">{{us.numders}}人想看</span>
                    <i></i>
                </div>
            </div>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">热门单曲版</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="hot2 in hots2">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{hot2.title}}</strong>
                    <p class="slot-txt">{{hot2.name}}</p>
    
                    <span class="star times blk">{{starStr(hot2)}}
                        <i>{{hot2.star}}</i>
                    </span>
    
                    <span class="looke">{{hot2.text}}人想看</span>
                </div>
            </div>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
    
        <book-more>
            <span slot="fl-h1" class="more-span-txt">音乐资讯</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
    
        <!--home-panel组件-->
        <home-panel :model="music" v-for="music in yinyue">
            <span slot="top" style="height:0;" class="titles"></span>
            <span slot="bottom-left">
                <div class="round"></div>
                <p class="music-name">作者：{{music.name}}</p>
            </span>
            <span slot="bottom-right" class="bgz"></span>
        </home-panel>
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">你可能感兴趣</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="live in lives">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:120px;">
                    </a>
                    <strong> {{live.title}}</strong>
                    <p class="slot-txt">{{live.names}}</p>
                    <span class="star times">{{starStr(live)}}</span>
                    <i>{{live.star}}</i>
                </div>
            </div>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">音乐类型</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--breed组件选项-->
    
        <div class="Trend-bottom">
            <div class="ttt" v-for="item in items">
                <span class="Trend">{{item.name}}</span>
    
            </div>
        </div>
        <div class="Trend-bottom">
            <div class="ttt" v-for="item2 in items2">
                <span class="Trend">{{item2.name}}</span>
    
            </div>
        </div>
    
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">发现好音乐
                <em>豆瓣友制作的音乐榜</em>
            </span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
    
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import homePanel from '@/components/homePanel';
import load from '@/components/loading';
import axios from 'axios';
export default {
    components: {
        bookMore,
        homePanel,
        load

    }, data() {
        return {
            fadein: 0,
            fadeinmsg: "数据在加载中……",
            hots: [],
            usa: [],
            hots2: [],
            music: [],
            yinyue: [],
            lives: [],
            items: [{
                name: "民谣",
                path: "/city"
            }, {
                name: "流行",
                path: "/city"
            }, {
                name: "安静",
                path: "/city"
            }, {
                name: "摇滚",
                path: "/city"
            }],
            items2: [{
                name: "竟电",
                path: "/city"
            }, {
                name: "流行2",
                path: "/city"
            }, {
                name: "安静2",
                path: "/city"
            }, {
                name: "摇滚3  ",
                path: "/city"
            }]

            // music: {
            //     title: "莫西子诗：从走出家门那刻起，我就开始寻找归宿了",
            //     body: "莫西子诗前阵子去了趟广西，正好赶上当地一个小节日，就跟着朋友凑了凑热闹。白天听过领导讲话看完。。。",
            //     img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            // }
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
        this.fadein = 1;
        axios.post("api/music", { uid: "66" }).then((a) => {
            // debugger;
            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.hots = a.data.china;
                self.usa = a.data.usa;
                self.hots2 = a.data.hots2;
                self.yinyue = a.data.yinyue;
                self.lives = a.data.lives;
            }, 1000);


        }).catch((error) => {

        })
    }

}
</script>
<style scoped>
/*bookmore组件样式*/

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


.music-name {
    font-size: 18px;
    color: #e3e3e3;
    margin: 0;
    margin-left: -8px;
}

.titles {
    font-size: 21px;
    color: #000;
}

.Trend-bottom {
    border-bottom: 1px solid #f0f1ec;
    padding: 16px;
    display: flex;
}



.Trend-bottom .Trend {
    display: inline-block;
    border: 1px solid #3fbd52;
    height: 26px;
    line-height: 26px;
    border-radius: 20px;
    color: #3fbd52;
    padding: 0 10px;
    margin-right: 10px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-bottom: 20px;
}











/*=======*/

.slot-txt {
    font-size: 15px;
    color: #999;
}












/*====================*/

.banner {
    padding: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
}

.banner .banner-item {
    width: 10000px;
    overflow: hidden;
}

.banner strong {
    font-size: 15px;
    margin-right: 14px;
}

.banner .item {
    width: 123px;
    /*text-align: center;*/
    float: left;
}

.banner .times,
time .look {
    font-size: 15px;
    color: #999;
}

.banner img {
    height: 110px;
}
</style>


