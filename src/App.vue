<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Events</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="py-12 mt-auto border-t border-gray-100">
    <div class="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm sm:text-center"
        >&copy; 2024 <RouterLink to="/" class="hover:underline">Tech Tango</RouterLink>. All rights
        reserved.</span
      >

      <ul class="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <RouterLink
            to="/about"
            class="transition hover:underline hover:underline-offset-4 me-4 md:me-6"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/privacy"
            class="transition hover:underline hover:underline-offset-4 me-4 md:me-6"
            >Privacy Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/terms"
            class="transition hover:underline hover:underline-offset-4 me-4 md:me-6"
            >Terms of Service</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="transition hover:underline hover:underline-offset-4"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
