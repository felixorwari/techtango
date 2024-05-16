<script setup>
import EventCardComponent from '@/components/EventCardComponent.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const events = ref(null)

onMounted(() => {
  axios
    .get('http://localhost:3000/events?_sort=category')
    .then((response) => {
      events.value = response.data
      console.log(events)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main>
    <section class="">
      <header class="prose">
        <h1>Upcoming Events</h1>
      </header>

      <div class="flex flex-col space-y-8">
        <EventCardComponent v-for="event in events" :key="event.id" :event="event" />
      </div>
    </section>
  </main>
</template>
