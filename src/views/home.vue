<template>
    <!--隔栏-->
    <div class="home">
        <!--header部分-->
        <header1 class="home-header">
            <input type="search" name="search" class="search" value="" placeholder="影视 图书 唱片 小组 舞台剧等">
        </header1>
        <home-panel :model="jrrd">
            <span slot="top">今日热点</span>
            <span slot="bottom-left">
                <div class="round"></div>
                <router-link to="/diary" class="mhn">
                    <p style="font-size:18px; color: #e3e3e3;margin:0;">梅花牛</p>
                </router-link>
            </span>
            <span slot="bottom-right" class="bgz">×</span>
        </home-panel>
        <div style="clear: both;"></div>
        <kind></kind>
        <!--banner部分-->
        <div class="conent">
            <ul class="table-view">
                <li class="table-view-cell " v-for="a in conent ">
                    <a href="javascript:;">
                        <div class="body">
                            <strong>{{a.title}}</strong>
                            <!--年轻人-->
                            <div class='ellipsis'>{{a.body}}</div>
                        </div>
                        <div class="img">
                            <img class="imgs" :src="a.imgsrc">
                        </div>
                        <div class="name">
                            <span>作者：{{a.author}}</span>
                            <a>X</a>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <home-panel :model="jrrd">
            <span slot="top">今日热点</span>
            <span slot="bottom-left">
                <div class="round"></div>
                <router-link to="/diary" class="mhn">
                    <p style="font-size:18px; color: #e3e3e3;margin:0;">梅花牛</p>
                </router-link>
            </span>
            <span slot="bottom-right" class="bgz">×</span>
        </home-panel>
        <!--footer-->
        <footer2></footer2>
    </div>
    <!--隔栏-->
</template>
<script>
import Footer2 from '@/components/footer';
import header1 from '@/components/headerNormal'
import homeframe from '@/components/homeframe';
import kind from '@/components/kind';
import homePanel from '@/components/homePanel';

import axios from "axios";
export default {
    name: "home",
    components: {
        Footer2,
        header1,
        kind,
        homePanel,

    },
    data() {
        return {
            conent: [],
            jrrd: {
                title: "我刚割了双眼皮",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            }

        }
    },
    created() {
        // 异步加载首页数据
        axios.post('api/home', { uid: '123' }).then((a) => {

            this.conent = a.data.conent;
        }).catch((error) => {
            // debugger;
        })
    },
}
</script>
<style scoped>
.home a {
    text-decoration: none;
    list-style: none;
}

.home-header {
    line-height: 53px;
    text-align: none;
    background-color: #3fbd52;
}

.h-round {
    float: left;
}

.search {
    background: #fff;
    height: 25px;
    line-height: 25px;
    width: 80%;
    font-size: 14px;
    margin-left: 10px;
    border: 1px solid #eee;
    text-indent: 2em;
    border-radius: 6px;
}

.conent {
    margin-top: 15px;
}

.table-view-cell {
    border-top: 1px solid #ea6f5a;
    padding: 10px;
}



.active {
    text-align: center;
}

.body {
    margin-top: 3PX;
    font-size: 18px;
    font-family: 700;
    line-height: 2.3;
    /*text-indent: 0.5em;*/
    color: black;
    width: 64%;
    float: left;
}

.ellipsis {
    font-size: 15px;
    color: #9B9B9B;
    line-height: 1.5em;
}

.img {
    float: right;
    margin-top: 10px;
    /*margin-right: 30px;*/
}

.imgs {
    width: 70px;
}

.name {
    clear: both;
    height: 40px;
    line-height: 40px;
}

.name span {
    margin-left: 10px;
    color: #e3e3e3;
}

.name a,
.bgz {
    display: inline;
    float: right;
    color: #e5e5e5;
}

.bottom-left {
    position: relative;
}

.bottom-left .round-img {
    width: 50px;
    height: 50px;
    margin-left: -10px;
}


.bottom-left .mhn {
    position: absolute;
    font-size: 16px;
    left: 52px;
    top: -51px;
    color: #000;
}
</style>



