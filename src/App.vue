<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

i {
  font-style: normal;
}


.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}


/*-----------占位符------*/

a {
  text-decoration: none;
  list-style: none;
}

.Station {
  height: 8px;
  background-color: #eee;
  width: 100%;
  margin-top: 10px;
}

.w {
  padding: 0 16px;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  margin: 0;
  padding: 0;
  /*margin-top: 60px;*/
}
</style>
