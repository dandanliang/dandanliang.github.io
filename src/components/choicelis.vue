<template>
    <!--box开始符-->
    <!--<div class="box">-->
    <div class="boxs" v-if="model!==null">
        <div class="box1">
            <h3>{{model.title}}</h3>
            <p class="txt">{{model.text}}</p>
            <slot></slot>
        </div>
    
    </div>
    <!--</div>-->
    <!--box结束符-->
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

<style>
/*.box {
    padding: 16px;
    overflow-y: hidden;
    overflow-x: scroll;
}

.boxs {
    width: 760px;
    overflow: hidden;
}*/

.box {
    float: left;
}


.boxs {
    float: left;
}

.boxs div {
    /*width: 180px;*/
    height: 180px;
    margin-right: 26px;
    border-radius: 5px;
    text-align: center;
}

.boxs div h3 {

    color: #fff;
    /*margin-top: 60px;*/
}

.boxs div .txt {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #999;
}

.boxs .box1 {
    background: red;
}

.boxs .box2 {
    background: blue;
}

.boxs .box3 {
    background: yellowgreen;
}

.boxs .box4 {
    background: cadetblue;
}
</style>

