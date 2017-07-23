<template>
    <div class="group">
        <!--header部分-->
        <header1>
            <div class="tit">小组</div>
        </header1>
    
        <!--bg开始-->
        <div class="bg">
            <div class="bg-auto">
                <h3>6666666个有趣小组</h3>
                <p>立即选择加入吧</p>
            </div>
            <a class="txt">根据小组推荐</a>
        </div>
        <div class="cat">
            <a class="a" style="color: #fff;bottom: 10px; position: absolute;">有意思</a>
        </div>
        <!--文本-->
        <!--tab开始-->
        <tab2>
            <div class="book">读书</div>
        </tab2>
        <!--tab结束-->
    
        <!--content开始-->
    
        <div class="content" v-for="paper in papers">
            <div class="con-l">
                <div class="con-1-img">
                </div>
            </div>
            <div class="con-r">
                <div class="con-r-tab">
                    <div class="con-r-tab-1">
    
                        <h3>{{paper.title}}</h3>
                        <p class="txt">{{paper.text}}</p>
                    </div>
                    <div class="con-r-tab-r">
                        <a class="body ">{{paper.num}}人</a>
                        <a class="icon">
                            <img :src="paper.img">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--content结束-->
        <!--tab开始-->
        <tab2>
            <div class="book">读书</div>
        </tab2>
        <!--tab结束-->
    
        <links></links>
        <!--使用footer组件-->
        <footer2></footer2>
    </div>
</template>
<script>
import header1 from '@/components/headerNormal'
import footer2 from '@/components/footer'
import tab2 from '@/components/grouptitle'
import links from '@/components/link'

import axios from "axios";
export default {
    components: {
        footer2,
        links,
        header1,
        tab2
    },
    data() {
        return {
            papers: [{
                title: 123,
                text: "看英剧的来，别扯别的",
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                num: 8799
            }, {
                title: 123,
                text: "看英剧的来，别扯别的",
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                num: 8799
            }, {
                title: 123,
                text: "看英剧的来，别扯别的",
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                num: 8799
            }

            ]
        }
    },
    created() {

    },
    // mathods: {
    //     get: function () {
    //         this.papers = JSON;
    //     }
    // },
    // filters: {
    //     imgUrl: function (value) {
    //         if (!value) return "";
    //         value = "img/" + value;
    //         return value;
    //     }
    // }

}

</script>
<style scoped>
.cat {
    height: 60px;
    background: red;
    position: relative;
    border-radius: 4px;
}

.cat,
.bg {
    padding: 10px;
    margin: 17px;
}



.bg .bg-auto {
    text-align: center;
    margin: 10px;
}

.bg h3 {
    color: #111;
    height: 30px;
    line-height: 30px;
}

.bg p {
    color: #525252;
    font-size: 18px;
}

.bg p,
a.txt {
    color: #525252;
}

.group {
    position: relative;
}




/*.header .link {
    font-size: 20px;
    font-family: cursive;
    color: #fff;
    float: left;
    padding: 8px;
    line-height: 45px;
    position: relative;
}*/

.tit {

    text-align: center;
    display: block;
}

.search-link {
    position: absolute;
    top: 20px;
    right: 20px;
}

.search-link a,
span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: red;
    margin-left: 20px;
}

.content {
    display: flex;
    /*margin: 9%;*/
    padding: 16px;
    border-radius: 5px;
    /*background: yellow;*/
}

.content .con-l {
    flex: 1;
}

.content .con-l .con-1-img {
    width: 100%;
    border-radius: 12%;
    height: 0;
    padding-bottom: 100%;
    /*background: red;*/
    box-shadow: 1px 1px 1px 1px #888888;
}

.con-l h3 {
    height: 30px;
    line-height: 30px;
}

.con-r {
    flex: 4;
    margin-left: 10px;
}

.con-r .con-r-tab {
    width: 100%;
}

.con-r-tab-1 {
    width: 68%;
    /*background: red;*/
    float: left;
}

.con-r-tab-1 h3 {
    height: 34px;
    line-height: 34px;
}

.con-r-tab-1 .txt {
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    color: #525252;
}


.con-r-tab-r {
    padding: 18px 0;
    /*background: greenyellow;*/
}

body {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    float: left;
    color: #e3e3e3;
}


.icon {
    display: -webkit-inline-box;
    width: 20px;
    height: 20px;
    border: 50%;
    background: red;
    border-radius: 50%;
    position: absolute;
    right: 25px;
}













































































































































/*.About:after {
    content: "";
    background: #fc424f;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 12px;
    color: #e3e3e3;
}*/
</style>

