<template>
    <div class="ins-box" v-if="model!==null">
        <div class="top">
            <img src="../../static/8.jpg">
            <slot name="slot-top"></slot>
        </div>
        <div class="bodys">
            <strong>{{model.title}}</strong>
            <p>
                <slot name="slot-p1">
                    <!--<span class="star">{{starStr(tab)}}</span>-->
                </slot>
            </p>
            <p class="txt">{{model.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        model: null
    },
    // methods: {
    //     Getstar(item) {
    //         let result = [];
    //         for (let i = 0; i < item.star; i++) {
    //             result.push("☆");
    //         }
    //         return result.join("");
    //     }
    // }

}
</script>

<style>
.ins-box {
    margin-right: 10px;
}


/*.ins-box .top {
    height: 121px;
    width: 121px;
}*/

.ins .ins-box {
    flex: 1;
}

.ins-box em {
    font-style: normal;
}

.ins-box .txt {
    font-size: 12px;
    color: #999;
}
</style>

