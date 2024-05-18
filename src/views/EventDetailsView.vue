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
      event.value = response
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <div class="mx-auto prose">
      <h1 class="font-bold">{{ event.title }}</h1>

      <hr />

      <div class="flex flex-col gap-4">
        <div>
          <span class="inline-block w-6"><i class="text-gray-400 fa-regular fa-calendar"></i></span>
          <span class="ms-3">{{ event.date }} </span>
        </div>

        <div>
          <span class="inline-block w-6"><i class="text-gray-400 fa-regular fa-clock"></i></span>
          <span class="ms-3">{{ event.time }} EAT</span>
        </div>

        <div>
          <span class="inline-block w-6"
            ><i class="text-gray-400 fa-solid fa-location-dot"></i
          ></span>
          <span class="ms-3">{{ event.location }}</span>
        </div>
      </div>

      <p class="lead">{{ event.description }}</p>
    </div>
  </div>
</template>
