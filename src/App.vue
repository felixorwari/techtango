<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showDropdown = ref(false)
</script>

<template>
  <header>
    <div class="w-full max-w-screen-xl px-4 mx-auto">
      <nav class="flex items-center justify-between py-4 border-b border-gray-200">
        <RouterLink to="/" class="transition-all hover:scale-105">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-lime-700"></span>
            <span class="text-2xl font-bold text-lime-700">TechTopia</span>
          </div>
        </RouterLink>

        <div class="flex flex-col items-center space-y-8 sm:flex-row sm:space-x-12 sm:space-y-0">
          <RouterLink
            to="/"
            class="font-semibold border-b-2 hover:text-lime-600 border-b-transparent hover:border-b-lime-600"
            >Events</RouterLink
          >
          <RouterLink
            to="/about"
            class="font-semibold border-b-2 hover:text-lime-600 border-b-transparent hover:border-b-lime-600"
            >About</RouterLink
          >
          <RouterLink
            to="/contact"
            class="font-semibold border-b-2 hover:text-lime-600 border-b-transparent hover:border-b-lime-600"
            >Contact</RouterLink
          >

          <div class="relative">
            <!-- Dropdown toggle -->
            <button
              class="flex items-center gap-2"
              data-toggle="#dropdown"
              @click="showDropdown = !showDropdown"
              @keyup.esc="showDropdown = false"
            >
              <i class="fa-solid fa-circle-user"></i>
              <span class="font-semibold">Lara Croft</span>
              <span :class="{ '-rotate-180': showDropdown }" class="text-xs transition-all">
                <i class="fa-solid fa-chevron-down"></i
              ></span>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="showDropdown"
              id="dropdown"
              class="absolute right-0 z-50 p-4 bg-white border border-gray-100 rounded shadow-lg w-52 min-w-xs top-14"
            >
              <ul class="space-y-5 list-none">
                <li><RouterLink to="/user-events">Your events</RouterLink></li>
                <li><RouterLink to="/user-notifications">Notifications</RouterLink></li>
                <li><hr class="my-4" /></li>
                <li><RouterLink to="/user-profile">Profile</RouterLink></li>
                <li><RouterLink to="/user-settings">Settings</RouterLink></li>
                <li><hr class="my-4" /></li>
                <li><RouterLink to="#">Logout</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView class="w-full max-w-screen-xl px-4 py-12 mx-auto" />

  <footer class="py-12 mt-auto">
    <div
      class="w-full max-w-screen-xl p-4 mx-auto border-t border-gray-100 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm sm:text-center"
        >&copy; 2024
        <RouterLink to="/" class="hover:underline hover:text-lime-600">Tech Tango</RouterLink>. All
        rights reserved.</span
      >

      <ul class="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <RouterLink
            to="/about"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/privacy"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >Privacy Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/terms"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >Terms of Service</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
