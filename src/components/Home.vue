<template>
  <div>
    <div class='bg' >
      <div class="container">
        <b-row align-v="center" align-h="center">
          <b-col>
            <div>
              <b-jumbotron class="jum" >
               <template #header class="header"> InFluenxer</template> 

                <template #lead>
                  Conneting brands with good and efficient Micro-influencer. 
                </template>

                <hr class="my-4 hr">

                <p>
                  The Person for the job
                </p>

                <b-button class="btt2"  route to="/register">Become an Influencer</b-button>
                <b-button class="btt"  route to="/register">Register a Brand</b-button>
              </b-jumbotron>
            </div>
          </b-col>
        </b-row>

      </div>
      
    </div>
    <div class="quote">
      <div class="container">

        <div class="row">
          <div class="col say">
             Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Similique amet velit doloremque porro quas natus? Corrupti
          </div>
        </div>
        
      </div>
    </div>
    <div class="about">
      <b-container>
        <span class="header">What we do</span>
        <hr>
        <b-row align-h="center">
          
          <b-col md="6"> <video src=".././assets/video (1).mp4" class="prev" autoplay loop></video> </b-col>
          
          <b-col md="6" class="caption">
            <b-card align-v="" class="caption">
            <h3> What we do</h3>
            <hr>
              <ul>
                <li>
                  Connect brands with Micro-influencer
                </li>
                <li>
                  Get brands the perfect design
                </li>
                <li>
                  increase brands and influencers socials
                </li>
                <li>
                  Get paid for advert
                </li>
              </ul>
            <hr>
           
            </b-card>
          </b-col>
          
        </b-row>
        <hr>
         <b-row class="lis">
        <b-col lg="12" class="caption2">
            <b-card class="text-center caption2" align-v="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum, laboriosam, 4
            quaerat earum quibusdam 
          
            <hr>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ullam officiis mollitia 
            totam cum,porro eius suscipit 
           
            </b-card>
          </b-col>
           <!-- <b-col sm="6"> <video src=".././assets/video (1).mp4" class="prev"></video> </b-col> -->
        </b-row>
      
      </b-container>
      
        


    </div>
    <div class="clients">
      <b-container>
        <b-row>
          <b-col class="rem">
            <h1>{{influencer}}</h1> 
            <div>
              <span>Influencers</span> 
            </div>
            
          </b-col>
          
          <b-col class="rem">
            <h1>{{brand}}</h1>
            <div>
              <span>Brands</span> 
            </div>
            
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="influencers">
       <b-container>
        <span class="header">Meet influencers</span>
        <hr>
        <b-row align-h="center">
          <b-col md="3" class="inf"> 
            <b-card class="text">
            <h4>Joe Doe</h4> 
             Facebook 4k followers <br/>
            instagram 11k followers
            <div class="rr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            </div>
            <div class="se">
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </div>
            </b-card>
          </b-col>
          <b-col md="3" class="inf">
            <b-card class="text">
            <h4>Joe Doe</h4> 
             Facebook 4k followers <br/>
            instagram 11k followers
            <div class="rr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            </div>
            
            <div class="se">
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </div>
            </b-card>
          </b-col>
          <b-col sm="3" class="inf">
            <b-card class="text">
            <h4>Joe Doe</h4> 
             Facebook 4k followers <br/>
            instagram 11k followers
            <div class="rr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            </div>
            <div class="se">
            <span><img src=".././assets/pexels-prateek-katyal-2694434ud.jpg" alt="" class="im "></span>
            <span>popstar tuyum</span>
            </div>
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
      influencer: 76538,
      brand: 76538
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin:auto;
    color: #fff;
  }
  .bg{
    height:600px;
    animation: animate 30s ease-in-out infinite;
    background-size: cover;
  }
  @keyframes animate{
    0%, 100%{
      background-image: url(.././assets/pexels-prateek-katyal-2694434u.jpg);
    }
    20%{
      background-image: url(.././assets/pexels-daria-shevtsova-3326713.jpg);
    }
    40%{
      background-image: url(.././assets/pexels-oleg-magni-861102.jpg);
    }
    60%{
      background-image: url(.././assets/pexels-plann-4549414.jpg);
    }
    80%{
      background-image: url(.././assets/pexels-rodnae-productions-5915295.jpg);
    }
    
    
  }
  .bg .div{
    background-color: darkgray;
    width: 100%;
    height: 100%;
  }
  .jum{
    background-color: rgba(100, 94, 94, 0.623);
     color: #fff;
     margin-top: 100px;
     text-align: center;
  }
  .hr{
   background-color: rgb(255, 215, 215);
  }
  
  .prev{
    width: 100%;
    padding-right:30px ;
    padding-bottom: 20px;
    /* max-width: 200px; */
    height: 100%;
  }
  .quote, .clients{
    background-color: rgb(255, 255, 255);
    height: 140px;
    min-height: 100px;
  }
   .prev2{
    width: 100%;
    /* max-width: 200px; */
    
    height: 200px;
  }
  .about{
    min-height:700px;
    max-height: 1200px;
    background-color: rgb(216, 215, 214);
  }
 
  .caption{
    /* margin-top: 30px; */
    text-align: justify;
    padding-bottom: 20px;
    height: 300px;
  }
  .caption2{
    margin-top: 30px;
    width: 100%;
    margin: auto;
    height: 200px;
    padding: 20px 0px;
  }
 
  
  .lis{
    margin: auto;
    text-align: center;
  }
  
  .say{
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
  }
  .clients h1{
    color: black;
  }
  .rem{
    text-align: center;
    margin-top: 20px;
    padding: 20px;
  }
  

  
</style>
