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
    <div
      class="relative px-6 sm:px-10 pt-10 pb-[4.5rem] transition-all bg-white border border-gray-300 rounded shadow hover:shadow-lg hover:shadow-gray-100 hover:border-lime-600 hover:scale-[101%] prose max-w-none"
    >
      <div class="flex flex-col gap-2 sm:flex-row sm:gap-8">
        <div>
          <span class="inline-block w-6"><i class="text-gray-400 fa-regular fa-calendar"></i></span>
          <span class="ms-1">{{ event.date }} </span>
        </div>

        <div>
          <span class="inline-block w-6"><i class="text-gray-400 fa-regular fa-clock"></i></span>
          <span class="ms-1">{{ event.time }} EAT</span>
        </div>
      </div>

      <RouterLink
        :to="{ name: 'event-details', params: { id: event.id } }"
        class="no-underline hover:underline hover:underline-offset-4"
      >
        <h2 class="mt-6 text-balance">{{ event.title }}</h2>
      </RouterLink>

      <p>
        <span class="inline-block w-6"><i class="text-gray-400 fa-solid fa-location-dot"></i></span>
        <span class="ms-1">{{ event.location }}</span>
      </p>

      <div
        class="absolute inset-x-0 bottom-0 flex justify-center w-full gap-6 px-6 py-4 sm:px-10 bg-gray-50"
      >
        <RouterLink
          :to="{ name: 'event-details', params: { id: event.id } }"
          title="Event details"
          class="flex items-center px-4 py-2 text-xs tracking-widest no-underline uppercase border rounded-full border-lime-100 text-lime-600 bg-lime-100 hover:bg-lime-600 hover:shadow-lg hover:text-lime-50 focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
        >
          <span class="inline-block me-2"><i class="fa-regular fa-eye"></i></span>
          <span>Details</span>
        </RouterLink>

        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 text-gray-400 transition-all bg-gray-100 rounded-full hover:bg-lime-600 hover:shadow-lg hover:text-lime-50 focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
        >
          <i class="fa-regular fa-bookmark" title="Save event"></i>
        </button>
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 text-gray-400 transition-all bg-gray-100 rounded-full hover:bg-lime-600 hover:shadow-lg hover:text-lime-50 focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
        >
          <i class="fa-regular fa-share-from-square" title="Share event"></i>
        </button>
      </div>
    </div>
  </div>
</template>
