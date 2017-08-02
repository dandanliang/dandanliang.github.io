<template >
    <div class="h-panel" v-if="model!==null">
        <div class="top">
            <slot name="top"></slot>
        </div>
        <div class="body">
            <div class="left">
                <h2>{{model.title}}</h2>
    
                <p class="txt">{{model.body}}</p>
            </div>
            <div class="right">
                <img :src="model.img" />
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <slot name="bottom-left"></slot>
            </div>
            <div class="right">
                <slot name="bottom-right"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        model: null
    },
    created() {

    }
}
</script>
<style scoped>
.h-panel {
    margin-bottom: 20px;
    padding: 10px;
    display: inline-block;
}

.h-panel .top {
    font-size: 12px;
    color: #333333;
    text-align: left;
    line-height: 40px;
}

.h-panel .bottom {
    font-size: 12px;
    color: black;
    text-align: left;
    clear: both;
    line-height: 40px;
}

.h-panel .bottom .left {
    float: left;
    margin-left: 10px;
    color: #e3e3e3;
}

.h-panel .bottom .right {
    float: right;
}

.h-panel .body {
    display: flex;
}

.h-panel .body .left {
    flex: 3;
}

.h-panel .body .left h2 {
    font-size: 19px;
    color: #666;
    line-height: 25px;
}

.h-panel .body .left .txt {
    font-size: 15px;
    color: #9B9B9B;
    line-height: 24px;
}

.h-panel .body .right {
    float: right;
    flex: 1;
    margin-left: 20px;
}

.h-panel .body .right img {
    height: 120px;
    width: 80px;
}
</style>

