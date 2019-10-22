import CreateStory from "./components/CreateStory.vue";
import Homepage from "./components/Homepage.vue";
import Stories from "./components/Stories.vue";
import Story from "./components/Story.vue";
import Signin from "./components/Signin.vue";
import Register from "./components/Register.vue"

export default [
    {path:'/', component: Homepage},
    {path: '/createstory', component: CreateStory},
    {path: '/stories', component: Stories},
    {path: '/login', component: Signin},
    {path: '/register', component: Register},
    {path: '/story/:id', component: Story}
]