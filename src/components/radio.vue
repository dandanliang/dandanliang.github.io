<template>
    <div class="body">
        <!--header头部-->
        <div class="header">
            <span class="tit">推荐广播</span>
            <!--<div class="Alink">
                    <a class="search"></a>
                    <a class="sgnIn"></a>
                </div>-->
        </div>
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
    
    </div>
</template>
<<script>
import axios from "axios";
export default {
  data(){
      return {
          papers:[]
      }
  },  created(){
        axios.post('api/radio',{uid:'12'}).then((a)=>{
           
            this.papers=a.data;
        }).catch((error)=>{
            debugger;
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
.header {
    width: 100%;
    height: 60px;
    background-color: #ea6f5a;
}

.header .tit {
    display: block;
    line-height: 60px;
    font-size: 20px;
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
    right: -6px;
    top: -14px;
}

.con-r-1 .con-item1 {
    flex: 2;
}

.con-r-1 .con-item1 p {
    font-size: 12px;
    line-height: 24px;
    color: #ea6f5a;
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
    background-color: #ea6f5a;
    text-align: center;
    line-height: 28px;
    border: none;
    font-size: 13px;
    color: #fff;
}



.con-r .con-r-2 {
    font-size: 13px;
    line-height: 20px;
}

.con-r .con-r-3 a {
    color: #c7c7c7;
    font-size: 12px;
}
</style>


