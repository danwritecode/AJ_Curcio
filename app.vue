<template>
  <div class="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between h-10 md:justify-center" aria-label="Global">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">AJ Curcio</span>
            <img class="w-auto h-12" src="@/assets/img/logos/logo_house.png" alt="">
          </a>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10">
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">Services</a>
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">About</a>
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">Why AJ</a>
      </div>
      <div class="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-500 bg-white hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
          Get Started
        </button>
      </div>
    </nav>
  </div>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <NuxtPage />
  </div>
</template>

<style>
html {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}
</style>

