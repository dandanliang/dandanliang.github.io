<template>
    <ul class="menu">
        <li v-for="tab in tabs" v-on:click="tabClick(tab)">
            <a :style="setStyle(tab)">{{tab.name}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            tabs: [{
                name: '电 影',
                path: '/book/movie'
            }, {
                name: '读 书',
                path: '/book/readbook'
            }, {
                name: '电 视',
                path: '/book/tv'
            }, {
                name: '同 城',
                path: '/book/city'
            }, {
                name: '音 乐',
                path: '/book/music'
            }]
        }
    },

    methods: {
        tabClick(tab) {
            // this.$router.push({path:tab.path});
            this.$router.push({ path: tab.path });
        },
        setStyle(tab) {
            if (this.$route.path === tab.path) return { class: "active" };
            else return {};
        }
    }

}
</script>
<style scoped>
.menu {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #49e24f;
}

.menu li {
    list-style: none;
    float: left;
    text-align: center;
    width: 20%;
}

.menu li .active {
    display: block;
    width: 64px;
    line-height: 50px;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}

.menu li a:hover.hover {
    display: block;
    width: 82.8px;
    line-height: 50px;
    color: #ea6f5a;
}
</style>


