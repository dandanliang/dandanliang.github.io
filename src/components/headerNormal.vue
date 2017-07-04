<template>
    <div class="header">
        <slot></slot>
        <slot name="link"></slot>
    </div>
</template>
<style scoped>
.header {
    line-height: 60px;
    text-align: center;
    background-color: #ea6f5a;
}
</style>
