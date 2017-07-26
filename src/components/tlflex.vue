<template>
    <div class="flexs">
        <div class="flexs-fl">
            <slot name="fl"></slot>
            <!--<em class="em-cart1"></em>
                                            <span class="cart-txt">购物车</span>-->
        </div>
        <span class="lines"></span>
        <div class="flexs-fr">
            <slot name="fr"></slot>
            <!--<span class="cart-txt">我的集市</span>-->
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.flexs {
    display: flex;
    padding: 10px;
}

.flexs .flexs-fl,
.flexs .flexs-fr {
    flex: 1;
    background-color: aquamarine;
    text-align: center;
    line-height: 50px;
}



.flexs .lines {
    width: 1px;
    height: 50px;
    background-color: #DDD;
    padding: 0;
    margin-top: 2px;
}
</style>

