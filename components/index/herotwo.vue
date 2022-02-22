<template>
  <div>
    <div class="absolute inset-y-0 right-0 top-0 flex lg:items-end">
      <img src="~/assets/img/HomeIllustration.svg" alt="Home Illustration" class="hidden lg:block h-1/2 xl:h-2/3 2xl:h-auto">
    </div>

    <div class="sm:relative flex justify-center items-center min-h-[65vh] lg:min-h-[100vh] lg:pb-96 xl:pb-64">
      <div class="relative lg:grid lg:grid-cols-10 mx-auto max-w-screen-2xl">
        <div class="text-center sm:text-left lg:col-span-8 xl:col-span-6 2xl:col-span-8">
          <h3 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">One stop shop for all real estate needs</h3>
          <p class="mt-3 text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600 max-w-4xl">AJ is your one stop shop for everything Real Estate. From buying and selling your home all the way through to your mortgage.</p>
          <div>
            <servicesselector />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>