<template>
  <div class="home">
    <Login></Login>
      
    


  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
    
  }
}
</script>

<style scoped>
  
 #home{
   padding: 0;
   margin: 0;
   width: 0px;
 }


</style>
