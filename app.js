const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manual', name: 'Manuel Lorenz', phone: '324234234', email: 'asdas@local.com' },
                { id: 'julie', name: 'Julie Lorenz', phone: '3242353453', email: 'sadfa@local.com' },
            ]
        }
    },
    methods: {

    }
})

app.component('friend-contact', {
    template: `
    <li :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide':'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{friend.phone}}</li>
          <li><strong>Email:</strong> manuel@localhost.com</li>
        </ul>
      </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend:  { id: 'manual', name: 'Manuel Lorenz', phone: '324234234', email: 'asdas@local.com' }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app')