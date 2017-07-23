<template>
    <div>
        <!--header部分-->
        <!--login部分-->
        <header2>
            <div class="tit_l">
                <span>我的</span>
            </div>
            <div slot="link" class="tit_r">
                <div class="tit-r-box">
                    <router-link to='/setup'>
                        <img src="../../static/setting.png">
                    </router-link>
                </div>
            </div>
        </header2>
        <div class="login">
            <div class="img">
    
            </div>
            <!--logins-->
            <div class="logins">
                <div class="logns-r">
                    <router-link to='/login'>登 录 / 注 册</router-link>
                </div>
            </div>
        </div>
        <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
        <!--Push-->
        <div class="Push">
            <div class="Push1">
                <router-link to="login" class="remind">
                    <span class="remind-icon"></span>
                    <p>提醒</p>
                </router-link>
                <div class="Jump item-flow">
                    <a class="item-flow-a">></a>
                </div>
            </div>
            <div class="Push-Center">
                <div class="no-remind">暂无信息提醒</div>
            </div>
        </div>
    
        <!--站位-->
        <div style="height:20px;background-color: #f0f1ec;width:100%;">
        </div>
    
        <nav>
            <ul class="nav">
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
            </ul>
            <ul class="nav">
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-itme-icon">
                        <span class="nav-icon"></span>
                    </div>
                    <div class="nav-itme-tab">
                        <span class="nav-label">喜 欢</span>
                    </div>
                </li>
            </ul>
        </nav>
        <!--框架闭合-->
        <!--footer-->
        <footer2></footer2>
    </div>
</template>
<script>
import footer2 from '@/components/footer'
import header2 from '@/components/headerNormal'
export default {
    components: {
        footer2,
        header2
    }

}
</script>
<style scoped>
.login {
    display: flex;
    display: flex;
    margin: 10px;
    padding: 10px;
    background: #e1e1e1;
}

.login .img {
    flex: 2;
    background: #ea6f5a;
    width: 53%;
    border-radius: 50%;
    height: 0;
    border: 2px solid #fcfffb;
    padding-bottom: 33%;
}

.login .logins {
    flex: 4;
}

.logins a {
    height: 40px;
    border: 1px solid #fff;
    border: 1px solid #fff;
    line-height: 40px;
    display: block;
    text-align: center;
    width: 160px;
    border-radius: 5px;
    top: 50%;
    margin: 50px;
    color: #fcfffb;
}

.Push {
    box-shadow: 1px 1px 1px #f0f1ec;
    z-index: 22;
}

.Push1 {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f0f1ec;
}

.Push1 p {
    flex: 1;
}

.remind {
    color: #4b4b4b;
    font-size: 18px;
}

.Push1 a {
    flex: 2;
    color: #989898;
    font-size: 20px;
    font-family: cursive;
}

.Push-Center {
    height: 44px;
    line-height: 44px;
}

.Push-Center div {
    text-align: center;
}

.remind-icon {
    /*content: "";*/
    float: left;
    background: #fc424f;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 12px;
    margin: 0 10px 0px 0;
    margin-top: 4px;
}

.no-remind {
    text-align: center;
}


.nav {
    display: flex;
    margin: 20px;
}


.nav-item {
    flex: 1;
    /*background: red;*/
}


.nav-itme-icon {
    text-align: center;
    padding: 20px;
}

.nav-item .nav-icon {
    background: #fc424f;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
}

.nav-itme-tab {
    text-align: center;
    padding: 20px;
}

.nav-label {
    display: -webkit-inline-box;
    height: 20px;
    line-height: 20px;
    color: #969696;
}


.nav {
    border-bottom: 1px solid #f0f1ec;
}


.header .tit_l {
    flex: 8;
}

.tit_l span {

    text-align: center;
    display: block;
}

.tit_r img {
    height: 20px;
    width: 20px;
    filter: invert(100%);
    margin-top: 10px;
}

.header .tit_r {
    position: fixed;
    right: 0;
    top: 0;
    margin-right: 10px;
}

.tit-r-box {
    position: relative;
}

.tit-r-box a {
    position: absolute;
    right: 25%;
    color: #fff;
}
</style>


