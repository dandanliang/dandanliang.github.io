<template>
    <div class="scroll-con">
        <div class="scroll-cons">
            <div class="scroll-con-item" v-for="tab in tabs">
                <div class="scroll-fl">
                    <slot></slot>
                </div>
                <div class="scroll-fr">
                    <slot></slot>
    
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
<style>
.scroll-con {
    height: 200px;
    padding: 16px;
    clear: both;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 10px;
}

.scroll-con .scroll-cons {
    position: relative;
    width: 10000px;
    overflow: hidden;
}

.scroll-fl,
.scroll-fr {
    flex: 1;
}
</style>

