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

                <form class="form-inline narbar-light bg-light ml-4 mr-4">
      <div class="md-form my-0">
        <input class="form-control" type="text" placeholder="Search this site" aria-label="Search">
      </div>
      <button href="#!" class="btn btn-outline-secondary btn-md my-0 ml-sm-1" type="submit">Search</button>
    </form>
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
                         <a href="#" class="nav-link">Login</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link">Register</a>
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



