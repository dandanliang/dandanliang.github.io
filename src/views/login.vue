<template>
  <div class="con">
    <header1>
      <span>豆 瓣 账 户</span>
    </header1>
    <br>
    <!--注册部分-->
    <div class="register">
      <input type="text" class="phone" v-model="phone" placeholder="请输入用手机号码">
      <br>
      <input type="password" class="pass" v-model="pwd" placeholder="请输入密码">
    </div>
    <!--footer底部-->
    <div class="footer">
      <button type="button" class="btn-y " v-on:click="btnSend">确 认</button>
      <br>
  
      <button type="button" class="btn-n">忘记密码</button>
    </div>
  </div>
</template>

<script>
import header1 from '@/components/headerNormal'
import axios from "axios";
export default {
  name: 'hello',
  components: {
    header1
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      phone: '13100000000',
      pwd: "123"
    }
  }, methods: {
    btnSend: function (event) {
      if (this.phone === '') {
        alert('用户名不能为空！');
        return;
      }
      if (this.pwd === '') {
        alert('密码不能为空！');
        return;
      }
      axios.post('api/login', { name: this.phone, pwd: this.pwd }).then((res) => {
        if (res.data.state === 1) {
          alert(res.data.msg);
          this.$router.push({ path: "/home" });
        } else {
          alert(res.data.msg);
        }
      }).catch((error) => {

      });


      // if(this.phone==="lyh"&&this.pwd==="1"){
      //   alert("你已登录成功");
      // this.$router.push({path:"/home"});
      // }else {
      //    // debugger;
      //   alert("你的密码错误")
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  line-height: 50px;
  font-size: 24px;
  font-family: "微软雅黑";
  color: #fff;
  text-align: center;
  display: block;
}


.register {
  padding: 20px;
}

.phone,
.pass {
  background: #f4f4f4;
  height: 38px;
  line-height: 38px;
  width: 99%;
  font-size: 14px;
  border: 1px solid #f4f4f4;
  margin-bottom: 20px;
  text-indent: 1em;
}

.footer {
  width: 100%;
  text-align: center;
}

.btn-y {
  width: 50%;
  border: none;
  margin-bottom: 20px;
  padding: 8px 25px;
  font-size: 18px;
  color: #fff;
  background-color: #3fbd52;
}

.btn-n {
  border: none;
  font-size: 18px;
  color: #009a61;
  background: white;
}
</style>
