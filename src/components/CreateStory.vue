<template>
    <!-- Default form contact -->
    <div class="container card">
<form class="border border-light p-2 col-md-9 card-body" action="#!">

    <h2 class="h4 mb-4">Create a Story</h2>
    <div class="form-group col-md-6">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" id="defaultContactFormName" class="form-control " placeholder="Title">
    </div>
    <div class="form-group col-md-6">
    <label>Author</label>
    <input type="email" id="defaultContactFormEmail" class="form-control" placeholder="Author">
    </div>
   
    <label>Content</label>
    <div class="form-group col-md-9">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" placeholder="Write your story"></textarea>
    </div>

        <div class="form-group">
       <!-- Send button -->
    <button class="btn btn-primary" type="submit">Create Story</button>
        </div>
</form>
</div>
</template>
<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

</style>