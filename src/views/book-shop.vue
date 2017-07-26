<template>
    <div>
        <div class="shp-banner">
    
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;">
        </div>
        <!--casrt开始符-->
        <div class="Cart">
            <div class="fl">
                <em class="em-cart1"></em>
                <span class="cart-txt">购物车</span>
            </div>
            <span class="lines"></span>
            <div class="fr">
                <span class="cart-txt">我的集市</span>
            </div>
        </div>
        <!--cart结束符-->
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;">
        </div>
        <!--使用book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 新品首发</span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
    
        <!--使用leftbg组件-->
        <left-bg :model="shop">
            <span slot="top"></span>
            <span slot="bottom-left">
                <span class="cart-money">&yen;123</span>
                <del class="cart-dels">&yen;149</del>
            </span>
            <span slot="bottom-right">×</span>
    
        </left-bg>
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;">
        </div>
        <!--使用book-more组件-->
        <book-more>
            <span slot="fl-h1" class="more-span-txt"> 推荐话题</span>
            <span slot="more-right">
                <a class="more-right-a"></a>
            </span>
        </book-more>
        <!--使用shopbanner';-->
        <shop-banner :model="shops">
            <div slot="bg-img">
                <img src="../../static/bookbgmusic.png" style="width: 100%;" />
            </div>
            <h2 slot="slot-h1" class="slot-title">#我的豆瓣收藏夹有什么#</h2>
            <p slot="slot-txt" class="slot-txt">晒出你的豆瓣收藏夹，让我们看看你走过的世界吧。</p>
        </shop-banner>
        <shop-banner :model="shops">
            <div slot="bg-img">
                <img src="../../static/bookbgmusic.png" style="width: 100%;" />
            </div>
            <h2 slot="slot-h1" class="slot-title">#我的豆瓣收藏夹有什么#</h2>
            <p slot="slot-txt" class="slot-txt">晒出你的豆瓣收藏夹，让我们看看你走过的世界吧。</p>
        </shop-banner>
    </div>
</template>
<script>
import bookMore from '@/components/bookmore';
import leftBg from '@/components/leftbg';
import shopBanner from '@/components/shopbanner';

export default {
    components: {
        bookMore,
        leftBg,
        shopBanner
    },
    data() {
        return {
            shop: {
                title: "豆瓣帆布包+早餐系列",
                body: "简约版型+多层版型+食欲满满，早餐图案=你不可或缺的搭配好物",
                img: "https://img1.doubanio.com/dae/niffler/niffler/images/7bea8578-3f69-11e7-8261-0242ac11001b.png"
            },
            shops: [{
                title: "",
                txt: "",
                imgs: ""
            }]

        }
    }
}
</script>

<style scoped>
.shp-banner {
    height: 200px;
    background-color: aqua;
}

.Cart {
    height: 55px;
    /*padding: 16px;*/
    display: flex;
}

.Cart .fl {
    flex: 1;
    /*background: red;*/
    height: 55px;
}

.Cart .fl span::before {
    content: "cs";
    /*overflow: hidden;
    */
    visibility: hidden;
    position: relative;
    width: 20px;
    height: 20px;
    background: red;
}

.Cart .fr {
    flex: 1;
    /*background: palegoldenrod;*/
    height: 55px;
}

.Cart .cart-txt {
    margin-left: 95px;
    line-height: 55px;
}


.Cart .lines {
    width: 1px;
    height: 55px;
    background-color: #DDD;
    padding: 0;
    margin-top: 2px;
}

.cart-news {
    color: #000;
    font: 700 20px/40px "微软雅黑";
}




.cart-money {
    font-size: 20px;
    color: red;
    margin-left: -10px;
    /* font-family: monospace; */
    margin-right: 10px;
}

.cart-dels {
    font-size: 16px;
}






/*------------------------------------*/

.slot-title {

    font-size: 20px;
}

.slot-txt {
    color: #b9b9b9;
    font-size: 14px;
    line-height: 30px;
}
</style>

