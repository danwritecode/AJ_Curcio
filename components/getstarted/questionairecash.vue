<template>
  <form class="w-full">
    <div class="overflow-hidden sm:rounded-md border border-gray-200">
      <div v-if="currentStep === 'Personal Info'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
            <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div class="col-span-6">
            <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700">State</label>
            <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP</label>
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button v-if="!onLastStep" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
          Next
        </button>
        <button v-else type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  steps: Array,
  completedSteps: Array,
  currentStep: String,
  currentStepIndex: Number,
  onLastStep: Boolean
})

const emit = defineEmits(['update:currentStepIndex'])

const onNext = () => {
  emit('update:currentStepIndex', props.currentStepIndex + 1)
}
</script>