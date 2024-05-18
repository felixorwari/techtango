import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/data',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllEvents() {
    return apiClient.get('/events.json')
  },

  async getEvent(id) {
    return this.getAllEvents().then((response) => {
      return response.data.filter((data) => data['id'] === parseInt(id))[0]
    })
  }
}
