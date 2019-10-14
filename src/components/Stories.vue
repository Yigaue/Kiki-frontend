<template>

  <section>
      <form class="form-inline my-4 my-lg-5 container">
      <input class="form-control mr-sm-2" type="search"  v-model="search" placeholder="Search stories" aria-label="Search">
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
      
      <div v-for="story in stories" :key="story.title">
     <router-link v-bind:to="'/story/'+ story.id"><h2 class="p-2"> {{story.title}}
     </h2></router-link>
      <span> By {{story.author}}</span>
    <!-- <img class = "img-fluid p-3" src="../assets/image/box.jpg"> -->
     
      <article class="container mb-4 p-3">
          {{story.content | extract-content}}
    </article>
</div>

    
    </section>
</template>

<script>
export default {
    data(){
        return{
            stories:[],
           submitted: false,
           hidden: true,
            search: ''
        }
    },
   methods: {

   } ,
   
   created () {
       this.$http.get('https://kiki-bc8c1.firebaseio.com/posts.json').then(function(data){
           return data.json();
       }).then(function(data){
             let storyArray = [];
           for (let key in data){
               data[key].id = key;
               storyArray.push(data[key]);
           }
           this.stories = storyArray;
       })
   },
   computed: {
       searchStories: function (){
           return this.stories.filter((story) => {
               return story.title.match(this.search);
           });
       }
     }
   }

</script>
<style scoped>

article{
    text-align: justify;
    font-family:sans-serif;
    background: rgb(249, 248, 248);
}
h2{
    text-align: center;
    font-size: 22px;
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