<template>
  <div class="home">
    <Login></Login>
    <MainContent></MainContent>
    <Footer></Footer>


  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Login,
    MainContent,
    Footer
    
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
