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
                  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                  featured content or information.
                </template>

                <hr class="my-4 hr">

                <p>
                  It uses utility classes for typography and spacing to space content out within the larger
                  container.
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
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-blockquote-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            <path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>
            </svg>
        <div class="row">
          <div class="col say">
             Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Similique amet velit doloremque porro quas natus? Corrupti
          </div>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-blockquote-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          <path d="M12.168 6.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L10 6.352z"/>
        </svg>
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
            <b-card class="text-center" align-v="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <hr>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum, laboriosam, 4
            quaerat earum quibusdam 
            aspernatur soluta sed, odio quo quasi excepturi? Nihil deleniti tempora non incidunt iure unde? 
            Consectetur.
            <hr>
           
            </b-card>
          </b-col>
          
        </b-row>
        <hr>
         <b-row class="lis">
        <b-col lg="8" class="caption2">
            <b-card class="text-center" align-v="">
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
      
    </div>
    <div class="influencers">
       <b-container>
        <span class="header">Meet influencers</span>
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
 
  .caption{
    margin-top: 30px;
  }
  .caption2{
    margin-top: 30px;
    margin: auto;
  }
 
  
  .lis{
    margin: auto;
    text-align: center;
  }
  
  .say{
    font-size: 27px;
    margin-top: 43px;
    text-align: center;
  }
  

  
</style>
