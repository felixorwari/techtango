<script setup>
defineProps(['event'])
</script>

<template>
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
      <span class="inline-block w-6"><i class="text-gray-400 fa-solid fa-location-dot"></i></span>
      <span class="ms-3">{{ event.location }}</span>
    </div>
  </div>

  <p class="lead">{{ event.description }}</p>
</template>
