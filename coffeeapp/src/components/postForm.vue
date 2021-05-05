<template>
    <div>
        <form action="/" method="post" class="d-flex align-items-center justify-content-center flex-column m-3">


        <div id="input-container" class="">
            <span class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            </span>
            <input type="text" placeholder="Email">
            
        </div>


        <div id="input-container">
            <span class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </span>
            <input type="password" placeholder="Password">
            
        </div>
        
        <span id="ForgotPass">
            <a href=""> Forgot your password? </a>
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
    input{
        height: 35px;
    }

    #input-container{
        
        margin: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    #input-container span{
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    #input-container svg:hover{
        fill: rgba(245,8,0,1);
    }

    #ForgotPass a{
        text-decoration: none;
        color: rgba(255,0,134,1);
    }

    #ForgotPass a:hover{
        text-decoration-line: underline;
        color: rgba(255,0,134,1);
    }

    button{
        width: 70%;
        height: 40px;
        margin: 5px;
        background: linear-gradient(135deg, rgba(245,8,0,1) 0%, rgba(255,0,134,1) 100%);
        color: #fff;
        border: none;
        
    }

    button:hover{

        background: linear-gradient(135deg, rgba(106,3,0,1) 0%, rgba(128,0,67,1) 100%);

    }



</style>