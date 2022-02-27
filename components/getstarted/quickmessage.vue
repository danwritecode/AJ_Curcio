<template>
  <form id="form" class="w-full">
    <div class="overflow-auto lg:max-h-[55vh] sm:rounded-t-md border border-gray-200 border-b-0">
      <div v-if="currentStep === 'Quick Contact'" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 flex flex-col-reverse">
            <select v-model="form.serviceInterest" id="serviceInterest" name="service-interest" required class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-hover-300">
              <option>Sell Home</option>
              <option>Buy Home</option>
              <option>Get a Mortgage</option>
            </select>
            <label for="service-interest" class="block text-sm font-medium text-gray-700">What are you looking to do?</label>
          </div>
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
  subject: 'Quick Contact - New Website Form Submission',
  serviceInterest: null,
  other: null
})

for (const key in route.query) {
  if (Object.hasOwnProperty.call(route.query, key) && key !== 'type') {
    const element = route.query[key];
    form.value[key] = element
  }
}


</script>