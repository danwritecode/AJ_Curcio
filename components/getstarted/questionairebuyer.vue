<template>
  <form id="form" class="w-full">
    <div class="overflow-auto lg:max-h-[55vh] sm:rounded-t-md border border-gray-200 border-b-0">
      <div v-if="currentStep === 'Personal Info'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.fullName" type="text" name="full-name" id="fullName" autocomplete="given-name" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="first-name" class="block text-sm font-medium text-gray-700">Full Name</label>
          </div>

          <div class="col-span-6 sm:col-span-3 flex flex-col-reverse">
            <input v-model="form.email" type="text" name="email-address" id="email" autocomplete="email" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
          </div>

          <div class="col-span-6 sm:col-span-3 flex flex-col-reverse">
            <input v-model="form.phone" type="text" name="phone" id="phone" autocomplete="email" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.street" type="text" name="street-address" id="street" autocomplete="street-address" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
          </div>

          <div class="col-span-6 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.city" type="text" name="city" id="city" autocomplete="address-level2" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.state" type="text" name="region" id="state" autocomplete="address-level1" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="region" class="block text-sm font-medium text-gray-700">State</label>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.zip" type="text" name="postal-code" id="zip" autocomplete="postal-code" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="postal-code" class="block text-sm font-medium text-gray-700">Zip Code</label>
          </div>
        </div>
      </div>
      <div v-else-if="currentStep === 'Financials'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 flex flex-col-reverse">
            <select v-model="form.paymentStrategy" id="paymentStrategy" name="how-pay" required class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>Mortgage</option>
              <option>Cash</option>
            </select>
            <label for="how-pay" class="block text-sm font-medium text-gray-700">How will you pay for the home</label>
          </div>
          <div class="col-span-6 flex flex-col-reverse">
            <select v-model="form.creditScore" id="creditScore" name="credit" required class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </select>
            <label for="credit" class="block text-sm font-medium text-gray-700">How's your credit score?</label>
          </div>
          <fieldset class="col-span-6" required>
            <div>
              <label for="own-home" class="block text-sm font-medium text-gray-700">Do you own your home?</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input v-model="form.doYouOwn" id="doYouOwn" name="own-home" type="radio" value="Yes" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="own-home-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input v-model="form.doYouOwn" id="doYouOwn" name="own-home" type="radio" value="No" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="own-home-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="col-span-6" required>
            <div>
              <label for="sell-to-buy" class="block text-sm font-medium text-gray-700">Do you need to sell in order to buy?</label>
            </div>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input v-model="form.sellingRequirement" id="sellingRequirement" name="sell-to-buy" type="radio" value="Yes" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="sell-to-buy-yes" class="ml-3 block text-sm font-medium text-gray-700"> Yes </label>
              </div>
              <div class="flex items-center">
                <input v-model="form.sellingRequirement" id="sellingRequirement" name="sell-to-buy" type="radio" value="No" required class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 transition-hover-300">
                <label for="sell-to-buy-no" class="ml-3 block text-sm font-medium text-gray-700"> No </label>
              </div>
            </div>
          </fieldset>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.lender" type="text" name="prequalified" id="lender" autocomplete="family-name" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="prequalified" class="block text-sm font-medium text-gray-700">If prequalified, who is the lender?</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.priceRange" type="text" name="price-range" id="priceRange" autocomplete="email" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.cashAvail" type="text" name="cash-for-downpayment" id="cashAvail" autocomplete="street-address" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="cash-for-downpayment" class="block text-sm font-medium text-gray-700">Cash available for down payment</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.monthlyBudget" type="text" name="mortgage-budget" id="monthlyBudget" autocomplete="address-level2" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="mortgage-budget" class="block text-sm font-medium text-gray-700">Monthly mortgage budget</label>
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 'Home Requirements'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.beds" type="number" name="bedrooms" id="beds" autocomplete="given-name" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="bedrooms" class="block text-sm font-medium text-gray-700">Bedrooms</label>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.fullBaths" type="number" name="full-baths" id="fullBaths" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="full-baths" class="block text-sm font-medium text-gray-700">Full Baths</label>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col-reverse">
            <input v-model="form.halfBaths" type="number" name="half-baths" id="halfBaths" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="half-baths" class="block text-sm font-medium text-gray-700">Half Baths</label>
          </div>

          <div class="col-span-6 sm:col-span-3 flex flex-col-reverse">
            <input v-model="form.stories" type="number" name="number-stories" id="stories" required class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="number-stories" class="block text-sm font-medium text-gray-700">Number of Stories</label>
          </div>

          <div class="col-span-6 sm:col-span-3 flex flex-col-reverse">
            <input v-model="form.sqft" type="number" name="square-footage" id="sqft" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="square-footage" class="block text-sm font-medium text-gray-700">Square Footage</label>
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 'Preferences'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.timeline" type="text" name="timeline" id="timeline" :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="timeline" class="block text-sm font-medium text-gray-700">When do you want to be in your new home?</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <textarea v-model="form.reasonForMove" type="text" name="reasoning" id="reasoning" :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
            <label for="reasoning" class="block text-sm font-medium text-gray-700">What's the main reason you're shopping for a home?</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <textarea v-model="form.biggestConcern" type="text" name="concerns" id="biggestConcern" :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
            <label for="concerns" class="block text-sm font-medium text-gray-700">What is your biggest concern when it comes to buying?</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <input v-model="form.areasOfInterest" type="text" name="areas-interest" id="areasOfInterest" :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300">
            <label for="areas-interest" class="block text-sm font-medium text-gray-700">Areas of interest (town or school district)</label>
          </div>

          <div class="col-span-6 flex flex-col-reverse">
            <textarea v-model="form.other" type="text" name="other-important" id="other" required :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
            <label for="other-important" class="block text-sm font-medium text-gray-700">Any other important things?</label>
          </div>
        </div>
      </div>
    </div>
    <GetstartedQuestionairefooter :form="form" :onLastStep="onLastStep" :onFirstStep="onFirstStep" :currentStep="currentStep" @nextStep="onNext" @previousStep="onPrevious" @formSubmitted="[$emit('formSubmitted'), allowInput = false]" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  currentStep: String,
  currentStepIndex: Number,
  onLastStep: Boolean,
  onFirstStep: Boolean,
  formSubmitted: Object
})
const emit = defineEmits(['update:currentStepIndex', 'formSubmitted'])

const route = useRoute()

const allowInput = ref(true)

const onNext = () => { emit('update:currentStepIndex', props.currentStepIndex + 1) }
const onPrevious = () => { emit('update:currentStepIndex', props.currentStepIndex - 1) }

const form = ref({
  // info
  subject: 'Buyer - New Website Form Submission',
  fullName: null,
  email: null,
  phone: null,
  street: null,
  city: null,
  state: null,
  zip: null,
  // financials
  paymentStrategy: null,
  creditScore: null,
  doYouOwn: null,
  sellingRequirement: null,
  lender: null,
  priceRange: null,
  cashAvail: null,
  monthlyBudget: null,
  // requirements
  beds: null,
  fullBaths: null, 
  halfBaths: null,
  stories: null,
  sqft: null,
  // preferences
  timeline: null,
  reasonForMove: null,
  biggestConcern: null,
  areasOfInterest: null,
  other: null
})

for (const key in route.query) {
  if (Object.hasOwnProperty.call(route.query, key) && key !== 'type') {
    const element = route.query[key];
    form.value[key] = element
  }
}


</script>