import axios from 'axios'
// a single Axios instance for our entire app
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for all calls to use
  withCredentials: false, // For authentication & configuration
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  // we call an event which receives an id
  getEvent(id) {
    return apiClient.get('/events/' + id) // we tell api server which event to fetch
  }
}
