<template>
  <the-header title="RememberMe"></the-header>
  <TheResources />
</template>
 
<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResource.vue'

export default {
  components: {
    TheHeader,
    TheResources
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>