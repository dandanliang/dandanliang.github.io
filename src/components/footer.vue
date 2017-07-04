<template>
    <nav>
        <ul class="footer">
            <li v-for="tab in tabs" class="mui-tab-item" v-on:click="tabClick(tab)">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label" :style="setStyle(tab)">{{tab.name}}</span>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            tabs: [{
                name: '首页',
                path: '/home'
            }, {
                name: '书影',
                path: '/book'
            }, {
                name: '广播',
                path: '/radio'
            }, {
                name: '小组',
                path: '/group'
            }, {
                name: '我的',
                path: '/me'
            }]
        }
    },
    methods: {
        tabClick(tab) {
            // this.$router.push({path:tab.path});
            this.$router.push({ path: tab.path });
        },
        setStyle(tab) {
            if (this.$route.path === tab.path) return { color: 'red' };
            else return {};
        }
    }
}

</script>

<style>
.footer li {
    list-style: none;
    text-align: center;
    background: #e5e5e5;
    width: 20%;
    float: left;
    height: 50px;
    line-height: 50px;
}

.footer {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    margin-top: 20px;
    width: 100%;
}
</style>
