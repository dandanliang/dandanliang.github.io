<template>
    <div class="flexs">
        <div class="flexs-fl">
            <slot name="fl"></slot>
    
        </div>
        <span class="lines"></span>
        <div class="flexs-fr">
            <slot name="fr"></slot>
    
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.flexs {
    border-top: 1px solid #e5e5e5;
    display: flex;
    padding: 10px;
}

.flexs .flexs-fl,
.flexs .flexs-fr {
    flex: 1;
    text-align: center;
    line-height: 50px;
}



.flexs .lines {
    width: 1px;
    height: 20px;
    background-color: #DDD;
    padding: 0;
    margin-top: 16px;
}
</style>

