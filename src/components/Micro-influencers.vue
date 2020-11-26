<template>
  <div>
    <section class="banner">
      <div class="container wrap"> 
        <b-row class="row" align-h="center">
          <b-col  lg="6"  class="outer">
           <h1 class="sup">
             <span >Meet With Micro Influencers</span> 
           </h1>
            <br>
           <p>
              <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tenetur corporis possimus! </h5>
           </p>
            
           <p>
             <h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tenetur corporis possimus!</h5> 
           </p>
           <p>
             <b-button class="btt"  route to="/register">Become an Influencer</b-button>
           </p>
          </b-col>
          <b-col lg="6" class="slide">

          </b-col>
        </b-row>
      </div>
    </section>
    <div class="quote">
      <b-container >
        
        <b-row align-v="center" align-h="center">
          <b-col cols="12" class="search" >
            <form action="">
              <input type="search" name="" id="" placeholder="Search" class="rounded border border-info meme">
              <b-button type="submit" variant="primary">Submit</b-button><br>
            </form>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="influencers">
       <b-container>
        <span class="header">Influencers</span>
        <hr>
        <b-row align-h="center">
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>
              
            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>
              
            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>
              
            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
             
          </b-col>
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>

            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col md="3" class="inf"> 
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>
              
            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            <hr>
            <div>
              
            </div>
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col sm="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            
            <hr>
            <div>
              
            </div>
            <span class="im"><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </b-card>
          </b-col>
          <b-col sm="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            
            </b-card>
          </b-col>
          
        </b-row>
        <hr>
       </b-container>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .banner{
    width: 100%;
    min-height: 600px;
    min-height: 600px;
  }
  /* .row{
   min-height: 500px;
  } */
  .slide{
    /* background: url(.././assets/pexels-magnus-mueller-2818118.jpg); */
    animation: animate 60s ease-in-out infinite;
    background-size: cover;
    height: 500px;
    
  }
  @keyframes animate{
    0%, 100%{
      background-image: url(.././assets/pexels-hassan-ouajbir-4668381.jpg);
    }
    20%{
      background-image: url(.././assets/pexels-magnus-mueller-2818118.jpg);
    }
    40%{
      background-image: url(.././assets/pexels-cottonbro-2773494.jpg);
    }
    60%{
      background-image: url(.././assets/pexels-plann-4549408.jpg);
    }
    80%{
      background-image: url(.././assets/pexels-plann-4549414.jpg);
    }
  }

  .quote{
    background-color: rgb(255, 255, 255);
    min-height: 100px;
  }
  .wrap{
    margin-top: 30px;
    min-height: 500px;
  }
  .outer{
    width: 100%;
    min-height: 500px;
    color: #000;
    text-align: center;
  }
  .prev{
    width: 100%;
    /* max-width: 200px; */
    height: 100%;
  }
   .prev2{
    width: 100%;
    /* max-width: 200px; */
    height: 200px;
  }
  .about{
    min-height:700px;
    max-height: 1000px;
    background-color: rgb(216, 215, 214);
  }
  b-col{
    text-align: center;
  }
  .caption{
    margin-top: 30px;
  }
  .caption2{
    margin-top: 30px;
    margin: auto;
  }
  .search{
    height: 100px;
  }
  
  .lis{
    margin: auto;
    text-align: center;

  }

  
</style>
