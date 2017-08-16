<template>
    <!--隔栏-->
    <div class="home">
        <!--header部分-->
        <header1 class="home-header">
    
            <div class="div-search">
                <input type="search" name="search" class="search" value="" placeholder="影视 图书 唱片 小组 舞台剧等">
                <img src="static/search.png">
            </div>
    
        </header1>
        <load v-if="fadein==1">{{fadeinmsg}}</load>
        <router-link to="/diary">
            <home-panel :model="jrrd">
                <span slot="top">今日热点</span>
                <span slot="bottom-left">
                    <div class="round"></div>
                    <p class="names">梅花牛</p>
                </span>
                <span slot="bottom-right" class="bgz">×</span>
            </home-panel>
        </router-link>
    
        <div style="clear: both;"></div>
        <!--站位-->
        <div class="Station">
        </div>
        <!--kind组件.豆瓣时间-->
        <kind>
            <!-- <img :src="tab.img">
                                                                <div>{{tab.text}}</div> -->
        </kind>
        <!--站位-->
        <div class="Station">
        </div>
        <!--banner部分-->
        <div class="conent">
            <router-link to="/diary">
                <ul class="table-view">
                    <li class="table-view-cell " v-for="a in conent ">
                        <a href="javascript:;">
                            <div class="body">
                                <p>豆瓣时间</p>
                                <strong>{{a.title}}</strong>
                                <!--年轻人-->
                                <div class='ellipsis'>{{a.body}}</div>
                            </div>
                            <div class="img">
                                <img class="imgs" :src="a.imgsrc">
                            </div>
                            <div class="name">
                                <span>作者：{{a.author}}</span>
                                <a></a>
                            </div>
                        </a>
                    </li>
                </ul>
            </router-link>
        </div>
    
        <home-panel :model="jrrd">
            <span slot="top">今日热点</span>
            <span slot="bottom-left">
                <div class="round"></div>
                <p class="names">梅花牛</p>
            </span>
            <span slot="bottom-right" class="bgz">×</span>
        </home-panel>
        <!--footer-->
        <footer2></footer2>
        <div style="margin-top:50px;"></div>
    </div>
    <!--隔栏-->
</template>
<script>
import Footer2 from '@/components/footer';
import header1 from '@/components/headerNormal'
import homeframe from '@/components/homeframe';
import kind from '@/components/kind';
import homePanel from '@/components/homePanel';
import load from '@/components/loading'

import axios from "axios";
export default {
    name: "home",
    components: {
        Footer2,
        header1,
        kind,
        homePanel,
        load

    },
    data() {
        return {
            fadein: 0,
            fadeinmsg: '数据在加载中……',
            conent: [],
            // tabs: [{
            //     text: '豆瓣時間',
            //     img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
            //     path: '/home'
            // }, {
            //     text: '豆瓣時間',
            //     img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
            //     path: '/home'
            // }, {
            //     text: '豆瓣時間',
            //     img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
            //     path: '/home'
            // }, {
            //     text: '豆瓣時間',
            //     img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
            //     path: '/home'
            // }],
            jrrd: {
                title: "先给自己定一个小目标，挣它一个亿",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            }

        }
    },
    created() {
        // 异步加载首页数据
        this.fadein = 1;
        axios.post('api/home', { uid: '123' }).then((a) => {
            var self = this;
            setTimeout(function () {
                self.fadein = 0;
                self.conent = a.data.conent;
            }, 1000);


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


/* .div-search {
    width: 80%;
    height: 25px;
    background: #fff;
    line-height: 25px;
} */

.search {


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
    /* border-top: 1px solid #ea6f5a; */
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
    color: #000;
    font-size: 13px;
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


.bottom-left {
    position: absolute;
    font-size: 16px;
    left: 52px;
    top: -51px;
    color: #000;
}

.names {
    font-size: 18px;
    color: #000;
    margin: 0;
}
</style>



