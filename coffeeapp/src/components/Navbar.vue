<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a id="nav-brand" class="navbar-brand" href="#">

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Login</router-link>
          </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/chat">Chat</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
          
</template>


<script>
export default {
  name: "Navbar",
};
</script>


<style lang="css">

    #nav-brand{
        width: 80px;
        height: 80px;
        background-image: url('../assets/coffee-circle.svg');
        background-position: center;
        background-size: contain;
        
    }


</style>