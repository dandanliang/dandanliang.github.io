<template>
    <div>
        <div class="w bg">
            <span slot="fl-h1" class="more-span-txt">电影热映</span>
            <span slot="more-right">
                <a class="more-right-a">&gt;</a>
            </span>
        </div>
        <div class="w content ">
            <h3>一句話證明你很牛逼</h3>
            <div class="con-items clearfix">
                <div class="fl">
                    <img src="static/8.jpg" />
                </div>
                <div class="fr">
                    <h6>人名</h6>
                    <p>時間</p>
                </div>
            </div>
            <p class="content-text">我很喜歡冒險</p>
        </div>
        <!--站位-->
        <div class="Station">
        </div>
        <div class="w content-text">
            <span>對應最多得人</span>
        </div>
        <div class="w footer">
            <div class="footer-items">
                <div class="fl ft-itmes">
                    <strong>人名</strong>
                    <span>123</span>
                </div>
                <div class="fr ft-itmes">
                    909090900
                </div>
    
            </div>
            <ul>
                <li>回應的</li>
            </ul>
        </div>
        <!--button  -->
    
        <div class="btn">
            <input type="text">
            <input type="submit">
    
        </div>
    </div>
</template>
<script>
// import bookMore from '@/components/bookmore';
export default {
    // bookMore,
}
</script>

<style scoped>
.bg {
    height: 30px;
    line-height: 30px;
    display: flex;
    background-color: #e5e5e5;
}

.content {
    margin: 20px 0;
    /* background: red; */
}

.content h3 {
    height: 50px;
    line-height: 50px;
}

.content-text {
    margin: 30px 0;
}

.bg span {
    flex: 3;
}

.fl {
    float: left;
}

.fl img {
    margin-right: 10px;
    border-radius: 50%;
    width: 121px;
    height: 121px;
    border: 50%;
}

.fr {
    float: left;
}

.ft-itmes {
    width: 50%;
    /* float: left; */
}

.flexs {
    display: flexs;
}

.footer ul li {
    line-height: 50px;
    border-bottom: 1px solid #cccccc;
}
</style>
