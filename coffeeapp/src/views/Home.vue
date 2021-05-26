<template>
  <div class="home">
    <Navbar id="nav"></Navbar>
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
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Login,
    MainContent,
    Footer,
    Navbar
    
  }
}
</script>

<style lang="scss">
@import "@/scss/variables.scss";

 #nav{
   background-color: #FFDF87;
 }


</style>
