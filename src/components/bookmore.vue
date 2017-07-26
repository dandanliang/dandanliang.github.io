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
</style>

