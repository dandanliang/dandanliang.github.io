<template>
    <div class="body">
        <load v-if="fadein===1">{{fadeinmsg}}</load>
        <!--header头部-->
        <header1 style="margin-buttom:70px;">
            <span class="tit">推荐广播</span>
        </header1>
        <!--组件  -->
    
        <!--con部分-->
        <div class="con" v-for="paper in papers">
            <div class="con-l">
                <div class="con-l-img" :style="computedImg(paper.url)"></div>
            </div>
            <div class="con-r">
                <div class="con-r-1">
                    <div class="con-item1">
                        <h3>{{paper.name}}</h3>
                        <p>{{paper.gzcount}}人关注</p>
                    </div>
                    <div class="con-item2">
                        <a>关注</a>
                    </div>
                    <span class="con-r-span">x</span>
                </div>
                <div class="con-r-2">{{paper.body}}</div>
                <div class="con-r-3">
                    <a>点赞</a>
                    <a>1</a>
                </div>
    
            </div>
        </div>
        <!--使用封装好的组件links-->
        <links></links>
        <!--使用footer组件-->
        <footer2></footer2>
        <div style="margin-top:130px;"></div>
    </div>
</template>
<<script>
import Footer2 from '@/components/footer';
import links from '@/components/link';
import header1 from '@/components/headerNormal'
import load from '@/components/loading'
import axios from "axios";
export default {
     components:{
        Footer2,
        links,
        header1,
        load
    },
    data(){
        return {
            fadein:0,
            fadeinmsg: "数据在加载中……",
            papers:[]
        }
    },  
    created(){
        this.fadein=1;
        axios.post('api/radio',{uid:'12'}).then((a)=>{
            var self=this;
           setTimeout(function() {
               self.fadein=0;
                self.papers=a.data;
           }, 1000);
           
        }).catch((error)=>{
            // debugger;
        })
    },
  
  methods :{
      computedImg(url){
         let temp='url('+url+') center center / cover no-repeat';
        return {"background":temp};
      }
  }
}
</script>
<style scoped>
.tit {
    display: block;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    color: #fff;
    text-align: center;
}

.con {
    display: flex;
    margin: 17px;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px #888888;
    border-radius: 5px;
}

.con .con-l {
    flex: 1;
}

.con .con-l .con-l-img {
    width: 100%;
    border-radius: 50%;
    height: 0;
    padding-bottom: 100%;
}

.con .con-r {
    flex: 4;
    margin-left: 10px;
}

.con .con-r .con-r-1 {
    position: relative;
    display: flex;
}

.con .con-r .con-r-1 span {
    z-index: 10;
    position: absolute;
    right: 2px;
    top: -10px;
}

.con-r-1 .con-item1 {
    flex: 2;
}

.con-item1 h3 {
    height: 30px;
}

.con-r-1 .con-item1 p {
    font-size: 12px;
    line-height: 24px;
    color: #c7c7c7;
}

.con-r-1 .con-r-span {
    font-size: 14px;
    color: #f1f1f1;
}

.con-r-1 .con-item2 {
    flex: 1;
    margin: 15px;
}

.con-r-1 .con-item2 a {
    display: block;
    width: 64px;
    height: 28px;
    border-radius: 4px;
    background-color: rgb(63, 189, 82);
    text-align: center;
    line-height: 28px;
    border: none;
    font-size: 13px;
    color: #fff;
    margin-top: -14px;
}

.con-r .con-r-2 {
    font-size: 13px;
    line-height: 20px;
}

.con-r .con-r-3 {
    margin-top: 10px;
}

.con-r .con-r-3 a {
    color: #c7c7c7;
    font-size: 12px;
}
</style>


