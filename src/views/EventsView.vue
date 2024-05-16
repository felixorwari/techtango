<script setup>
import EventCardComponent from '@/components/EventCardComponent.vue'
</script>

<template>
  <main>
    <section class="">
      <header class="prose">
        <h1>Today's Events</h1>
      </header>

      <EventCardComponent />
    </section>

    <section class="">
      <header class="prose">
        <h1>Upcoming Events</h1>
      </header>

      <EventCardComponent />
    </section>

    <section class="">
      <header class="prose">
        <h1>Past Events</h1>
      </header>

      <EventCardComponent />
    </section>
  </main>
</template>
