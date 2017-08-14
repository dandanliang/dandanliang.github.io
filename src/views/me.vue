<template>
    <div>
        <!--header部分-->
        <!--login部分-->
        <header2>
            <div class="tit_l">
                <span>我的</span>
            </div>
            <div slot="link" class="tit_r">
                <div class="tit-r-box">
                    <router-link to='/setup'>
                        <img src="../../static/setting.png">
                    </router-link>
                </div>
            </div>
        </header2>
        <div class="login">
            <div class="img">
    
            </div>
            <!--logins-->
            <div class="logins">
                <div class="logns-r">
                    <router-link to='/login'>登 录 / 注 册</router-link>
                </div>
            </div>
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--Push-->
        <div class="Push">
            <div class="Push1">
                <router-link to="login" class="remind">
                    <span class="remind-icon"></span>
                    <p>提醒</p>
                </router-link>
                <div class="Jump item-flow">
                    <a class="item-flow-a">></a>
                </div>
            </div>
            <div class="Push-Center">
                <div class="no-remind">暂无信息提醒</div>
            </div>
        </div>
    
        <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <nav style=" border-bottom: 1px solid #f0f1ec;">
            <ul class="nav">
                <li class="nav-item" v-for="item in items">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">{{item.title}}</span>
                    </div>
                </li>
    
            </ul>
            <ul class="nav">
                <li class="nav-item" v-for="item in items2">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">{{item.title}}</span>
                    </div>
                </li>
    
            </ul>
            <ul class="nav">
                <li class="nav-item" v-for="item in items3">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">{{item.title}}</span>
                    </div>
                </li>
    
            </ul>
        </nav>
        <!--框架闭合-->
    
        <!--站位-->
        <div class="Station">
        </div>
        <!--footer-->
        <footer2></footer2>
    </div>
</template>
<script>
import footer2 from '@/components/footer'
import header2 from '@/components/headerNormal'
export default {
    components: {
        footer2,
        header2
    },
    data() {
        return {
            items: [{
                title: '喜欢',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }, {
                title: '日记',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/book'
            }, {
                title: '相册',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/radio'
            }, {
                title: '我的广播',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/group'
            }]
            , items2: [{
                title: '电影.电视',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/me'
            }, {
                title: '读书',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/me'
            }, {
                title: '音乐',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/me'
            }, {
                title: '同城活动',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/me'
            }],
            items3: [
                {
                    title: '时间豆瓣',
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                    path: '/me'
                }, {
                    title: '豆列',
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                    path: '/me'
                }, {
                    title: '订单',
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                    path: '/me'
                }, {
                    title: '钱包',
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                    path: '/me'
                }]
        }
    }

}
</script>
<style scoped>
.login {
    display: flex;
    display: flex;
    margin: 10px;
    padding: 10px;
    background: #e1e1e1;
}

.login .img {
    flex: 2;
    background: #ea6f5a;
    width: 53%;
    border-radius: 50%;
    height: 0;
    border: 2px solid #fcfffb;
    padding-bottom: 33%;
}

.login .logins {
    flex: 4;
}

.logins a {
    height: 40px;
    border: 1px solid #fff;
    border: 1px solid #fff;
    line-height: 40px;
    display: block;
    text-align: center;
    width: 160px;
    border-radius: 5px;
    top: 50%;
    margin: 50px;
    color: #fcfffb;
}

.Push {
    box-shadow: 1px 1px 1px #f0f1ec;
    z-index: 22;
}

.Push1 {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f0f1ec;
}

.Push1 p {
    flex: 1;
}

.remind {
    color: #4b4b4b;
    font-size: 18px;
}

.Push1 a {
    flex: 2;
    color: #989898;
    font-size: 20px;
    font-family: cursive;
}

.Push-Center {
    height: 44px;
    line-height: 44px;
}

.Push-Center div {
    text-align: center;
}

.remind-icon {
    /*content: "";*/
    float: left;
    background: #fc424f;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 12px;
    margin: 0 10px 0px 0;
    margin-top: 4px;
}

.no-remind {
    text-align: center;
}


.nav {
    display: flex;
    margin: 20px;
}


.nav-item {
    flex: 1;
    /*background: red;*/
}


.nav-itme-icon {
    text-align: center;
    padding: 20px;
}

.nav-item .nav-icon {
    background: #fc424f;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
}

.nav-itme-tab {
    text-align: center;
    padding-bottom: 20px;
}

.nav-label {
    display: -webkit-inline-box;
    height: 20px;
    line-height: 20px;
    color: #969696;
}




/*.nav {
   
}*/

.header .tit_l {
    flex: 8;
}

.tit_l span {

    text-align: center;
    display: block;
}

.tit_r img {
    height: 20px;
    width: 20px;
    filter: invert(100%);
    margin-top: 10px;
}

.header .tit_r {
    position: fixed;
    right: 0;
    top: 0;
    margin-right: 10px;
}

.tit-r-box {
    position: relative;
}

.tit-r-box a {
    position: absolute;
    right: 25%;
    color: #fff;
}
</style>


