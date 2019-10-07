<template>
  <div id="app">
    <kiki-header> </kiki-header>
    <kiki-homepage>
     
    </kiki-homepage>
    <create-story></create-story>
    <kiki-footer> </kiki-footer>
    
    
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';
import Footer from './components/Footer.vue';
import CreateStory from './components/CreateStory.vue';

export default {
  name: 'app',
  components: {
    'kiki-header': Header,
    'kiki-footer': Footer,
    'kiki-homepage': Homepage,
    'create-story': CreateStory,
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
