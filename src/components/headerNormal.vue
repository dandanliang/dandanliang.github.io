<template>
    <div class="h-root">
        <div class="header">
            <slot></slot>
            <slot name="link"></slot>
        </div>
    </div>
</template>
<style scoped>
.header {
    background-color: rgb(63, 189, 82);
    top: 0;
    z-index: 9999;
    position: fixed;
    width: 100%;
    line-height: 40px;
    font-size: 1em;
    font-family: "微软雅黑";
    color: #fff;
}

.h-root {
    margin-bottom: 50px;
}
</style>
