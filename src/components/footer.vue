<template>
    <nav>
        <ul class="footer">
            <li v-for="tab in tabs" class="mui-tab-item" v-on:click="tabClick(tab)">
                <span class="mui-icon-home">
                    <img :src="tab.img">
                </span>
                <span class="mui-tab-label" :style="setStyle(tab)">{{tab.name}}</span>
            </li>
        </ul>
    </nav>
</template>
<script>

export default {
    data() {
        return {
            tabs: [{
                name: '首页',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }, {
                name: '书影音',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/book'
            }, {
                name: '广播',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/radio'
            }, {
                name: '小组',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/group'
            }, {
                name: '我的',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/me'
            }]
        }
    },
    methods: {
        tabClick(tab) {
            // this.$router.push({path:tab.path});
            this.$router.push({ path: tab.path });
        },
        setStyle(tab) {
            if (this.$route.matched[0].path === tab.path) return { color: '#3fbd52' };
            else return {};
        }
    }
}

</script>

<style scoped>
.footer {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    /*margin-top: 20px;*/
    width: 100%;
    border-top: 1px solid #C0BFC4;
}

.footer li {
    list-style: none;
    text-align: center;
    background-color: #F7F7FA;
    width: 20%;
    float: left;
    padding: 4px 0;
    /*height: 50px;
    line-height: 50px;*/
}

.mui-tab-item .mui-icon-home {
    display: block;
    width: 24px;
    height: 24px;
    margin: auto;
    margin-right: 36%;
}

.mui-tab-item .iocns img {
    width: 24px;
    height: 24px;
}

.mui-tab-item .mui-tab-label {
    color: #999999;
    font-size: 10px;
    margin: auto;
}
</style>
