<template>
    <div>
        <form action="/" method="post" class="d-flex align-items-center flex-column">
        
         <h2 class="card-title"> <strong>Account Login</strong></h2>

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
        
        <div id="ForgotPass" class="d-flex justify-content-end align-items-start">
            <a href="">Forgot password? </a>
            
        </div>

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
div{
    width: 100%;
}
    
    form{
        width: 100% !important;
    }

    form h2{
        width: 90%;
        color: #1b75eb;
    }

    #input-container{
        width: 90%;
        margin: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
    }

    

    #input-container label:hover{
        fill: #1b75eb;
        color: #1b75eb;
    }

    #input-container input{
        width: 100%;
        background-color: rgb(233, 233, 233);
        border: 0px solid rgb(94, 94, 94);
        height: 45px; 
        border-radius: 3px;       
    }

    #ForgotPass{
        width: 90%;
    }

    #ForgotPass a{
        
        text-decoration: none;
        color: #1b75eb;
        font-size: 0.8rem;
    }

    #ForgotPass a:hover{
        text-decoration-line: underline;
    }

    button{
        width: 70%;
        height: 40px;
        margin: 5px;
        background: #1b75eb;
        
        color: #fff;
        border: none;
        border-radius: 3px;
        
    }

    button:hover{

        background: #114d9b;
        

    }



/*
background: rgb(24,126,240);
background: linear-gradient(45deg, rgba(24,126,240,1) 0%, rgb(61, 228, 243) 100%);


*/

</style>

