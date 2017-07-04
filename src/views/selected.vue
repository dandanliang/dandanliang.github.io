<template>
    <div>
        <!--header-->
        <div class="header">
            <router-link class="link">
                &lt;</router-link>
                    <span>推 送</span>
        </div>
        <div class="con-txt">
            <div class="-l">1</div>
            <div class="-r">12</div>
    
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    width: 100%;
    height: 60px;
    background-color: #ea6f5a;
}

.header .link {
    font-size: 20px;
    font-family: cursive;
    color: #fff;
    float: left;
    padding: 8px;
    line-height: 45px;
}

span {
    line-height: 60px;
    font-size: 18px;
    font-family: "微软雅黑";
    color: #fff;
    text-indent: 1.5em;
    display: block;
}

.con-txt {
    width: 100%;
    height: 60px;
    padding: 10px;
}

.-l {
    width: 80px;
    background: red;
}

.-r {
    width: 20px;
    background: blue;
}
</style>


