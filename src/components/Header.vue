<template>

<header>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <img src="../assets/image/logo.png">
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
                         <router-link exact to="/" class="nav-link">Home</router-link>
                    </li> 
                    
                    <li class="nav-item">

                        <router-link exact class= "nav-link" to="/stories">Stories</router-link>
                    </li>
                    <li class="nav-item">

                        <router-link exact class= "nav-link" to="/createstory">Create your story</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link to="/login" class="nav-link">Login</router-link>
                    </li> 
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">Register</router-link>
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
.router-link-active{
    border-bottom: 0.1em solid#96810dcc; 
}
</style>



