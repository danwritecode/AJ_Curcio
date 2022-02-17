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
      <NuxtPage/>
    </div>

    <LayoutFooter class="max-w-7xl mx-auto py-8" />
  </div>
</template>

<style>
html {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}

.page-enter-from{
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

/* For basic inputs */
input[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For textarea inputs */
textarea[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For select inputs */
select[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For fieldset inputs */
fieldset[required] label:first-child:after {
  content: ' *';
  color: #dc2626;
}

input[type=radio] + label:after {
  content: '';
}


</style>

