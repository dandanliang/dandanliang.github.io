<template>
    <div class="scroll-cons">
        <div class="scroll-con-item" v-if="model!==null">
            <div class="scroll-fl">
                <slot name="scroll-fl"></slot>
    
            </div>
            <div class="scroll-fr">
                <slot name="scroll-fr"></slot>
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
.scroll-cons {
    padding: 16px;
}

.scroll-cons.scroll-con-item {
    display: flex;
}


.scroll-con-item .scroll-fl {
    flex: 1;
    background: red;
}

.scroll-con-ite.scroll-fr {
    flex: 1;
    background: blue;
}
</style>

