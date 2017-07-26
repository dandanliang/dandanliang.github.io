<template>
    <div class="body">
        <!--header头部-->
        <header1>
            <span class="book">书影音</span>
    
        </header1>
        <!--nav部分-->
        <book-nav></book-nav>
    
        <!--站位-->
        <!--<div style="height:20px;background-color: #eee;width:100%;">
            </div>-->
        <router-view></router-view>
    
        <!--站位-->
        <!--<div style="height:20px;background-color: #eee;width:100%;clear:both">
                    </div>-->
        <!--footer-->
        <footer2></footer2>
    
    </div>
</template>
<script>
import footer2 from '@/components/footer'
import header1 from '@/components/headerNormal'
import bookNav from '@/components/nav'
export default {
    components: {
        footer2,
        header1,
        bookNav
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

    text-align: center;
    display: block;
}


.search {
    margin-right: -54px;
}
</style>


