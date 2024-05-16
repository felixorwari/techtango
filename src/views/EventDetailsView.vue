<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const event = ref(null)

const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  // fetch event using 'id'
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <div class="mx-auto prose">
      <h1>{{ event.title }}</h1>

      <hr />

      <div class="flex flex-col gap-4">
        <div>
          <i class="text-gray-400 fa-regular fa-calendar"></i>
          <span class="ms-3">{{ event.date }} </span>
        </div>

        <div>
          <i class="text-gray-400 fa-regular fa-clock"></i>
          <span class="ms-3">{{ event.time }} EAT</span>
        </div>
      </div>

      <div class="my-4">
        <p class="text-gray-500">
          <i class="text-gray-400 fa-solid fa-location-dot"></i
          ><span class="ms-3">{{ event.location }}</span>
        </p>
      </div>

      <p class="lead">{{ event.description }}</p>
    </div>
  </div>
</template>
