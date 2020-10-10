<template>
  <div id="app">
    <main>
    <kiki-header> </kiki-header>
    <router-view></router-view>
    <kiki-footer> </kiki-footer>
    </main>
  </div>
</template>
<script>

import Header from './components/Header.vue';

import Footer from './components/Footer.vue';


export default {
  name: 'app',
  components: {
    'kiki-header': Header,
    'kiki-footer': Footer,
    
    
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
