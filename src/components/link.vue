<template>
    <div>
        <div class="qh">
            <div class="qh-l">
                <a>换一批</a>
            </div>
            <div class="qh-r">
                <a>
                    选好了，进入小组
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.qh {
    width: 100%;
    height: 30px;
    padding: 10px;
    background: #fff;
    z-index: 9999;
    position: fixed;
    bottom: 50px;
    border-top: 1px solid #e4e4e4;
}

.qh-l,
.qh-r {
    width: 50%;
    height: 100%;
    font-size: 12px;
}

.qh-l {
    float: left;
    height: 100%;
}

.qh-r {
    float: right;
    font-style: 700;
}

.qh a {
    line-height: 30px;
    margin-left: 30px;
}

.qh-l a,
.qh-r a {
    font-size: 15px;
    display: block;
    border-radius: 5px;
    text-align: center;
    /*background: yellow;*/
    width: 70px;
    margin-left: 15%;
    border: 1px solid red;
}


.qh-r a {
    width: 130px;
}
</style>


