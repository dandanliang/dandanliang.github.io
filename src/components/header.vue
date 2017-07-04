<template>
    <!--header部分-->
    <diV class="header">
        <div class="tit_l">
            <span>我的</span>
        </div>
        <div class="tit_r">
            <div class="tit-r-box">
                <router-link to='/setup'>
                    <img src="../../static/setting.png" style="height:20px;width:20px;filter: invert(100%);">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.header {
    display: flex;
    background-color: #ea6f5a;
}

.header .tit_l {
    flex: 8;
}

.tit_l span {

    font-size: 20px;
    font-family: "微软雅黑";
    color: #fff;
    text-align: center;
    display: block;
    height: 60px;
    line-height: 60px;
}

.header .tit_r {
    flex: 1;
}

.tit-r-box {
    position: relative;
}

.tit-r-box a {
    position: absolute;
    right: 25%;
    margin-top: 50%;
    font-size: 20px;
    font-family: cursive;
    color: #fff;
}
</style>