<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- :event="event" sends in each event we are iterating through, we set props to object in eventcard.vue -->
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: [] // to add axios response to an array
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data // sets response data to events array
      })
      .catch(error => {
        console.log('There was an error: ' + error.message)
      })
  }
}
</script>
