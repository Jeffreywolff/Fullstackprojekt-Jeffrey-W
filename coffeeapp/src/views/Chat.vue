<template>
  <div class="">

    <Navbar></Navbar>
    <div class="chat container-fluid">
      <div id="servers-body" class="col py-2">
        <h4><strong>Friend list</strong></h4>
        <form>
          <input type="text" name="search" placeholder="Search..">
        </form>

        <div id="friend-list" class="d-flex flex-column my-5">


          <div id="friend" class="d-flex flex-row py-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="" class="mx-3">

            <span class="d-flex flex-column justify-contents-center align-items-start">
              <h6><strong>Mattias Mårtensson</strong></h6>
              <p><strong>Du har sått din sista potatis...</strong> </p>
            </span>

            <span>
              <p id="timestamp">9:46 pm</p>
            </span>
          </div>

          <div id="friend" class="d-flex flex-row py-2">
            <img src="https://quickbutik.imgix.net/11130k/products/5fa058b1600b7.png" alt="" class="mx-3">

            <span class="d-flex flex-column justify-contents-center align-items-start">
              <h6><strong>Pontus Forsler Mott</strong></h6>
              <p>Du har sått din sista potatis...</p>
            </span>

            <span>
              <p id="timestamp">8:52 pm</p>
            </span>
          </div>

          <div id="friend" class="d-flex flex-row py-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nils_Arne_Eggen.JPG/1200px-Nils_Arne_Eggen.JPG"
              alt="" class="mx-3">

            <span class="d-flex flex-column justify-contents-center align-items-start">
              <h6><strong>Nils Björndahl</strong></h6>
              <p>Du har sått din sista potatis...</p>
            </span>

            <span>
              <p id="timestamp">7:00 pm</p>
            </span>
          </div>
        </div>
      </div>

      <div id="chat-body" class="col d-flex justify-content-center flex-column">
        <div id="top-bar" class="d-flex justify-content-start align-items-center flex-row">
          <img
            src="data:image/jpeg;base64,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"
            alt="" class="mx-3">
          <h4 class="my-3 mx-3">Mattias Mårtensson</h4>
          <span id="status-indicator"></span>
        </div>
        <div id="msg-body" class="d-flex flex-column">
          Chat body
          <div class="text-msg">
            <span><p>Hi! How are you?</p></span>
          </div>

          <div class="text-msg">
            <span><p>I'm fine, just drinking my coffee and studying! You?</p></span>
          </div>
          
          <div class="text-msg">
            <span><p>Nice! Just finished work and got here!</p></span>
          </div>
        </div>
        <div id="textbox"></div>

      </div>
      <div id="profile-body" class="col">
        profile-body

      </div>
    </div>


  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'Chat',
    components: {
      Navbar,
    },

    data() {
      return {
        friendList: [{
          Name: 'Mattias Mårtensson',
          message: 'Yeye'
        }]
      };
    }


  }
</script>


<style lang="scss" scoped>
  @import "@/scss/variables.scss";
  @import "@/scss/mixins.scss";

  .chat {
    width: 100%;
    height: 100vh;
    @include d-flex(center, center);
    border-radius: 2rem;
    border: 2px solid black;
    padding: 0;

  }


  input[type=text] {
    width: 80%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 2rem;
    font-size: 16px;
    background-color: white;
    background-image: url('../assets/searchicon.svg');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 8px 20px 8px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }


  #servers-body {
    background-color: #ededed;
    height: 100%;
    border-top-left-radius: 2rem;

  }

  #friend {
    background-color: #ededed;
    margin-bottom: 5px;
    width: 100%;

    img {
      border: 3px solid #f3f3f3;
      border-radius: 100%;
      width: 80px;
      height: 80px;
      background-position: center;

    }

    #timestamp {
      font-size: 0.8rem;
      color: rgb(121, 121, 121);
    }
  }

  #friend:hover {
    background-color: #dddddd;
    cursor: pointer;
  }

  #top-bar{
    height: 90px;
    width: 100%;
    border-bottom: 2px solid black;
    img{
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
    #status-indicator{
      background-color: #44d600;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
    }
  }

  #msg-body{
    height: 100%;
    width: 100%;
    background-color: #dadada;

    .text-msg{
      height: 200px;
      display: flex;
    }
  }
</style>