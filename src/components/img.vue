<template>
<div>
    <div class="content">
        <div class="con-l">
            <div class="con-1-img">

            </div>
        </div>
    <div class="con-r">

    </div>

    </div>

</div>



</template>
<style>
.content{
    display:flex;
    margin: 17px;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px #888888;
    border-radius: 5px;
    background:yellow;
}

.content .con-l{
    flex:1;
}
.content .con-l .con-1-img{
    width: 100%;
    border-radius: 50%;
    height: 0;
    padding-bottom: 100%;
    background:red;
}


.con-r{
    flex:4;
     margin-left: 10px;
}
</style>