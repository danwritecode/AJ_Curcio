<template>
  <div class="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between h-10 md:justify-center" aria-label="Global">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <NuxtLink to="/">
            <span class="sr-only">AJ Curcio</span>
            <img class="w-auto h-12" src="@/assets/img/logos/logo_house.png" alt="">
          </NuxtLink>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10 absolute right-0">
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">Services</a>
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">About</a>
        <a href="#" class="font-medium text-gray-500 hover:text-red-600 transition-hover-300">Why AJ</a>
      </div>
    </nav>
    <div class="max-w-7xl mx-auto py-16 lg:py-24">
      <slot />
    </div>

    <LayoutFooter class="max-w-7xl mx-auto py-8" />
  </div>
</template>