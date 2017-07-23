<template>
    <div class="kind">
    
        <div class="Times">
            <a>
                <img src="">
                <p>豆瓣时间</p>
            </a>
        </div>
        <div class="Market">
            <a>
                <img src="">
                <p>集市</p>
            </a>
        </div>
        <div class="Books">
            <a>
                <img src="">
                <p>豆瓣书城</p>
            </a>
        </div>
        <div class="Radios">
            <a>
                <img src="">
                <p>豆瓣视频</p>
            </a>
        </div>
    </div>
</template>
<style scoped>
.kind {
    display: flex;
}

.kind div {
    flex: 1;
    height: 40px;
    padding: 10px 10px;
    text-align: center;
}

.kind div img {
    width: 24px;
    height: 24px;
    background: yellow;
}

.kind div p {
    font-size: 12px;
    color: #333;
}

.Times {
    flex: 1;
    background: red;
}

.Market {
    background: yellowgreen;
}

.Books {
    background: cyan;
}

.Radios {
    background: pink;
}
</style>

