<template>
    <div>
        <!--使用book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 读书</span>
            <span slot="more-right">
                <a class="more-right-a">更多&gt;</a>
            </span>
        </book-more>
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
import bookMore from '@/components/bookmore';
export default {
    components: {
        homePanel,
        bookMore
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
.more-span-txt {
    height: 18px;
    width: 99%;
    font-size: 18px;
}

.more-right-a {
    position: absolute;
    right: 0;
    margin-right: 10px;
    font-size: 14px;
    color: rgb(63, 189, 82);
}





/*.book-tit {
    height: 18px;
    line-height: 18px;
    padding: 16px
}*/
</style>


