const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                { id: 'manual', name: 'Manuel Lorenz', phone: '324234234', email: 'asdas@local.com' },
                { id: 'julie', name: 'Julie Lorenz', phone: '3242353453', email: 'sadfa@local.com' },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app')