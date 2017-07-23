<template>
    <div class="tab">
        <div class="tab1">
            <div class="Line">
                <hr>
            </div>
        </div>
        <div class="tab2">
            <!--<div class="book">读书</div>-->
            <slot></slot>
        </div>
        <div class="tab3">
            <div class="Line">
                <hr>
            </div>
        </div>
    </div>
</template>

<style>
.tab {
    display: flex;
    padding: 10px;
    margin: 10px;
}

.tab1,
.tab3 {
    flex: 2;
}

.tab2 {
    flex: 1;
    text-align: center;
    padding: 10px;
}

.tab2 .book {
    color: #525252;
}

div.Line {
    padding: 20px 0;
    color: #e3e3e3;
}
</style>

