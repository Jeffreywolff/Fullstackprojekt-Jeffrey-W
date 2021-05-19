<template>
  <div class="chat">
    <Navbar></Navbar>
    
    <main>

      <aside>

        <div id="servers">

          <div id="server-1">1
            <p>hello</p>

          </div>
          
          <div id="server-2">2</div>
          <div id="server-3">3</div>


        </div>

        
      </aside>
      <section></section>

    </main>


  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Chat',
  components: {
    Navbar,
  }
  
}
</script>


<style lang="scss" scoped>
  #server-1{


    p{
      color: red;
    }
  }
</style>