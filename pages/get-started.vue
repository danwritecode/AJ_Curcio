<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
    <div class="lg:col-span-2">
      <div>
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {{ customerType }}
        </h2>
        <p class="mt-2 text-base text-gray-500">The questionaire is designed to be as quick and simple as possible. The more information that can be collected up front, the less time AJ will have to spend getting it from you. Response time is within 8-12 hours.</p>
      </div>
      <div class="flex mt-14">
        <GetstartedStepindicator :steps="buyerSteps" :completedSteps="completedSteps" :currentStep="currentStep"/>
        <GetstartedQuestionairebuyer v-if="customerType==='Buy Home'" :steps="buyerSteps" :completedSteps="completedSteps" :currentStep="currentStep" :onLastStep="onLastStep"/>
      </div>
    </div>
    <!-- <div class="relative col-span-2 overflow-visible" style="width:45vw;">
      <img src="@/assets/img/choosing_house.svg" alt="" class="lg:absolute lg:right-0 w-full h-full object-cover object-left">
    </div> -->
    <div class="hidden lg:inline mt-10 lg:mt-0 lg:relative lg:col-span-2" style="width:45vw;">
      <img src="@/assets/img/select_house.svg" alt="" class="lg:absolute w-full h-full">
    </div>
    <div class="lg:hidden mt-10 lg:mt-0 lg:relative lg:col-span-2">
      <img src="@/assets/img/select_house.svg" alt="" class="lg:absolute w-3/4 h-full mx-auto">
    </div>
  </div>
</template>

<script>
import {ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const customerType = route.query.type
    const buyerSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']
    const sellerSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']
    const mortgageSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']

    const steps = ref([])

    if(customerType === 'Buy Home') {
      steps.value = buyerSteps
    } else if(customerType === 'Sell Home') {
      steps.value = sellerSteps
    } else if(customerType === 'Mortgage') {
      steps.value = mortgageSteps
    }

    const completedSteps = ref([])
    const currentStep = ref('')
    const currentStepIndex = ref(0)
    const onLastStep = computed(() => {
      return currentStepIndex.value === steps.value.length - 1  ? true:false
    })

    currentStep.value = steps.value[currentStepIndex.value]


    return {
      buyerSteps,
      customerType,
      completedSteps,
      currentStep,
      currentStepIndex,
      onLastStep
    }
  },
}
</script>