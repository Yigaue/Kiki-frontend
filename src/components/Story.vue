<template>

  <section>
      <form class="form-inline my-4 my-lg-5 container">
      <input class="form-control mr-sm-2" type="search"  v-model="search" placeholder="Search stories" aria-label="Search">
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
      
     
     <header><h1 class="p-2"> {{story.title}}
     </h1>
      <span> By {{story.author}}</span>
    <!-- <img class = "img-fluid p-3" src="../assets/image/box.jpg"> -->
     </header>
      <article class="container mb-4 p-3">
          {{story.content}}
    </article>

    </section>
</template>

<script>
export default {
    data(){
        return{
          id: this.$route.params.id,
            story:{},
           submitted: false,
           hidden: true,
            search: ''
        }
    },
   
   created () {
       this.$http.get('https://kiki-bc8c1.firebaseio.com/posts/'+ this.id + '.json').then(function(data){
           return data.json();
       }).then(function(data){
         this.story = data;
       });
   }
   
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