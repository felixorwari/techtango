<script setup>
import { ref, onMounted } from 'vue'
import EventCardComponent from '@/components/EventCardComponent.vue'
import EventService from '@/services/EventService'

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main>
    <section class="">
      <h1 class="py-8 mb-6 text-2xl font-bold text-center bg-white">Today's Events</h1>

      <div class="flex flex-col space-y-10"></div>
    </section>

    <section class="">
      <h1 class="py-8 mb-6 text-2xl font-bold text-center bg-white">Upcoming Events</h1>

      <div class="flex flex-col space-y-10">
        <EventCardComponent v-for="event in events" :key="event.id" :event="event" />
      </div>
    </section>
  </main>
</template>
