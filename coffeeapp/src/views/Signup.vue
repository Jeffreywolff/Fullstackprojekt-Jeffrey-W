<template>
    <div class="container d-flex align-items-center justify-content-center">
        <main class="form-signin py-5">
            <form method="POST" action="/createNewUser">
                <img class="mb-4" src="../assets/coffee-circle.svg" alt="" width="82" height="82">
                <h1 class="h3 mb-3 fw-normal">Create Account</h1>


                 <div class="form-floating">
                    <input type="username" class="form-control" id="floatingInput" placeholder="Username">
                    <label for="floatingInput">Username</label>
                </div>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg " type="submit">Sign in</button>
                <router-link to="/" id="route" class="">Login instead</router-link>
                

                <p class="mt-5 mb-3 text-muted">© 2021</p>
            </form>
        </main>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>

    form .form-floating{
        margin: 10px;
    }

    button{
        background-color: #82362B !important;
        color: #fff !important;
        margin-bottom: 10px;
    }

    button:hover{
        background-color: #50231c !important;
    }

    

    #route{
        color: #000;
        text-decoration: none !important;
    }

    #route:hover{
        text-decoration: underline !important;
    }


</style>