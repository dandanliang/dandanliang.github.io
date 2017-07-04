<<template>
<!--隔栏-->
   <div>
     <!--header部分-->
    <header1>
        <input type="search" name="search" class="search" value="">
    </header1>
  <!--banner部分-->
    <div class="conent">
        <ul class="table-view">
            <li class="table-view-cell " v-for="a in conent ">
                <a href="javascript:;">
                    <div class="body">
                       <strong >{{a.title}}</strong> <!--年轻人-->
                        <div class='ellipsis'>{{a.body}}</div>
                    </div>
                    <div class="img">
                         <img class="imgs" :src="a.imgsrc" >
                    </div>   
                    <div class="name">
                        <span>作者：{{a.author}}</span><a>X</a>
                    </div>
                </a>
            </li>
        </ul>
          
    </div>
    <!--footer-->
    <footer2></footer2>
 </div>
 <!--隔栏-->
</template>
<script>
import Footer2 from '@/components/footer';
import header1 from '@/components/headerNormal'
import axios from "axios";
export default {
    name: "home",
    components: {
        Footer2, header1
    },
    data() {
        return {
            conent: [],


        }
    },
    created() {
        // 异步加载首页数据
        axios.post('api/home', { uid: '123' }).then((a) => {

            this.conent = a.data.conent;
        }).catch((error) => {
            // debugger;
        })
    },


}
</script>
<style scoped>
a {
    text-decoration: none;
    list-style: none;
}


/*.header {
    line-height: 100px;
    text-align: center;
    background-color: #ea6f5a;
}*/

.search {
    background: #fff;
    height: 38px;
    line-height: 38px;
    width: 80%;
    font-size: 14px;
    border: 1px solid #eee;
    text-indent: 2em;
    border-radius: 6px;
}

.conent {
    margin-top: 15px;
}

.table-view-cell {
    border-top: 1px solid #ea6f5a;
    padding: 10px;
}

ul li {
    list-style-type: none;
}

ul li a {
    text-decoration: none
}

.active {
    text-align: center;
}

.body {
    margin-top: 3PX;
    font-size: 18px;
    font-family: 700;
    line-height: 2.3;
    /*text-indent: 0.5em;*/
    color: black;
    width: 64%;
    float: left;
}

.ellipsis {
    font-size: 15px;
    color: #9B9B9B;
    line-height: 1.5em;
}

.img {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
}

.imgs {
    width: 70px;
}

.name {
    clear: both;
    height: 40px;
    line-height: 40px;
}

.name span {
    margin-left: 10px;
    color: bisque;
}

.name a {
    display: inline;
    float: right;
    margin: 0 35px;
    color: bisque;
}
</style>



