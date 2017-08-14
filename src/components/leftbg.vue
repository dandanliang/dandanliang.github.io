<template >
    <div class="h-panel" v-if="model!==null">
        <div class="top">
            <slot name="top"></slot>
        </div>
        <div class="body">
            <div class="left">
                <img :src="model.img" />
            </div>
            <div class="right">
                <h2>{{model.title}}</h2>
                <p class="txt">{{model.body}}</p>
                <div class="bottom">
                    <div class="left">
                        <slot name="bottom-left"></slot>
                    </div>
                    <div class="right">
                        <slot name="bottom-right"></slot>
                    </div>
                </div>
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
    /* border-top: 1px solid #e7e7e7; */
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
    /*float: left;*/
    flex: 1;
}

.h-panel .body .right h2 {
    font-size: 19px;
    color: #666;
}

.h-panel .body .right .txt {
    font-size: 16px;
    color: #a7a7a7;
    line-height: 1.5em;
}

.h-panel .body .right {
    float: right;
    margin-left: 27px;
    flex: 3;
    /*margin-left: 20px;*/
}

.h-panel .body .left img {
    height: 120px;
    width: 120px;
}
</style>

