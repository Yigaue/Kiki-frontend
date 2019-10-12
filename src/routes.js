import CreateStory from "./components/CreateStory.vue";
import Homepage from "./components/Homepage.vue";
import Stories from "./components/Stories.vue";
import Story from "./components/Story.vue";

export default [
    {path:'/', component: Homepage},
    {path: '/createstory', component: CreateStory},
    {path: '/stories', component: Stories},
    {path: '/story', component: Story},
]