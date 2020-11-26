<template>
  <div>
    <section class="banner">
      <div class="container wrap"> 
        <div class="row">
          <div class="col">
            <b-jumbotron >
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

                <b-button variant="primary" href="#">Do Something</b-button>
                <b-button variant="danger" href="#">Do Something Else</b-button>
              </b-jumbotron>
          </div>
          <div class="col-md slide">

          </div>
        </div>
      </div>
    </section>
    <div class="quote">

    </div>
    
    <div class="clients">

    </div>
    <div class="influencers">
       <b-container>
        <span class="header">What we do</span>
        <hr>
        <b-row align-h="center">
          <b-col cols="12" md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            </b-card>
          </b-col>
          <b-col cols="12" md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            </b-card>
          </b-col>
          <b-col cols="12" md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
            </b-card>
          </b-col>
          <b-col cols="12" md="3" class="inf">
            <b-card class="text">
            <h4>Name</h4> 
            platform <br/>
            4k followers
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum eveniet nobis provident 
            natus inventore? Dicta architecto, aperiam
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
  .banner{
    width: 100%;
    min-height: 600px;
  }
  .slide{
    background: url(.././assets/pexels-magnus-mueller-2818118.jpg);
    background-size: cover;

    /* height: 50%; */
  }

  .jum{
    background-color: rgba(138, 128, 128, 0);
     color: #fff;
     margin-top: 50px;
     text-align: center;
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
  .text{
    background-color: rgb(205, 205, 214);
    padding-bottom: 10px;
    height:700px;
  }
  .inf{
    padding-bottom: 10px;
    margin-top: 10px;
    
  }
  .lis{
    margin: auto;
    text-align: center;
  }

  
</style>
