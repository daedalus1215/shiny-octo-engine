<template>
  <ul>
    <learning-resource v-for="resource in storedResources" :key="resource.id"></learning-resource>
  </ul>
</template>

<script>
import ResourceItem from './components/learning-resources/ResourceItem.vue';

export default {
  components: {
    ResourceItem
  }
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