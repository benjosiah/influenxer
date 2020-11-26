<template>
  <div>
    <div class="container">
      <b-row align-h="center" class="mt-5 wrap" >
       <b-col lg="6">
         <h3 class="mb-4">Register</h3>
         <b-card class="card">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
        id="input-group-1"
        label="Full Name :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          required
          placeholder="Enter Full name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Phone Number :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.number"
          type="number"
          required
          placeholder="Enter number"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">A Brand</b-form-checkbox> 
          <b-form-checkbox value="me">A Micro-influencer</b-form-checkbox> 
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Confirm Password :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="password"
          required
          placeholder="Confirm password"
        ></b-form-input>
      </b-form-group>

    

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <div class="d-flex justify-content-between">
        
          <b-button type="submit" variant="primary">Submit</b-button><br>
          <b-button type="submit" variant="success">Don't have an account? </b-button>
        
        <!-- <div>
          <a href=""> Forgot password?</a>
        </div> -->
        
        <!-- <a href="">Don't have an account?</a> -->
      </div>
      
      
    </b-form>
        </b-card>
       </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: ' ',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.card{
  width:100%
}

</style>
