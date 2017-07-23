<template>
    <div class="round">
        <div class="minbox" :style="cimg">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        src: null,
    },
    computed: {
        cimg() {
            return "background: url(\"" + this.src + "\") center center / cover no-repeat;";
        }
    }
}
</script>

<style>
.round {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.round .minbox {
    width: 100%;
    border-radius: 50%;
    height: 0;
    padding-bottom: 100%;
}
</style>

