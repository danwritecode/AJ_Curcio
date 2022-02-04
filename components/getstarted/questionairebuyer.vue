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
      <div v-if="currentStep === 'Financials'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="how-pay" class="block text-sm font-medium text-gray-700">How will you pay for the home</label>
            <select id="how-pay" name="how-pay" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>Mortgage</option>
              <option>Cash</option>
            </select>
          </div>
          <div class="col-span-6">
            <label for="credit" class="block text-sm font-medium text-gray-700">How's your credit score?</label>
            <select id="credit" name="credit" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </select>
          </div>
          <fieldset class="col-span-6">
            <div>
              <label for="own-home" class="block text-sm font-medium text-gray-700">Do you own your home?</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="own-home-yes" name="own-home" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="own-home-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input id="own-home-no" name="own-home" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="own-home-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="col-span-6">
            <div>
              <label for="sell-to-buy" class="block text-sm font-medium text-gray-700">Do you need to sell in order to buy?</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="sell-to-buy-yes" name="sell-to-buy" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="sell-to-buy-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input id="sell-to-buy-no" name="sell-to-buy" type="radio" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="sell-to-buy-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>

          <div class="col-span-6">
            <label for="prequalified" class="block text-sm font-medium text-gray-700">If prequalified, who is the lender?</label>
            <input type="text" name="prequalified" id="prequalified" autocomplete="family-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
            <input type="text" name="price-range" id="price-range" autocomplete="email" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="cash-for-downpayment" class="block text-sm font-medium text-gray-700">Cash available for down payment</label>
            <input type="text" name="cash-for-downpayment" id="cash-for-downpayment" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="mortgage-budget" class="block text-sm font-medium text-gray-700">Monthly mortgage budget</label>
            <input type="text" name="mortgage-budget" id="mortgage-budget" autocomplete="address-level2" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>
        </div>
      </div>

      <div v-if="currentStep === 'Home Requirements'" class="px-4 py-5 bg-white sm:p-6">
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
        </div>
      </div>

      <div v-if="currentStep === 'Preferences'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="timeline" class="block text-sm font-medium text-gray-700">When do you want to be in your new home?</label>
            <input type="text" name="timeline" id="timeline" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="reasoning" class="block text-sm font-medium text-gray-700">What's the main reason you're shopping for a home?</label>
            <textarea type="text" name="reasoning" id="reasoning" autocomplete="family-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
          </div>

          <div class="col-span-6">
            <label for="concerns" class="block text-sm font-medium text-gray-700">What is your biggest concern when it comes to buying?</label>
            <textarea type="text" name="concerns" id="concerns" autocomplete="email" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
          </div>

          <div class="col-span-6">
            <label for="areas-interest" class="block text-sm font-medium text-gray-700">Areas of interest (town or school district)</label>
            <input type="text" name="areas-interest" id="areas-interest" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
          </div>

          <div class="col-span-6">
            <label for="other-important" class="block text-sm font-medium text-gray-700">Any other important things?</label>
            <textarea type="text" name="other-important" id="other-important" autocomplete="street-address" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
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