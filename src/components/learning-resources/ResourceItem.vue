<template>
    <li>
        <base-card>
            <div>
                <header>
                    <h3>{{ title }}</h3>
                    <base-button>Delete</base-button>
                </header>
            </div>
            <p>{{ description }}</p>
        </base-card>
        <nav>
            <a :href="link">View Resource</a>
        </nav>
    </li>
</template>

<script>
export default {
    props: ['title', 'description', 'link']
}
</script>


<style scoped>
li {
    list-style-type: none;
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>