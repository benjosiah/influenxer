<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="primary" tabs >
    <b-navbar-brand route to="/" class="brand" >InFluenxer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav > 
      <b-navbar-brand route to="/influencer" class="link" active>Micro-Influencers</b-navbar-brand>
      <b-navbar-brand route to="/advert" class="link" >Advertisement</b-navbar-brand>
      <b-navbar-brand route to="/pricing" class="link" disabled>Pricing</b-navbar-brand>
    </b-navbar-nav>
     <b-navbar-nav class="ml-auto">
        <b-navbar-brand route to="/login" class="link">Login</b-navbar-brand>
        <b-nav-form>
          
          <b-button size="md" class=" my-md-1 btt" route to="/register" >Join us</b-button>
        </b-nav-form>
        

        

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
div{
  font-size: 18px;
}
.brand{
  font-size: 30px;
  padding-left: 10px;
  margin-top: 0px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.link{
  color: bisque;
  font-size: 20px;
  padding: 7px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.link:hover, .brand:hover{
  color: rgb(228, 137, 27);
}
.link:active{
  color: rgb(109, 64, 9);
}
.primary{
  background-color: rgb(5, 5, 61);
}
a{
  color: rgb(224, 218, 247);
}

</style>
