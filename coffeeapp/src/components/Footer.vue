<template>
    <footer class="">
        <div class="container-fluid row py-5">
            <div id="footer-container" class="">
                <p>Remember to drink water!</p>
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

*{
    font-family: asap-regular;
}

 @font-face {
    font-family: asap-regular;
    src: url('../assets/fonts/Asap/static/Asap-Regular.ttf');
  }

    footer {
        background: rgba(153, 67, 52, 1);
        background-size: 200%;
        animation: bgcGradient 10s infinite alternate;
        color: #ffffff;
        font-family: asap-regular;
    }

    #footer-container {
        height: 2vh;
        font-family: asap-regular;

    }

    @keyframes bgcGradient {
        0% {
            background-position: left;
        }

        100% {
            background-position: right;
        }
    }
</style>