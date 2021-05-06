<template>
    <div>
        <form action="/" method="post" class="d-flex align-items-center flex-column">


        <div id="input-container" class="">
            <div class="d-flex flex-column align-items-start">
            <label for="email">Email</label>
            <input type="text" placeholder="">
            </div>
            
            
        </div>

        <div id="input-container">
            
            <div class="d-flex flex-column align-items-start">
            <label for="password">Password</label>
            <input type="password" placeholder="">
            </div>
            
        </div>
        
        <span id="ForgotPass">
            <a href=""> Forgot password? </a>
        </span>

        <button type="submit" value="Submit"><strong>Login</strong></button>
        
        
        </form>

    </div>
</template>


<script>
export default {
    name: 'Form'
}
</script>


<style scoped>
    
    form{
        width: 100%;
    }

    #input-container{
        
        margin: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
    }

    

    #input-container label:hover{
        fill: rgba(24,126,240,1);
        color: rgba(24,126,240,1);
    }

    #input-container input{
        width: 300px;
        background-color: rgb(233, 233, 233);
        border: 0px solid rgb(94, 94, 94);
        height: 45px;
        
        
    }

    #ForgotPass a{
        text-decoration: none;
        color: rgb(24,126,240);
    }

    #ForgotPass a:hover{
        text-decoration-line: underline;
    }

    button{
        width: 70%;
        height: 40px;
        margin: 5px;
        background: rgb(24,126,240);
        background: linear-gradient(45deg, rgba(24,126,240,1) 0%, rgb(61, 228, 243) 100%);
        color: #fff;
        border: none;
        
    }

    button:hover{

        background: rgb(24,126,240);
        background: linear-gradient(45deg, rgb(13, 70, 136) 0%, rgb(93, 132, 136) 100%);

    }



</style>