<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="w-full max-w-[65ch] mx-auto">
    <RouterLink :to="{ name: 'event-details', params: { id: event.id } }">
      <div
        class="relative px-6 sm:px-10 pt-10 pb-16 transition-all bg-white border border-gray-300 rounded shadow hover:shadow-lg hover:shadow-gray-100 hover:scale-[101%] prose max-w-none"
      >
        <div class="absolute text-gray-400 top-10 right-10">
          <i class="fa-regular fa-bookmark" title="Save event"></i>
        </div>

        <div class="flex flex-col gap-y-2">
          <div>
            <i class="text-gray-400 fa-regular fa-calendar"></i>
            <span class="ms-3">{{ event.date }} </span>
          </div>

          <div>
            <i class="text-gray-400 fa-regular fa-clock"></i>
            <span class="ms-3">{{ event.time }} EAT</span>
          </div>
        </div>

        <h2 class="mt-6 text-balance">{{ event.title }}</h2>

        <p class="text-gray-500">
          <i class="text-gray-400 fa-solid fa-location-dot"></i
          ><span class="ms-3">{{ event.location }}</span>
        </p>
      </div>
    </RouterLink>
  </div>
</template>
