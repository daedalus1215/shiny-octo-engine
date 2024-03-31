<template>
  <the-header title="RememberMe"></the-header>
  <StoredResources :resources="storedResources"/>
</template>

<script>
import ResourceItem from './components/learning-resources/ResourceItem.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    ResourceItem,
    StoredResources,
    TheHeader
  },
  data() {
    return {
      storedResources: [
        { id: 'official-guide', title: 'Official Guide', description: 'The official vueJS documentation', link: 'https://vuejs.org' },
        { id: 'google', title: 'Google', description: 'Search Engine', link: 'https://google.com' },

      ]
    }
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