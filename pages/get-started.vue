<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:h-[90vh]">
    <div class="lg:col-span-2">
      <div>
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {{ customerType }}
        </h2>
        <p class="mt-2 text-base text-gray-500">The questionaire is designed to be as quick and simple as possible. The more information that can be collected up front, the less time AJ will have to spend getting it from you. Response time is within 8-12 hours.</p>
      </div>
      <div class="lg:flex mt-14">
        <GetstartedStepindicator :steps="steps" :completedSteps="completedSteps" :currentStep="currentStep" :formSubmitted="formSubmitted" />
        <GetstartedQuestionairebuyer v-if="customerType==='Buy Home'" :currentStep="currentStep" v-model:currentStepIndex="currentStepIndex" :onLastStep="onLastStep" :onFirstStep="onFirstStep" @formSubmitted="formSubmitted = true"/>
        <GetstartedQuestionaireseller v-if="customerType==='Sell Home'" :currentStep="currentStep" v-model:currentStepIndex="currentStepIndex" :onLastStep="onLastStep"/>
        <GetstartedQuestionairemortgage v-if="customerType==='Mortgage'" :currentStep="currentStep" v-model:currentStepIndex="currentStepIndex" :onLastStep="onLastStep"/>
        <GetstartedQuestionairecash v-if="customerType==='Cash Offer'" :currentStep="currentStep" v-model:currentStepIndex="currentStepIndex" :onLastStep="onLastStep"/>
      </div>
    </div>
    <!-- <div class="relative col-span-2 overflow-visible" style="width:45vw;">
      <img src="@/assets/img/choosing_house.svg" alt="" class="lg:absolute lg:right-0 w-full h-full object-cover object-left">
    </div> -->
    <div class="hidden lg:inline mt-10 lg:mt-0 lg:relative lg:col-span-2 w-[45vw]">
      <img src="@/assets/img/select_house.svg" alt="" class="lg:absolute lg:top-0 w-full h-[80vh]">
    </div>
    <div class="lg:hidden mt-10">
      <img src="@/assets/img/select_house.svg" alt="" class="w-3/4 h-full mx-auto">
    </div>
  </div>
</template>

<script setup>
import {ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const customerType = route.query.type
const buyerSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']
const sellerSteps = ['Personal Info', 'Home Info', 'Additional Info']
const mortgageSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']

const steps = ref([])

if(customerType === 'Buy Home') {
  steps.value = buyerSteps
} else if(customerType === 'Sell Home') {
  steps.value = sellerSteps
} else if(customerType === 'Mortgage') {
  steps.value = mortgageSteps
}
const currentStepIndex = ref(0)

const formSubmitted = ref(false)

const completedSteps = computed(() => {
  return steps.value.slice(0, currentStepIndex.value)
})

const currentStep = computed(() => {
  return steps.value[currentStepIndex.value]
})

const onLastStep = computed(() => {
  return currentStepIndex.value === steps.value.length - 1  ? true:false
})

const onFirstStep = computed(() => {
  return currentStepIndex.value === 0 ? true:false
})


const meta = useMeta({
  title: "Get Started with AJ Curcio",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { hid: 'description', name: 'description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { hid: 'image', name: 'image', content: '/cta_banner.png' },
    { name: 'twitter:card', content: "summary_large_image"},
    { name: 'twitter:title', content: "AJ Curcio Real Estate and Mortgages"},
    { name: 'twitter:description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { name: 'twitter:image', content: "to do"}
  ]
})
</script>