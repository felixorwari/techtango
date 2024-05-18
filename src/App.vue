<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showDropdown = ref(false)
const showResponsiveNav = ref(false)

// Hide menu after navigation on small devices
const collapseNav = () => {
  if (showResponsiveNav.value) showResponsiveNav.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50">
    <div
      :class="{ 'shadow-gray-200 shadow-2xl': showResponsiveNav }"
      class="w-full max-w-screen-xl px-4 mx-auto border-b border-gray-200 sm:shadow-none bg-white/80 backdrop-blur"
    >
      <nav class="flex flex-col py-4 sm:justify-between sm:items-center sm:flex-row">
        <div class="flex items-center justify-between">
          <RouterLink
            :to="{ name: 'events-list' }"
            class="transition-all hover:scale-105 max-w-36 lg:max-w-none"
          >
            <img src="./assets/logo.png" alt="logo" class="object-contain" />
          </RouterLink>

          <button
            type="button"
            @click="showResponsiveNav = !showResponsiveNav"
            data-toggle="#responsiveNav"
            class="px-4 py-2 rounded focus:ring focus:ring-offset-2 focus:ring-lime-600 sm:hidden"
          >
            <span v-if="showResponsiveNav" class="inline-block w-5">
              <i class="fa-solid fa-xmark"></i>
            </span>
            <span v-else class="inline-block w-5">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
        </div>

        <!-- Non-Responsive Nav -->
        <div
          class="hidden mt-8 space-y-8 sm:flex sm:items-center sm:mt-0 sm:flex-row sm:space-x-12 sm:space-y-0"
        >
          <RouterLink
            :to="{ name: 'events-list' }"
            class="font-semibold border-b-2 hover:text-lime-600 border-b-transparent hover:border-b-lime-600"
            >Events</RouterLink
          >
          <RouterLink
            :to="{ name: 'about' }"
            class="font-semibold border-b-2 hover:text-lime-600 border-b-transparent hover:border-b-lime-600"
            >About</RouterLink
          >
          <RouterLink
            :to="{ name: 'contact' }"
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
              class="absolute right-0 z-50 p-4 bg-white border border-gray-100 rounded shadow-lg w-52 min-w-xs top-12"
            >
              <ul class="space-y-5 list-none">
                <li><RouterLink :to="{ name: 'user-events' }">Your events</RouterLink></li>
                <li><RouterLink :to="{ name: 'user-notifications' }">Notifications</RouterLink></li>
                <li><hr class="my-4" /></li>
                <li><RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink></li>
                <li><RouterLink :to="{ name: 'user-settings' }">Settings</RouterLink></li>
                <li><hr class="my-4" /></li>
                <li><RouterLink to="#">Logout</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Responsive Nav -->
        <div
          id="responsiveNav"
          v-show="showResponsiveNav"
          class="flex flex-col pt-6 mt-4 ml-8 space-y-4 border-t border-gray-200 sm:hidden"
        >
          <RouterLink
            :to="{ name: 'events-list' }"
            class="pb-3 font-semibold hover:text-lime-600"
            @click="collapseNav"
          >
            Events
          </RouterLink>

          <RouterLink
            :to="{ name: 'about' }"
            class="pb-3 font-semibold hover:text-lime-600"
            @click="collapseNav"
          >
            About
          </RouterLink>

          <RouterLink
            :to="{ name: 'contact' }"
            class="pb-3 font-semibold hover:text-lime-600"
            @click="collapseNav"
          >
            Contact
          </RouterLink>

          <!-- User Pages Navigation -->
          <div class="relative font-semibold border-t border-gray-200">
            <div class="flex items-center gap-2 mt-4">
              <i class="fa-solid fa-circle-user"></i>
              <span class="font-normal">Lara Croft</span>
            </div>

            <div class="mt-5">
              <ul class="space-y-4 list-none">
                <li><RouterLink :to="{ name: 'user-events' }">Your events</RouterLink></li>
                <li><RouterLink :to="{ name: 'user-notifications' }">Notifications</RouterLink></li>
                <li><hr class="my-4" /></li>
                <li><RouterLink :to="{ name: 'user-profile' }">Your Profile</RouterLink></li>
                <li><RouterLink :to="{ name: 'user-settings' }">Settings</RouterLink></li>
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

  <footer class="pt-12 mt-auto">
    <div
      class="w-full max-w-screen-xl p-4 mx-auto text-center border-t border-gray-100 md:flex md:items-center md:justify-between"
    >
      <ul class="flex flex-wrap items-center justify-center my-10 text-sm gap-y-4">
        <li>
          <RouterLink
            :to="{ name: 'about' }"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'privacy' }"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >Privacy Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'terms' }"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4 me-4 md:me-6"
            >Terms of Service</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'contact' }"
            class="transition-all hover:underline hover:text-lime-600 hover:underline-offset-4"
            >Contact</RouterLink
          >
        </li>
      </ul>

      <span class="text-sm text-gray-400"
        >&copy; 2024
        <RouterLink :to="{ name: 'events-list' }" class="hover:underline hover:text-lime-600"
          >TechTopia</RouterLink
        >. All rights reserved.</span
      >
    </div>
  </footer>
</template>
