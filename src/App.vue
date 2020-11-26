<template>
  <div id="app">
    <header-com/>
    <router-view/>
    <footer-com/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
  'header-com': Header,
  'footer-com': Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=lato");
body{
  padding: 0%;
  margin: 0%;
  background-color: #EEF1F4;
  font-family: 'lato', sans-serif;
}
.banner{
    width: 100%;
    min-height: 600px;
    min-height: 600px;
  }
.quote, .clients{
    background-color: rgb(255, 255, 255);
    height: 100px;
  }
  .sup{
    font-family: cursive;
    font-size: 60px;
    text-align: center;
    margin: auto;
    margin-top: 100px;
  }
hr{
  margin: 7px;
  color: blue;
}
.btt{
  background-color: rgb(221, 148, 58);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(252, 248, 248);
}
.btt:hover{
  background-color: rgb(141, 78, 6);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(245, 234, 234);
}
.btt2{
  background-color: rgb(60, 17, 212);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(247, 244, 244);
}
.btt2:hover{
  background-color: rgb(7, 3, 65);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(255, 253, 253);
}
.text{
  background-color: rgb(255, 255, 255);
  padding-bottom: 10px;
  height: 100%;
}
.inf{
    padding-bottom: 10px;
    margin-top: 10px;
    min-height: 335px;
  }
  .im{
    width:30px;
    height: 30px;
    border-radius: 100%;
  }
  .header{
    font-size: 50px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(1, 1, 97);
  }
  .search{
    margin-top: 30px;
    width: 100%;
    text-align: center;
    height: 100px;
  }
 
  .meme{
    width:50%;
    outline: none;
    height: 40px;
    min-width: 200px;
    text-align: justify;
  }
  
</style>
