<template>
    <div class="conent">
        <ul class="table-view">
            <li class="table-view-cell " v-for="a in conent ">
                <a href="javascript:;">
                    <div class="body">
                        <strong>{{a.title}}</strong>
                        <!--年轻人-->
                        <div class='ellipsis'>{{a.body}}</div>
                    </div>
                    <div class="img">
                        <img class="imgs" :src="a.imgsrc">
                    </div>
                    <div class="name">
                        <span>作者：{{a.author}}</span>
                        <a>X</a>
                    </div>
                </a>
            </li>
        </ul>
    
    </div>
</template><script>
import homeframe from '@/components/homeframe';
import axios from "axios";
export default {
    name: "home",
    components: {

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
</style>





