<template>
    <div>
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 读书</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
        <div class="tv-con">
            <div class="tv-cons">
                <div class="tv-con-item" v-for="tab in tabs">
                    <div class="tv-fl">
                        <div class="tv-img">
                            <img src="../../static/8.jpg">
                        </div>
                    </div>
                    <div class="tv-fr">
                        <h2>{{tab.title}}</h2>
                        <span class="star">{{Getstar(tab)}}6.6</span>
                        <p>{{tab.text}}</p>
    
                    </div>
                </div>
    
            </div>
    
        </div>
        <div style="height:20px;background-color: #eee;width:100%;">
        </div>
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
        </book-more>
    
    </div>
</template>
<script>
import homePanel from '@/components/homePanel';
import bookMore from '@/components/bookmore';

export default {
    components: {
        homePanel,
        bookMore,

    },
    data() {
        return {
            tabs: [{
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生1',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }, {
                img: "../../static/8.jpg",
                title: '我的前半生',
                star: 5,
                text: "更新到36集/每天更新/优酷更新,爱奇艺，腾讯视频123456人想看"

            }],
            dsj: {
                title: "醉玲珑",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "../../static/01.jpg"
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


