<template>
    <div class="shop-banner" v-if="model!==null">
        <div class="bg-img">
            <!--<img/>-->
            <slot name="bg-img"></slot>
        </div>
        <div class="bottom">
            <div class="bottom-h1">
                <h2></h2>
                <slot name="slot-h1"></slot>
            </div>
            <div class="bottom-txt">
                <p class="txt">{{model.body}}</p>
                <slot name="slot-txt"></slot>
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

<style>
.bottom {
    padding: 10px;
}
</style>

