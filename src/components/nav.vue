<template>
    <ul class="menu">
        <li v-for="lis in tabs" v-on:click="tabClick(lis)">
            <a :style="setStyle(lis)">{{lis.name}}</a>
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
            }, {
                name: '集 市',
                path: '/book/shop'
            }]
        }
    },

    methods: {
        tabClick(lis) {
            // this.$router.push({path:lis.path});
            this.$router.push({ path: lis.path });
        },
        setStyle(lis) {
            if (this.$route.path === lis.path) return { borderBottom: " 2px solid rgb(63, 189, 82)", color: "rgb(63, 189, 82)" };
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
    display: flex;
}

.menu li {
    list-style: none;
    float: left;
    text-align: center;
    /*width: 20%;*/
    flex: 1;
}

.menu li .active {
    display: block;
    width: 64px;
    line-height: 50px;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}

.menu li a {
    display: block;
    /*width: 82.8px;*/
    line-height: 50px;
    color: #999;
}
</style>


