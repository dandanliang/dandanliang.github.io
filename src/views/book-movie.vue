<template>
    <div style="margin-bottom:60px;">
        <!--标题-->
        <div class="tit">
            <span>电影热映</span>
            <a>更多 &#155</a>
        </div>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item" v-for="tab in tabs">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> {{tab.movie}}</strong>
                    <span class="star">{{starStr(tab)}}</span>
                    <i>4.5</i>
                </div>
            </div>
        </div>
    
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;clear:both">
        </div>
        <!--banner2部分-->
        <div class="banner2">
            <img src="../../static/bookbgmusic.png">
            <div class="man">
                <strong class="mantxt">我就是最拉风的最酷超级无敌boy</strong>
            </div>
        </div>
        <!---->
        <home-panel :model="jrrd">
            <span slot="top"></span>
            <span slot="bottom-left">
                <!--<div class="round"></div>-->
                <router-link to="/diary" class="mhn"> 梅花牛</router-link>
            </span>
            <span slot="bottom-right">×</span>
        </home-panel>
    
    </div>
</template>
<script>
import homePanel from '@/components/homePanel';

export default {
    components: {

        homePanel

    },
    data() {
        return {
            tabs: [{
                img: "../../static/44.jpg",
                movie: '变形金刚5',
                star: 4

            }, {
                img: "../../static/44.jpg",
                movie: '变形金刚5',
                star: 4

            }, {
                img: "../../static/44.jpg",
                movie: '变形金刚5',
                star: 4

            }, {
                img: "../../static/44.jpg",
                movie: '变形金刚5',
                star: 4

            }],
            jrrd: {
                title: "我刚割了双眼皮",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            }
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
        },
        setStyle(tab) {
            if (this.$route.path === tab.path) return { class: "active" };
            else return {};
        }
    }

}
</script>
<style>
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
    color: #ea6f5a;
    float: right;
}

.banner {
    /*width: 100%;*/
    padding: 10px;
    height: 190px;
    overflow-x: auto;
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
    text-align: center;
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

.man {
    margin-left: 20px;
    line-height: 40px;
}
</style>


