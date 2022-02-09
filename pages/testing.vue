<template>
  <div>
    <div class="col-span-6 sm:col-span-3 flex flex-col-reverse">
      <input type="text" name="first-name" id="firstName" autocomplete="given-name" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
      <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
    </div>
    <div class="mt-20 col-span-6 sm:col-span-3 flex flex-col">
      <input type="text" name="first-name" id="firstName" autocomplete="given-name" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
      <label for="first-name" class="order-first block text-sm font-medium text-gray-700">First name</label>
    </div>
    <fieldset class="mt-32 col-span-6" required>
      <div>
        <label for="own-home" class="block text-sm font-medium text-gray-700">Do you own your home?</label>
      </div>
      <div class="mt-4 space-y-4">
        <div class="flex items-center">
          <input id="doYouOwn" name="own-home" type="radio" value="Yes" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
          <label for="own-home-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
        </div>
        <div class="flex items-center">
          <input id="doYouOwn" name="own-home" type="radio" value="No" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
          <label for="own-home-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>


<script setup>


</script>

<style scoped>
fieldset[required] label:first-child:after {
  content: ' *';
  color: #dc2626;
}

input[type=radio] + label:after {
  content: '';
}
</style>
