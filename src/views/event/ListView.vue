<script setup>
import { ref, onMounted } from 'vue'
import EventCardComponent from '@/components/EventCardComponent.vue'
import EventService from '@/services/EventService'
import LoadingContent from '@/components/LoadingContent.vue'

const events = ref(null)

onMounted(() => {
  EventService.getAllEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main class="min-h-screen">
    <LoadingContent v-if="!events" />

    <section v-else>
      <h1 class="pb-8 mb-6 text-2xl font-bold text-center bg-white">Upcoming Events</h1>

      <div class="flex flex-col space-y-10">
        <EventCardComponent v-for="event in events" :key="event.id" :event="event" />
      </div>
    </section>
  </main>
</template>
