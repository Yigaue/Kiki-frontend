<template>
    
    <main class="py-4">
      <h1>{{title}}</h1>

      <div class="container-fluid">
      <section>
      <div class="row">
           
          
          <div class="col-md-6 ml-5">
              
              <span> <h2>Find a Story</h2></span>
            <img class="img-fluid" src="../assets/image/bg-2.png">
            
            </div>
        
         <div class="col-md-3 col-md-offset-2">
             <article>
            <p>
              Connect to the story you love
              and be inspired
              </p>
            <router-link to="/stories"> <button class="btn btn-primary">Get started</button> </router-link>
              </article>
        </div> 
        
      </div> 
      </section>
       <section>

          <div class="row">
           
         <div class="col-md-6 ml-5 col-md-offset-2">
             <article >
            <p>
            
             Let the world find you, and share your experience</p>
            
             <router-link to ="/createstory"><button  style= "" class="create btn btn-primary">Get started</button></router-link>
              </article>
        </div> 
         <div class="col-md-4">
              
              <span> <h2>Share your story</h2></span>
            <img class="img-fluid" src="../assets/image/bg-3.png">
            
            </div>
        
      </div> 
      </section>

       <!-- <section>
           <h2>
               Borrow a Book
            </h2>
      </section> -->
      </div>
      
    </main>

</template>

<script>
export default {
    name: 'Homepage',
    data(){
        return{
            title: 'A shout or a Wisper'
        }
    }
}
</script>

<style scoped>
main{

    /* position: absolute; */
    width: 100%;
    background: rgb(248, 247, 247);
    color: #352c2c;
    margin: 60px 0 0 0 0;
}
div {
    background:rgb(255, 254, 254);
    /* display: grid; */
}
h1{
    font-size: 30px;
    font-family: 'Lobster', cursive;
}
/* section{
   
    width: 100%;    
} */
article{
   
    text-align: left;
    /* padding: 30px;
    width: 30%;
    float:right;
    height:30%; */
   
    font-family: cursive;
    font-size: 30px;
    color:rgba(150, 129, 13, 0.801);
   
    margin: 20px auto;
    
}
    
    button {
    
        background: rgba(255, 0, 43, 0.644);
        border: none;
        font-size: 20px;
        font-family:sans-serif;
    }
 

h2{
    text-align: left;
    color: rgb(65, 10, 10);
    font-size: 70px;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

pre{
    font-family: cursive;
    color: #96810dcc;
    overflow: hidden;
    white-space: pre-wrap;
  word-wrap:inherit;
  text-align: left;
    
}
</style>