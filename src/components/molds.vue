<template>
    <div class="Trend-bottom">
        <div v-if="model!==null">
            <slot class="Trend" name="slot-name1"></slot>
            <slot class="Trend" name="slot-name2"></slot>
            <slot class="Trend" name="slot-name3"></slot>
            <slot class="Trend" name="slot-name4"></slot>
    
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
.Trend-bottom {
    border-bottom: 1px solid #f0f1ec;
    padding: 16px;
    display: flex;
}


.Trend-bottom .Trend {
    display: inline-block;
    border: 1px solid rgb(63, 189, 82);
    height: 26px;
    line-height: 26px;
    border-radius: 20px;
    color: rgb(63, 189, 82);
    padding: 0 15px;
    margin-right: 10px;
    flex: 1;
    margin-bottom: 20px;
    float: left;
}
</style>
