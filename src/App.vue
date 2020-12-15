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
  background-color: #f8f5e7;
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
  background-color: rgb(33, 153, 8);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(252, 248, 248);
}
.rem{
    text-align: center;
    margin-top: 20px;
    padding: 20px;
  }
.btt:hover{
  background-color: rgb(27, 97, 13);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: rgb(245, 234, 234);
}
.btt:active{
  color: rgb(3, 70, 23);
}
a:active{
  color: rgb(3, 70, 23);
}
.rr{
  border-top: 1px solid;
  padding-top: 7px;
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
    top:0px;
    margin-top: 10px;
    height: 275px;
    position: relative;
    /* transition-property: top;
    transition-duration: 3s; */
    animation: slide ease-in-out ;
    animation-duration: 3s;
  }

  /* .inf:hover{
    top:10px

  } */

  @keyframes slide{
    0%{top:60px}
    25%{top:40px}
    50%{top:20px}
    75%{top:10px}
    100%{top:0px}
  }
  
  .im{
    width:30px;
    height: 30px;
    border-radius: 100%;
  }
  .header{
    font-size: 50px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(3, 49, 13);
  }
  .search{
    margin-top: 30px;
    width: 100%;
    text-align: center;
    height: 100px;
  }
  .se{
    position: absolute;
    bottom: 4px;
    left: 4px;
    border-top: solid #000 1px;
    border-bottom: solid #000 1px;
    padding: 7px;
  }
 
  .meme{
    width:50%;
    outline: none;
    height: 40px;
    min-width: 200px;
    text-align: justify;
  }
  
</style>
