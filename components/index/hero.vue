<template>
  <div class="sm:relative mt-20 lg:-mt-24 flex justify-center items-center min-h-[65vh] md:min-h-[80vh]">
    <div class="grid grid-cols-1 gap-10 sm:gap-12 xl:gap-24 lg:grid-cols-2 items-center mt-10 mx-auto max-w-screen-xl">
      <div class="text-center sm:text-left -mt-32">
        <h3 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">One stop shop for all real estate needs</h3>
        <p class="mt-3 text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600">AJ is your one stop shop for everything Real Estate. From buying and selling your home all the way through to your mortgage.</p>
        <div>
          <servicesselector />
        </div>
      </div>
      <div class="lg:flex lg:justify-center sm:justify-end sm:mt-16 md:mt-0">
        <!-- <img src="@/assets/img/hero_home.jpg" alt="" class="rounded-lg"> -->
        <img src="@/assets/img/neighborhood.svg" alt="" class="rounded-lg">
      </div>
    </div>
  </div>
</template>