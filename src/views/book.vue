<template>
    <div class="body">
        <!--header头部-->
        <header1>
            <span class="book">书影音</span>
            <!--<div class="Alink">
                                                            <a class="search"></a>
                                                            <a class="sgnIn"></a>
                                                        </div>-->
        </header1>
        <!--nav部分-->
        <ul class="menu">
            <li>
                <router-link to="" class="active" exact="active">电 影</router-link>
            </li>
            <li>
                <a class="hover" exact="active">读 书</a>
            </li>
            <li>
                <a class="hover">电 视</a>
            </li>
            <li>
                <a class="hover">同 城</a>
            </li>
            <li>
                <a class="hover">音 乐</a>
            </li>
        </ul>
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;">
        </div>
        <!--标题-->
        <div class="tit">
            <span>电影热映</span>
            <a>更多 &#155</a>
        </div>
        <!--banner-->
        <div class="banner">
            <div class="banner-item">
                <div class="item">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> 变形金刚5</strong>
                    <span class="star">☆☆☆☆</span>
                    <i>4.5</i>
                </div>
                <div class="item">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> 变形金刚5</strong>
                    <span class="star">☆☆☆☆</span>
                    <i>4.5</i>
                </div>
                <div class="item">
                    <a href="#" class="aimg">
                        <img src="../../static/44.jpg">
                    </a>
                    <strong> 变形金刚5</strong>
                    <span class="star">☆☆☆☆</span>
                    <i>4.5</i>
                </div>
    
            </div>
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;clear:both">
        </div>
        <!--banner2部分-->
        <div class="banner2">
            123
        </div>
        <div class="man">
            <strong class="mantxt">我就是最拉风的最酷超级无敌boy</strong>
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #eee;width:100%;clear:both">
        </div>
        <!--footer-->
        <footer2></footer2>
    </div>
</template>
<script>
import footer2 from '@/components/footer'
import header1 from '@/components/headerNormal'
export default {
    components: {
        footer2, header1
    }

}
</script>
<style scoped>
.man {
    background: #fff;
    width: 100%;
    height: 60px;
}

.book,
.mantxt {
    line-height: 60px;
    font-size: 20px;
    font-family: "微软雅黑";
    color: #fff;
    text-align: center;
    display: block;
}


.search {
    margin-right: -54px;
}


.menu {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
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
    border-bottom: 2px solid #ea6f5a;
}

.tit {
    height: 18px;
    line-height: 18px;
    padding: 16px;
}

.tit span {
    height: 18px;
    width: 99%;
    font-size: 18px;
}

.tit a {
    display: block;
    font-size: 14px;
    color: #ea6f5a;
    float: right;
}

.banner {
    width: 100%;
}

.banner-item {

    padding: 10px;
    margin: 6px;
}

.item {
    float: left;
}

.item .aimg,
strong {
    display: block;
}

.aimg {
    width: 104px;
    padding: 10px 0px;
}

.aimg img {
    width: 104px;
}

.item i {
    font-size: 12px;
    font-family: "微软雅黑";
    color: yellowgreen;
    font-style: normal;
}

.banner2 {
    width: 99%;
    height: 100px;
    border: 1px solid red;
}
</style>


