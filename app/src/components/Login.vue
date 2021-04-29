<template>
    <div class="Login">
        <h1>Hello Hugo</h1>
        <p>{{hugo}}</p> 
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        hugo: String,
    }
    
}
</script>


<style scoped>

</style>