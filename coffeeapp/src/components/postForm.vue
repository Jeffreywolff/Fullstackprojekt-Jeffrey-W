<template>
    <div>
        <form action="/" method="post" class="d-flex align-items-center justify-content-center flex-column">
        

        <div id="input-container">
            
            <input type="text" placeholder="Email">
            
        </div>


        <div id="input-container">
            
            <input type="password" placeholder="Password">
            
        </div>

        
        
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
        height: 35px;
        margin: 10%;
    }
</style>