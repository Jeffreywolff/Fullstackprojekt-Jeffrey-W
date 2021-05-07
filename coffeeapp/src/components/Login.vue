<template>
    <div id="login-container" class="container-fluid d-flex justify-content-center align-items-center justify-content-around">

        <div id="Coffeecup">
            <p><strong>Whether you’re a coffee fanatic,
            tea enthusiast,
            cookie monster,
            or just a student who likes studying at cafe's,
            Coffee Chat makes it easy to talk to anyone and get answers for your future test or what delightfullness is the best.</strong> </p>
        </div>
        <div id="cardo" class="card" style="width: 25rem;">
            <div class="card-body d-flex align-items-center flex-column">
                <h2 class="card-title"> <strong>Account Login</strong></h2>
                <LoginForm></LoginForm>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from "./postForm"


    export default {

        name: 'login',
        components: {
            LoginForm
        }
    }
</script>

<style lang="css" scoped>
    * {}

    
    #Coffeecup{
        background-image: url();
    }

    #login-container {
        height: 80vh;
        width: 100vw;
        padding: 0;
        margin: 0;
        /*
        background: rgb(24,126,240);
        background: linear-gradient(45deg, rgba(24,126,240,1) 0%, rgba(176,249,255,1) 100%); 
        */
        background: rgb(255,170,73);
        background: linear-gradient(45deg, rgba(255,170,73,1) 0%, rgba(246,197,175,1) 100%);

        /*
        background: rgb(245,8,0);
        background: linear-gradient(135deg, rgba(245,8,0,1) 0%, rgba(255,0,134,1) 23%, rgba(111,0,161,1) 46%, rgba(0,141,161,1) 71%, rgba(0,166,94,1) 91%);
        */
        
        background-size: 500%;
        animation: gradient-move 15s infinite alternate;
        
    }
    p{
        width: 500px;
        color: #fff;
        font-size: 1.3rem;
        text-shadow: 0px 2px 0 rgb(0, 0, 0);
    }

    #cardo{

        border-radius: 3px;
        box-shadow: 5px 5px 15px rgb(104, 104, 104);

    }

    @keyframes gradient-move {
        0% {
            background-position: left;
        }

        100%{
            background-position: right;
        }
    }

    
</style>
    