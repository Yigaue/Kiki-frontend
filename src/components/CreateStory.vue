<template>
    <!-- Default form contact -->
    <div class="container card" p-5>

    <div class="row">

<div class="col-md-6" style="background-color: #ddcee27a">
    <form v-if="!submitted" class="p-2">
    <h2 class="h4 mb-4 p-4">Create a Story</h2>
       
    <div class="form-group col-md-9">
    <input v-on:keypress ="showPreview" v-model.lazy ="story.title" type="text" id="defaultContactFormName" class="form-control " placeholder="Title">
    </div>
    <div class="form-group col-md-6 create-story-img float-right">
        <img src="../assets/image/bg-2.png" class = "img-fluid" alt="create story image" width="200px" height="200px">
    </div>
    <div class="form-group col-md-9">
    <input v-model.lazy ="story.author" type="text" id="defaultContactFormEmail" class="form-control" placeholder="Author">
    </div>
   
    
    <div class="form-group col-md-12">
        <textarea v-model ="story.content" class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" col = "7" placeholder="Write your story"></textarea>
    </div>

        <div class="form-group">
       <!-- Send button -->
    <button v-on:click.prevent = "post" :class="[{hidden:hidden}, 'btn', 'btn-primary']" type="submit">Create Story</button>
    </div> 
        
</form>
</div>
<div :class ="[{hidden:hidden}, 'col-md-6', 'card-body']" id="preview" style="background-color:rgba(240, 236, 242, 0.09)">
    <h3 >Preview story</h3>
         <p class="story-title">{{story.title}}</p>
        <p>{{story.author}}</p>
        <p class="card preview">{{story.content}}</p>
        </div>
        <div v-if="submitted" class="alert alert-success fade out show" role = "alert"><p>Thanks for sharing your story</p></div>
</div><!--div/row  -->
</div><!--div/card  -->
</template>

<script>
//import axios from 'axios'
export default {
    data(){
        return{

            story:
            {
                  title: "",
            content: "",
            author: "",
            },
           submitted: false,
           hidden: true,
           
        }
    },
    // mounted (){
    //     axios
    //     .post('http;//127.0.0.1:8000/api/stories', this.story)
    //     .then(response=>{
    //            console.log(response)
    //         this.submitted = true;
    //     })

    // },
    methods: {
      //  This works perfect with vue http resource
        post: function() {
            this.$http.post('https://kikiapp-api.herokuapp.com/api/stories',this.story).then(function(data){
                 console.log(data); 
                this.submitted = true;
            });

    },
    
        showPreview: function () {
            this.hidden = false;
             
        }
    }
}
</script>

<style scoped>

div.container{
    margin: 5% auto;
    border: none;
}

.hidden {
    display: none;
    
}

 button {
    
        background: rgba(255, 0, 43, 0.644);
        border: none;
        font-size: 20px;
    }

p.preview{
    overflow-y: scroll;
    height: 400px;
}    

div.create-story-img{
    position: relative;
    bottom: 7px;
   
}

@media all and (max-width: 767px){
div.create-story-img{
    position: relative;
    bottom: 7px;
   
}
.hidden{

    display: none;
}
 button.btn-primary{
     position: relative;
     bottom : -620px;
     font-size: 18px;
     
    }
 
}
 @media all and (max-width: 600px){



 button.btn-primary{
     position: relative;
     bottom : -617px;
      height: 40px;
      width: 150px;
      font-size: 18px;
     
    }
 
} 

@media only all and (max-width: 250px){



 button.btn-primary{
     position: relative;
     bottom : -610px;
      height: 30px;
      width: 100px;
      font-size: 12px;
     
    }
 
}
@media all and (max-width: 211px){



 button.btn-primary{
     position: relative;
     bottom : -635px;
      height: 30px;
      width: 100px;
      font-size: 12px;
     
    }
 
}

label {
    float: left;
}
input{
    border: none;
    width: 100%;
}
p.card.preview{
    border: none;
}
textarea{
    border: none;
}
p.story-title{
    font-size: 18px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: capitalize;
    color: rgba(13, 13, 201, 0.705);
    word-spacing: 0.3 em;
}

</style>