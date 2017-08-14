<template>
  <div class="w">
    <div class="bg"></div>
    <div class="content">
      <div class="text">
        <img src="static/timg.gif">
        <div class="text-p">
          <slot></slot>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.w {
  position: relative;
  text-align: center;
}

.bg {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.5;
  z-index: 1;
}

.content {
  width: 200px;
  margin: 30px auto;
}

.w .text {
  position: absolute;
  background: #fff;
  padding: 0 50px 20px;
  /* margin-left: 32%; */
  z-index: 2;
  border-radius: 3px;
}

.text img {
  width: 80px;
}
</style>


