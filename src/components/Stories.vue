<template>
  <section>
    <form class="form-inline my-4 my-lg-5 container">
      <input class="form-control mr-sm-2" type="search"  v-model="search" placeholder="Search stories" aria-label="Search">
        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div v-if="errored">
      <p>Ops!!! seems you lost your connection</p>
    </div>
    <div v-else class="cotent">
      <div v-if="loading" class="loader"></div>
        <div  v-else v-for="story in stories" :key="story.id">
            <router-link v-bind:to="'/story/'+ story.id">
                <h2 class="p-2"> {{story.title}}</h2>
            </router-link>
            <span> By {{story.author}}</span>
            <span> {{story.image}}</span>
            <!-- <img class = "img-fluid p-3" src="../assets/image/box.jpg"> -->
            
            <article class="container mb-4 p-3">
                {{story.content | extract-content}}
            </article>
        </div>
    </div>
     
  </section>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            stories: null,
            submitted: false,
            hidden: true,
            search: '',
            errored: false,
            loading: true,
        }
    },
    methods: {
   } ,
  
   mounted () {
        axios.get('https://kikiapp-api.herokuapp.com/api/stories')
        .then(response => {
        this.stories = response.data })
        .catch(error => { 
            console.log(error)
            this.error = true;
        })
        .finally(() => this.loading = true)
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
.loader {
  border: 5px solid #9e9696a2; /* Light grey */
  border-top: 5px solid rgb(121, 88, 88); /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.2s linear infinite;
  margin:auto
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.content {
    margin: 50px;
}
</style>