<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>


<script>
import AddResource from './AddResource.vue';

export default {
    components: {
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                { id: 'official-guide', title: 'Official Guide', description: 'The official vueJS documentation', link: 'https://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Search Engine', link: 'https://google.com' },
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>