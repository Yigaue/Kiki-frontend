<template>

<header>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand">
            <img src="../assets/image/logo.png"></router-link> 
            <button type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            class="navbar-toggler collapsed">
            <span class="navbar-toggler-icon"></span>
            </button> 
            <div id="navbarSupportedContent" class="navbar-collapse collapse" style="">
                
                 <ul class="navbar-nav mr-auto"></ul> <ul class="navbar-nav ml-auto">

                      <li class="nav-item">
                         <router-link to="/" class="nav-link">Home</router-link>
                    </li> 
                    <li class="nav-item">
                         <a href="#" class="nav-link">Login</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">Register</a>
                    </li>
                    <li class="nav-item">

                        <router-link class= "nav-link" to="/createstory">Stories</router-link>
                    </li>
                    <li class="nav-item">

                        <router-link class= "nav-link" to="/createstory">Create your story</router-link>
                    </li>
                 </ul>
            </div>
        </div>
    </nav>
    </header>
</template>
<script>
export default {
   name: 'Header', 

   data(){
       return {
           title: 'Kiki'
       }
   }
}
</script>

<style scoped>
h1{
    font-size: 30px;
    font-family: cursive;
}
</style>



