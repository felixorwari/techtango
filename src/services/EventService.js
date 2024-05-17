import axios from "axios";

const apiClient = axios.create({
    baseURL: '/data',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events.json')
    },

    async getEvent(id) {
        return this.getEvents().then((response) => {
            return response.data.filter((data) => data['id'] == id)[0]
        })
    }
}