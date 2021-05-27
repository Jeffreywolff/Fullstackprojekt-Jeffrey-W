<template>
  <div>
    <Navbar id="nav"></Navbar>
    <div id="main-body" class="container-fluid d-flex flex-row py-3">
      <div class="container-fluid d-flex flex-row p-1" style="width: 100%;">
        <div id="servers-body" class="py-2">
          <h3>Server List</h3>

          <div id="sidebar" class="flex-shrink-0 p-3" style="width: 280px;">
            <li class="border-top my-1"></li>
            <ul class="list-unstyled ps-0">
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                  data-bs-target="#home-collapse" aria-expanded="true">
                  Starbucks
                </button>
                <div class="collapse" id="home-collapse" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Over Bølgen 1, Danmark</a></li>
                    <li><a href="#" class="link-dark rounded">Store Torv 18 Borgporten, Danmark</a></li>
                    <li><a href="#" class="link-dark rounded">Aalborg Storcenter</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Espresso House
                </button>
                <div class="collapse" id="dashboard-collapse" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Frölunda torg</a></li>
                    <li><a href="#" class="link-dark rounded">Mölndals Galleria</a></li>
                    <li><a href="#" class="link-dark rounded">Sahlgrenska</a></li>
                    <li><a href="#" class="link-dark rounded">Kungsportsavenyn 28</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#orders-collapse" aria-expanded="false">
                  Johan & Nyströms
                </button>
                <div class="collapse" id="orders-collapse" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Odengatan 62</a></li>
                    <li><a href="#" class="link-dark rounded">Swedenborgsgatan 7</a></li>
                    <li><a href="#" class="link-dark rounded">Hantverkargatan 7</a></li>
                    <li><a href="#" class="link-dark rounded">Lyftkransvägen 11</a></li>
                  </ul>
                </div>
              </li>
              <li class="border-top my-3"></li>
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#account-collapse" aria-expanded="false">
                  Account
                </button>
                <div class="collapse" id="account-collapse" style="">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Friends</a></li>
                    <li><a href="#" class="link-dark rounded">Profile</a></li>
                    <li><a href="#" class="link-dark rounded">Settings</a></li>
                    <li><a href="#" class="link-dark rounded">Sign out</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div id="chat" class="w-100">
          <div id="top-frame" class="d-flex flex-row align-items-center">
            <div id="CoffeeImg"></div>
            <h3 id="chat-name" class="mx-3 py-3">Starbucks Coffee Chat</h3>
          </div>
          <div id="chat-body" class="p-2">
            <div id="msg-frame" class="">
              <span class="d-flex flex-column align-items-start w-100">
                <p id="msg-body-other" class="p-2">Are you happy are you satisfied?</p>
                <small class="text-muted">11.34 am</small>
              </span>

            </div>

            <div id="msg-frame" class="d-flex justify-content-end">
              <span class="d-flex flex-column align-items-end w-100">
                <p id="msg-body-you" class="p-2">How long can you stand the heat</p>
                <small class="text-muted">12.44 pm</small>
              </span>

            </div>

            <div id="msg-frame">
              <span class="d-flex flex-column align-items-start w-100">
                <p id="msg-body-other" class="p-2">Out of the doorway the bullets rip</p>
                <small class="text-muted">12.56 pm</small>
              </span>

            </div>

            <div id="msg-frame" class="d-flex justify-content-end">
              <span class="d-flex flex-column align-items-end w-100">
                <p id="msg-body-you" class="p-2">To the sound of the beat look out</p>
                <small class="text-muted">1.30 pm</small>
              </span>

            </div>

            <div id="msg-frame">
              <span class="d-flex flex-column align-items-start w-100">
                <p id="msg-body-other" class="p-2">Another one bites the dust</p>
                <small class="text-muted">2.13 pm</small>
              </span>
            </div>

            <div id="msg-frame">
              <span class="d-flex flex-column align-items-start w-100">
                <p id="msg-body-other" class="p-2">Another one bites the dust</p>
                <small class="text-muted">4.34 pm</small>
              </span>
            </div>
          </div>

          
          <div id="bottom-bar" class="">
            <input type="text" placeholder="Type a message..." />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                  </svg>
              </button>
          </div>


        </div>



      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      Navbar,
      Footer,
    }
  }
</script>
<style lang="scss">
  // * {
  //   border: 1px solid black;
  // }

  #nav {
    background: rgb(206, 147, 107);
    background: linear-gradient(135deg, rgba(206, 147, 107, 1) 0%, rgba(191, 126, 82, 1) 33%, rgba(153, 67, 52, 1) 100%);
    background-size: 300%;
    animation: bgcGradient 10s infinite alternate;
  }

  @keyframes bgcGradient {
    0% {
      background-position: left;
    }

    100% {
      background-position: right;
    }
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: #ffffff;
  }

  body::-webkit-scrollbar-thumb {
    background: #9b9b9b;
    border-radius: 1rem;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: #4b4b4b;
  }

  #main-body {
    height: 100vh;
    background: rgb(206, 147, 107);
    background: linear-gradient(315deg, rgba(206, 147, 107, 1) 0%, rgba(191, 126, 82, 1) 33%, rgba(153, 67, 52, 1) 100%);
    background-size: 300%;
    animation: bgcGradient 10s infinite alternate;
  }

  #servers-body {
    font-family: asap-regular;
    width: 25%;
    background-color: #2c3f47;
    height: 100%;

    h3 {
      color: #fff;

      padding: 2rem;

    }
  }

  #top-frame {
    background-color: #2c3f47;
    color: #fff;
    height: 15%;

    #CoffeeImg {
      width: 80px;
      height: 80px;
      border: 3px solid black;
      border-radius: 100%;
      margin: 1rem;
      background-image: url('https://qsr.se/wp-content/uploads/starbucks-logo-png-transparent-0.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

  }

  #sidebar {

    button {
      color: white;
    }

    li {
      a {
        color: white;
      }

    }

  }

  @font-face {
    font-family: asap;
    src: url('../assets/fonts/Asap/static/Asap-Medium.ttf');
  }

  @font-face {
    font-family: asap-regular;
    src: url('../assets/fonts/Asap/static/Asap-Regular.ttf');
  }

  #chat{
    height: 100%;
    width: 100%;
  }

  #chat-name {
    font-family: asap;
  }


  #chat-body {
    width: 100%;
    position: relative;
    height: 79%;

    background-color: #f1eeea;
    overflow: auto;
  }

  #chat-body::-webkit-scrollbar {
    width: 8px;
  }

  #chat-body::-webkit-scrollbar-track {
    background: #ffffff;
  }

  #chat-body::-webkit-scrollbar-thumb {
    background: #9b9b9b;
    border-radius: 1rem;
  }

  #chat-body::-webkit-scrollbar-thumb:hover {
    background: #4b4b4b;
  }

  #msg-frame {
    width: 100%;
    height: auto;
    padding: 10px;

    small {
      font-size: 0.6rem;
      margin-top: -10px;
    }
  }

  #msg-body-other {
    width: 25%;
    border-radius: 0.5rem;
    background-color: #0075ac;
    font-size: 0.87rem;
    color: #fff;
    font-family: asap-regular;
    border-bottom-left-radius: 0px;
    text-align: left;
  }

  #msg-body-you {
    width: 25%;
    border-radius: 0.5rem;
    background-color: #00ac95;
    font-size: 0.87rem;
    color: #fff;
    font-family: asap-regular;
    border-bottom-right-radius: 0px;
    text-align: left;
  }

  #bottom-bar {
    
    width: 100%;
    height: 50px;
    background: #fff;
    

    button {
      border: none;
      background-color: #fff;
    }
  }

  input {
    height: 90%;
    padding: 7px;
    width: 90%;
    left: 5%;
    border: 0;
    top: 13px;
    background: #fff;
    color: #2c3f47;
  }
</style>