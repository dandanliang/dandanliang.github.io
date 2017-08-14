<template>
    <div>
        <!--站位-->
        <!-- <div style="height:20px;background-color: #eee;width:100%;">
            </div> -->
        <load v-if="fadein===1">{{fadeinmsg}}</load>
        <!--tlflex组件-->
        <tl-flex>
            <div slot="fl">
                <span>当前城市：</span>
                <a>上海</a>
                <i class="solt-i">&gt;</i>
            </div>
            <div slot="fr" class="">
                <span>类型 时间 地点</span>
                <i class="solt-i">&gt;</i>
            </div>
        </tl-flex>
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">热门活动</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="hot in hots">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{hot.title}}</strong>
    
                    <span class="star times">{{hot.date}}</span>
                    <i class="sp">官方售票</i>
                </div>
            </div>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">音乐类</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="music in yy">
                    <a href="#" class="aimg">
                        <img :src="music.img">
                    </a>
                    <strong> {{music.title}}</strong>
    
                    <span class="star times">{{music.date}}</span>
                    <i class="sp">官方售票</i>
                </div>
            </div>
        </div>
        <div class="Station">
        </div>
        <!--book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt">运动类</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner" style="bottom:100px;">
            <div class="banner-item">
                <div class="item" v-for="motion in motions">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{motion.title}}</strong>
    
                    <span class="star times">{{motion.times}}</span>
                    <i class="sp">官方售票</i>
                </div>
            </div>
        </div>
        <!--book-more组件-->
        <!--站位-->
        <div class="Station">
        </div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt">编辑推荐</span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
        <!--box开始符-->
        <div class="box">
            <div class="boxs">
                <div class="box1" v-for="option in options">
                    <h3>{{option.title}}</h3>
                    <p class="txt">{{option.text}}</p>
                </div>
            </div>
        </div>
        <!--box结束符-->
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
        <div class="banner" style="bottom:100px;">
            <div class="banner-item">
                <div class="item" v-for="exhibit in exhibits">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{exhibit.title}}</strong>
    
                    <span class="star times">{{exhibit.times}}</span>
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
            <span slot="fl-h1" class="more-span-txt">旅行类</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <!--banner组件s-->
        <div class="banner" style="bottom:100px;">
            <div class="banner-item">
                <div class="item" v-for="tour in tours">
                    <a href="#" class="aimg">
                        <img :src="tour.img">
                    </a>
                    <strong> {{tour.title}}</strong>
    
                    <span class="star times">{{tour.times}}</span>
                    <i></i>
                </div>
            </div>
        </div>
        <!--book-more组件-->
    
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import tlFlex from '@/components/tlflex';
import homePanel from '@/components/homePanel';
import scrolls from '@/components/scrollbanner';
import load from '@/components/loading';
import axios from 'axios';

export default {
    components: {
        bookMore,
        tlFlex,
        scrolls,
        load

    },
    data() {
        return {
            fadein: 0,
            fadeinmsg: "数据在加载中……",
            hots: [],
            yy: [],
            exhibits: [],
            options: [],
            tours: [],
            motions: []
        }

    },
    computed: {

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
        }
    },
    created() {
        this.fadein = 1;
        axios.post("api/city", { uid: "66" }).then((a) => {
            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.hots = a.data.hots;
                self.yy = a.data.mp3;
                self.options = a.data.yuanjiao;
                self.exhibits = a.data.shows;
                self.tours = a.data.tours;
                self.motions = a.data.motions;
            }, 1000);
            // debugger;



        }).catch((error) => {

        })
    }
}

</script>
<style scoped>
.box {
    padding: 16px;
    overflow-y: hidden;
    overflow-x: scroll;
}

.boxs {
    width: 760px;
    overflow: hidden;
}

.boxs div {
    float: left;
    width: 180px;
    height: 180px;
    margin-right: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: blue;
}

.boxs div h3 {

    color: #fff;
    margin-top: 60px;
}

.boxs div .txt {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #999;
}

.item strong {
    display: block;
}




























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


.banner {
    padding: 10px;
    height: 240px;
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
    float: left;
}

.banner .times {
    font-size: 15px;
    color: #999;
}

.banner img {
    height: 140px;
}

.sp {
    width: 60px;
    display: block;
    border: 1px solid red;
    color: red;
    font-size: 12px;
    font-style: normal;
    margin-top: 5px;
    text-align: center;
    height: 20px;
}
</style>


