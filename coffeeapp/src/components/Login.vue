<template>
    <div id="login-container" class="container-fluid d-flex justify-content-center align-items-center">
        <p>Whether you’re a coffee fanatic,
            tea enthusiast,
            cookie monster,
            or just a student who likes studying at cafe's,
            Coffee Chat makes it easy to talk to anyone and get answers for your future test.</p>
        <div class="card" style="width: 20rem; height:65%;">
            <div class="card-body">
                <h1 class="card-title">Login</h1>
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
<style scoped>
    * {}

    #login-container {
        height: 80vh;
        width: 100vw;
        background: rgb(27, 1, 0);
        background: linear-gradient(135deg, rgba(27, 1, 0, 1) 0%, rgba(161, 21, 0, 1) 41%, rgba(255, 0, 134, 1) 100%);
        padding: 0;
        margin: 0;
    }
</style>