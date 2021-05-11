<template>
    <footer class="">
            <div class="container-fluid row py-5">
                <div id="footer-container" class="col-12 col-md">
                    <p><strong>Links</strong></p>   
                </div>
                <div id="footer-container" class="col-12 col-md">
                    <p class=""><strong>Social</strong></p>  
                    
                    </div>
                <div id="footer-container" class="col-12 col-md">
                    <p><strong>Contact</strong></p>  

                </div>
                <div id="footer-container" class="col-12 col-md">
                    <p><strong>About</strong></p>  
                </div>
            </div>

            <div class="container-fluid py-5">
                <strong>Copyright &#169 - CoffeChat, INC. </strong>
                
            </div>
    

        </footer>
</template>


<script>
export default {
    name: 'Footer',
    
}
</script>


<style lang="css" scoped>
    
    footer{
        
        background-color: rgb(35, 39, 42);
        color: #CC1D32;
    }

    #footer-container{
        height: 20vh;
        border-right: 1px solid rgb(114, 114, 114);
        border-left: 1px solid rgb(114, 114, 114);
        
    }

</style>