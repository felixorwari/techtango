<template>
  <div class="min-h-screen prose text-center">
    <span class="block my-12 font-extrabold text-9xl">404</span>
    <h1 class="font-bold">Not Found!</h1>
    <p>Oops! We couldn't find that page.</p>
    <RouterLink
      :to="{ name: 'event-list' }"
      class="px-6 py-2 text-sm tracking-wide text-white no-underline uppercase transition-all rounded shadow bg-lime-600 hover:shadow-xl hover:bg-lime-500"
      >Events</RouterLink
    >
  </div>
</template>
