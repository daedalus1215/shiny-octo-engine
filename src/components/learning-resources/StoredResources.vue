<template>
    <ul>
        <resource-item 
        v-for="resource in resources" 
        :key="resource.id" 
        :title="resource.title"
            :description="resource.description" :link="resource.link" />
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
    components: {
        ResourceItem
    },
    inject: ['resources']
}
</script>

<style scoped>
</style>