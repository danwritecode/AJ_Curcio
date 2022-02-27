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

      <div v-else-if="currentStep === 'Additional Info'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 flex flex-col-reverse">
            <textarea v-model="form.other" type="text" name="other-important" id="other" required :disabled="!allowInput" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-hover-300" />
            <label for="other-important" class="block text-sm font-medium text-gray-700">Anything else you want to mention?</label>
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
  subject: 'Mortgage - New Website Form Submission',
  fullName: null,
  email: null,
  phone: null,
  street: null,
  city: null,
  state: null,
  zip: null,
  // Additional Info
  other: null
})

for (const key in route.query) {
  if (Object.hasOwnProperty.call(route.query, key) && key !== 'type') {
    const element = route.query[key];
    form.value[key] = element
  }
}


</script>