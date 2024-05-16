<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <RouterLink to="/events">
    <div
      class="px-10 pt-10 pb-16 transition-all bg-white border border-gray-300 rounded shadow hover:shadow-lg hover:shadow-gray-100 hover:scale-[101%] prose mx-auto"
    >
      <p>{{ event.date }} <span class="mx-2">&sdot;</span> {{ event.time }} EAT</p>
      <h3 class="mt-4">{{ event.title }}</h3>
      <p>@ {{ event.location }}</p>
    </div>
  </RouterLink>
</template>
