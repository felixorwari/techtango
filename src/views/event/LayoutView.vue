<script setup>
import { ref, computed, onMounted } from 'vue'
import EventService from '@/services/EventService.js'
import LoadingContent from '@/components/LoadingContent.vue'

const props = defineProps({
  id: {
    required: true
  }
})
const event = ref(null)
const id = computed(() => props.id)

onMounted(() => {
  // fetch event using 'id'
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <LoadingContent v-if="!event" />

  <div v-else>
    <div class="mx-auto prose">
      <h1 class="font-bold">{{ event.title }}</h1>

      <hr class="mb-4" />

      <div class="flex mb-12 gap-x-10 navigation">
        <RouterLink
          :to="{ name: 'event-details' }"
          exactActiveClass="text-lime-600"
          class="no-underline transition-all hover:text-lime-600 hover:underline hover:underline-offset-4"
          >Details</RouterLink
        >
        <RouterLink
          :to="{ name: 'event-register' }"
          exactActiveClass="text-lime-600"
          class="no-underline transition-all hover:text-lime-600 hover:underline hover:underline-offset-4"
          >Register</RouterLink
        >
        <RouterLink
          :to="{ name: 'event-edit' }"
          exactActiveClass="text-lime-600"
          class="no-underline transition-all hover:text-lime-600 hover:underline hover:underline-offset-4"
          >Edit</RouterLink
        >
      </div>

      <RouterView :event="event" />
    </div>
  </div>
</template>
