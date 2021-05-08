<template>
  <div class="home">
    <Login></Login>
    <MainContent></MainContent>
    


  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'Home',
  components: {
    Login,
    MainContent
    
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
