<template>
  <form class="w-full">
    <div class="overflow-auto max-h-[55vh] sm:rounded-t-md border border-gray-200 border-b-0">
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

      <div v-if="currentStep === 'Home Info'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="bedrooms" class="block text-sm font-medium text-gray-700">Bedrooms</label>
            <input type="number" name="bedrooms" id="bedrooms" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="full-baths" class="block text-sm font-medium text-gray-700">Full Baths</label>
            <input type="number" name="full-baths" id="full-baths" autocomplete="family-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="half-baths" class="block text-sm font-medium text-gray-700">Half Baths</label>
            <input type="number" name="half-baths" id="half-baths" autocomplete="email" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="number-stories" class="block text-sm font-medium text-gray-700">Number of Stories</label>
            <input type="number" name="number-stories" id="number-stories" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="square-footage" class="block text-sm font-medium text-gray-700">Square Footage</label>
            <input type="number" name="square-footage" id="square-footage" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <fieldset class="col-span-6 sm:col-span-3">
            <div>
              <label for="garage" class="block text-sm font-medium text-gray-700">Garage</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="garage-yes" name="garage" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="garage-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input id="garage-no" name="garage" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="garage-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="col-span-6 sm:col-span-3">
            <div>
              <label for="basement" class="block text-sm font-medium text-gray-700">Basement</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="basement-yes" name="basement" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="basement-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input id="basement-no" name="basement" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="basement-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>

          <fieldset class="col-span-6">
            <div>
              <label for="basement-finished" class="block text-sm font-medium text-gray-700">Is the basement finished?</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="basement-finished-full" name="basement-finished" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="basement-finished-full" class="ml-3 block text-sm font-medium text-gray-700"> Fully </label>
              </div>
              <div class="flex items-center">
                <input id="basement-finished-partial" name="basement-finished" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="basement-finished-partial" class="ml-3 block text-sm font-medium text-gray-700"> Partially </label>
              </div>
              <div class="flex items-center">
                <input id="basement-finished-no" name="basement-finished" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="basement-finished-no" class="ml-3 block text-sm font-medium text-gray-700"> Not Finished </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div v-if="currentStep === 'Additional Info'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="other-important" class="block text-sm font-medium text-gray-700">Any other important things?</label>
            <textarea type="text" name="other-important" id="other-important" rows="5" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 border border-gray-200 rounded-b-md">
      <button @click="onNext()" v-if="!onLastStep" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
        Next
      </button>
      <button v-else type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    steps: Array,
    completedSteps: Array,
    currentStep: String,
    currentStepIndex: Number,
    onLastStep: Boolean
  },
  emits: ['update:currentStepIndex'],
  setup(props, { emit }) {
    const onNext = () => {
      emit('update:currentStepIndex', props.currentStepIndex + 1)
    }

    return {
      onNext
    }
  }
}
</script>