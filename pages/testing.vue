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
  </div>
</template>


<script setup>


</script>

<style scoped>
label {
  float: left;
}

input[required] + label:after {
  content: '*';
  color: red;
}

</style>
