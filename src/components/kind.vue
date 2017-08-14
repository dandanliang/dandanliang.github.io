<template>
    <div class="kind">
        <div class="Times" v-for="tab in tabs">
            <img :src="tab.img">
            <p>{{tab.text}}</p>
    
        </div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: [{
                text: '豆瓣時間',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }, {
                text: '集市',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }, {
                text: '豆瓣书城',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }, {
                text: '豆瓣视频',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAEbUlEQVRIS61WW09yRxSdAbyB9wsqeEkQ4w0NITwoVB/qg/+gTfpi0vZnNU18afL1H/hgY2whvkCMYBS5JEQP3jVeAC9wTrN2s09HIH4x+eYBJnNm9tp77bX3jBT/D7m5ufmzx+P5yWKxLFSrVYfdbm+RUlqUPTR9fn4Wra2ttcvCMAy9VCq9WK3Woq7r+7lc7o+1tbXfhRAGNkv8bGxsuIPB4Jepqamw1WolI8ViUTgcjjqDn/lWrVbF/v5+NJFI/LC+vq4BTMbj8X8mJydD7e3tpnEVzDAM8fb2Jl5fX+l7uVwWbW1tNG9qahLNzc1CSvK7zsmnpyeRz+cjPp9vGdT9srq6+hsbYUCA2e12OgwwGGxpaakzCAfYCeyHI8wIgNipra2tX2U6nd7yer3fwwrCvrm5oQ3YiIE5U8thq5Hxmq7rBIR/OIx5f3+/eTaTyfwls9nslcfj6edD9/f3olKpUDTY3Gh8lM+rqythsVgIpLu72zyey+WuZSqVKrvdblNaDw8PtBGK6+vre4f18vIiLi4uBPbA+8HBQZMm3ghmoFTkWAXTNO1Znp6eVt1uN8kb0Zyfn4vh4WEyCA/BP6KNxWJkZGRkhNYxNE1DTg2/3y97e3spv6Cxs7NTnJ2diaGhIVM4mqbpUtM0w+Vy0WHkCRTCIxyE8Ww2S0bD4TCJpFZxiCASiZCDXq+XGIGDzBCLpVAoCBMMUbEoOjo6CAyG4vG4CAaDAmuN5I1zj4+PFLnf7yeHAIA17Mcc/+/AkA8MyJjBdnd3xfLyMuWwVCpRnnCQBcIOQvJQ8s7OjlhaWjLBmAmUzDswRAVj8Ahgt7e34vDwkOjjsmBA/HMNqqUBOmdmZgTyx3bY7odgAILB8fFxU5HwHkCIDlHhu1qD+XyevgOwIVg2mzUgYdVb8JxMJgWEAy/VAUBWLKuSv4MNRODz+Sj/YIrtomRMgdTSeHBwQBIeHR01sThHkDeAOIe84eTkhFQ4Nzf3ORqvr69FJpMRi4uLZEsVA18xqmiwB4KamJgQAwMDH4NBjcgF/hU1GisrK9JmsxEtnCNWIyIEIGhHfW5vb4tQKGSqESrEHtRrXZ1xh2cwRJBIJEQgECDKOEdqb2TR7O3tGbOzsxKGv1pn3EFwuKuri2oJkaRSKWo9H3WQaDRqOJ1OOT09bUbK7Y6vLIpM7Y0I+fLyknoadxMAcm9ETdX2Rkgckff09BAQBgCgWKfTqfZRXR4fH5dcLtd/164QZBi3L+4jGFDlXdv1YQzO8ICzd3d3tIa9atcvFArluvsM4aMn4iBU1Wh87T6D0NCqUDo86D5Tb2rIGzSCLtDDVww3YD7Ihao6grNYR84hMKQB6WBm6KbmNwgWWRTqHAZgCNR+5g0CZtSGTW8QvK6SyeTfY2NjYUi2kbwBhtsA9GKobxDUIJxodP1wHabT6WggEPjOfDfOz8//ubCwEPrW78ajo6NILBb7kd+NTP27F3GlUml3OBzNn30RF4vFV5vN9tToRfwv74+EwaZSUBEAAAAASUVORK5CYII=",
                path: '/home'
            }],
        }
    }
}
</script>

<style scoped>
.kind {
    display: flex;
}

.kind div {
    flex: 1;
    height: 40px;
    padding: 10px 10px;
    text-align: center;
}

.kind div img {
    width: 24px;
    height: 24px;
}

.kind div p {
    font-size: 12px;
    color: #333;
}

.Times {
    flex: 1;
}
</style>

