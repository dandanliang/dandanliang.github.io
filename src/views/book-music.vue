<template>
    <div class="bookmusic">
        <!--站位-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">华语新碟版</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="item in items">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{item.title}}</strong>
                    <p class="slot-txt">{{item.name}}</p>
    
                    <span class="star times">{{Getstar(item)}}</span>
                    <i>9</i>
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
                <div class="item" v-for="item in items">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{item.title}}</strong>
                    <p class="slot-txt">{{item.name}}</p>
    
                    <span class="star times">{{Getstar(item)}}</span>
                    <i>9</i>
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
                <div class="item" v-for="item in items">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:110px;">
                    </a>
                    <strong> {{item.title}}</strong>
                    <p class="slot-txt">{{item.name}}</p>
    
                    <span class="star times">{{Getstar(item)}}</span>
                    <i>9</i>
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
        <home-panel :model="music">
            <span slot="top" style="height:0;" class="titles"></span>
            <span slot="bottom-left">
                <div class="round"></div>
                <p class="music-name">作者：匿名</p>
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
                <div class="item" v-for="item in items">
                    <a href="#" class="aimg">
                        <img src="../../static/8.jpg" style="height:120px;">
                    </a>
                    <strong> {{item.title}}</strong>
                    <p class="slot-txt">{{item.name}}</p>
                    <span class="star times">{{Getstar(item)}}</span>
                    <i>9</i>
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
            <div class="ttt">
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
            </div>
        </div>
        <div class="Trend-bottom" style="border:none;">
            <div class="ttt">
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
                <span class="Trend">流行</span>
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

export default {
    components: {
        bookMore,
        homePanel

    }, data() {
        return {
            items: [{
                img: "../../static/8.jpg",
                title: "耐是异乡人",
                name: '李剑青',
                star: 5,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 4,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 6,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }, {
                img: "../../static/8.jpg",
                title: "异乡人",
                name: '李剑青',
                star: 3,

            }],
            music: {
                title: "莫西子诗：从走出家门那刻起，我就开始寻找归宿了",
                body: "莫西子诗前阵子去了趟广西，正好赶上当地一个小节日，就跟着朋友凑了凑热闹。白天听过领导讲话看完。。。",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            }
        }

    },
    methods: {
        Getstar(item) {
            let result = [];
            for (let i = 0; i < item.star; i++) {
                result.push("☆");
            }
            return result.join("");
        }
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



















































/*=======*/

.slot-txt {
    font-size: 15px;
    color: #999;
}















































/*====================*/

.banner {

    padding: 10px;
    /*height: 240px;*/
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

.banner .times {
    font-size: 15px;
    color: #999;
}

.banner img {
    height: 110px;
}
</style>


