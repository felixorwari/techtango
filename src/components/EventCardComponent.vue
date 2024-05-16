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
      class="px-6 py-10 transition-all bg-white hover:bg-gray-50 border border-gray-300 rounded shadow-lg hover:scale-[102%] prose max-w-none"
    >
      <h3>{{ event.title }}</h3>

      <p>{{ event.time }} on {{ event.date }}</p>
      <p>@ {{ event.location }}</p>
    </div>
  </RouterLink>
</template>
