<template>
    <div>
        <div class="book-tit">
            读书</div>
        <home-panel v-for="item in items" :model="item">
            <span slot="top"></span>
            <span slot="bottom-left">
                <!--<div class="round"></div>-->
                <router-link to="/diary" class="mhn">{{item.name}}</router-link>
            </span>
            <span slot="bottom-right">×</span>
        </home-panel>
    </div>
</template>
<script>
import homePanel from '@/components/homePanel';
export default {
    components: {
        homePanel
    },
    data() {
        return {
            items: [{
                title: "做前端能使我快乐",
                name: '999999',
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"

            }, {
                title: "做前端能使我快乐",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"

            }, {
                title: "做前端能使我快乐",
                body: "打法的是否，打发的说法都是，大师法师打发斯蒂芬，大沙发的沙发斯蒂芬……",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"

            }]


        }
    }
}
</script>
<style>
.book-tit {
    height: 18px;
    line-height: 18px;
    padding: 16px
}
</style>


