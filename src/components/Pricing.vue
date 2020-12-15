<template>
  <div>
    <section class="hhr">
      <div class="container wrap"> 
        <div class="row">
          <div class="col ">
            <h1 class="sup">
             <span > Pricing</span> 
           </h1>
          </div>
        </div>
      </div>
    </section>
    <div class="influencer">
       <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="3" class="inif">
            <b-card class="text">
            <h2>Regular Plan</h2> 
           <h1>N 2000</h1>
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
                 <li>
                  increase brands and influencers socials
                </li>
                <li>
                  Get paid for advert
                </li>
              </ul>
              <hr>
              <b-nav-form>
          
          <b-button size="md" class=" my-md-1 btt" route to="/register" >Buy Plan</b-button>
        </b-nav-form>
            </b-card>
          </b-col>
          <b-col cols="12" md="3" class="inif">
            <b-card class="text">
            <h2>Premuin Plan</h2> 
            <h1>N 10,000</h1>
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
                 <li>
                  increase brands and influencers socials
                </li>
                <li>
                  Get paid for advert
                </li>
              </ul>
              <hr>
              <b-nav-form>
          
          <b-button size="md" class=" my-md-1 btt" route to="/register" > Buy Plan</b-button>
        </b-nav-form>
            </b-card>
          </b-col>
          <b-col cols="12" md="3" class="inif">
            <b-card class="text">
            <h2>Gold Plan</h2> 
            <h1>N 30,000</h1>
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
                 <li>
                  increase brands and influencers socials
                </li>
                <li>
                  Get paid for advert
                </li>
              </ul>
              <hr>
              <b-nav-form>
          
          <b-button size="md" class=" my-md-1 btt" route to="/register" >Buy Plan</b-button>
        </b-nav-form>
            </b-card>
          </b-col>
        </b-row>
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
    color: rgb(11, 156, 19);
  }
  
  .slide{
    background: url(.././assets/pexels-magnus-mueller-2818118.jpg);
    background-size: cover;

    /* height: 50%; */
  }

  
  .hr{
   background-color: #fff;
  }
  .quote{
    background-color: rgb(255, 255, 255);
    height: 200px;
  }
  .wrap{
    margin-top: 30px;
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

  .text{
     border: solid green;
    background-color: rgb(255, 255, 255);
    padding-bottom: 10px;
    
  }
  .inif{
    padding-bottom: 10px;
    /* margin-top: 400px; */
    height:500px;
    
  }
  .lis{
    margin: auto;
    text-align: center;
  }
  .influencer{
    margin-top: 159;
    height: 700px;
  }
  .hhr{
    height:200px ;
    margin: 20px;
    padding: 20px;
    color: yellow;
  }

  
</style>
