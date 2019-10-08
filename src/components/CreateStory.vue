<template>
    <!-- Default form contact -->
    <div class="container card" p-5>

    <div class="row">

<div class="col-md-6" style="background-color: #ddcee27a">
    <form class="p-2">
    <h2 class="h4 mb-4">Create a Story</h2>
       
    <div class="form-group col-md-6">
    <label for="exampleFormControlInput1">Title</label>
    <input v-model.lazy ="story.title" type="text" id="defaultContactFormName" class="form-control " placeholder="Title">
    </div>
    <div class="form-group col-md-6">
    <label>Author</label>
    <input v-model.lazy ="story.author" type="email" id="defaultContactFormEmail" class="form-control" placeholder="Author">
    </div>
   
    <label>Content</label>
    <div class="form-group">
        <textarea v-model ="story.content" class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" col = "7" placeholder="Write your story"></textarea>
    </div>

        <div class="form-group">
       <!-- Send button -->
    <button v-on:click ="Submit" :class ="{validinput:is-valid}" class="btn btn-primary" type="submit">Create Story</button>
    </div> 
        
</form>
</div>
<div card-body class="col-md-6" id="preview" style="background-color:#8b769417 ">
    <h3>Preview story</h3>
         <p>Title: {{story.title}}</p>
        <p>author: {{story.author}}</p>
        <p>content: </p>
        <p class="card">{{story.content}}</p>
        </div>
</div><!--div/row  -->
</div><!--div/card  -->
</template>

<script>
export default {
    data(){
        return{

            story:
            {
                 title: "",
            content: "",
            author: "",
            },
           'is-valid' : false,
        }
    },
    methods: {
        Submit() {
            this.is-valid;
        }
    }
}
</script>

<style scoped>

div.container{
    margin: 5% auto;
    border: none;
}
</style>