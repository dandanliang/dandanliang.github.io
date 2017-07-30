<template>
    <div class="title">
        <div class="fl">
            <slot name="fl-h1"></slot>
        </div>
    
        <div class="fr">
            <slot name="more-right"></slot>
        </div>
    
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.title {
    height: 18px;
    line-height: 18px;
    padding: 16px;
    display: flex;
}

.more-span-txt {
    height: 18px;
    width: 99%;
    font-size: 18px;
}

.more-right-a {
    position: absolute;
    right: 0;
    margin-right: 10px;
    font-size: 14px;
    color: rgb(63, 189, 82);
}
</style>

