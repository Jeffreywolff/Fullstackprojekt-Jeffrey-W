<template>
  <div>
    
        <router-view />
  </div>

</template>


<script>
  import Navbar from '@/components/Login.vue'

  export default {
    name: 'app',
    components: {
      Navbar,
    }
  }
</script>

<style lang="scss">
  @import "@/scss/variables.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  
</style>