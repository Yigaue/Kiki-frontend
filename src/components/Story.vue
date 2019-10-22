<template>

  <section>
      <form class="form-inline my-4 my-lg-5 container">
      <input class="form-control mr-sm-2" type="search"  v-model="search" placeholder="Search stories" aria-label="Search">
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
      
     <div v-for="story in story" :key ="story.id">
     <header><h1 class="p-2"> {{story.title}}
     </h1>
      <span> By {{story.author}}</span>
    <!-- <img class = "img-fluid p-3" src="../assets/image/box.jpg"> -->
  
     </header>
      <article class="container mb-4 p-3">
          {{story.content}}
    </article>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          id: this.$route.params.id,
            story:null,
           submitted: false,
           hidden: true,
            search: ''
        }
    },
   
  //  created () {
  //      this.$http.get('http://127.0.0.1:8000/api/story/'+ this.id).then(function(data){
  //          return data.json();
  //      }).then(function(data){
  //        this.story = data;
  //      });
  //  }
  mounted() {
  axios
    .get('http://kikiapp-api.herokuapp.com/api/story/'+ this.id)
    .then(response => {
       this.story = response.data
    })
  },
   
   }

</script>
<style scoped>

article{
    text-align: justify;
    font-family:sans-serif;
    background: rgb(249, 248, 248);
}
h1{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform:uppercase;
}
img{
    width: 250px;
    height: 220px;
    float: left;
  clear: both;
}
</style>