<template>
  <div class="grid lg:grid-cols-4 gap-12S">
    <div class="col-span-2">
      <div>
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {{ customerType }}
        </h2>
        <p class="mt-2 text-base text-gray-500">The questionaire is designed to be as quick and simple as possible. The more information that can be collected up front, the less time AJ will have to spend getting it from you. Response time is within 8-12 hours.</p>
      </div>
      <div class="flex mt-14">
        <GetstartedStepindicator :steps="buyerSteps" :completedSteps="completedSteps" :currentStep="currentStep"/>
        <GetstartedQuestionairebuyer v-if="customerType==='Buy Home'"/>
      </div>
    </div>
    <!-- <div class="relative col-span-2 overflow-visible" style="width:45vw;">
      <img src="@/assets/img/choosing_house.svg" alt="" class="lg:absolute lg:right-0 w-full h-full object-cover object-left">
    </div> -->
    <div class="relative col-span-2 overflow-visible" style="width:45vw;">
      <img src="@/assets/img/select_house.svg" alt="" class="lg:absolute w-full h-full object-left">
    </div>
  </div>
</template>

<script>
import {ref, computed } from "vue"
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const customerType = route.query.type

    const buyerSteps = ['Personal Info', 'Financials', 'Home Requirements', 'Preferences']

    const completedSteps = ref(['Personal Info'])
    const currentStep = ref('Financials')

    return {
      buyerSteps,
      customerType,
      completedSteps,
      currentStep
    }
  },
}
</script>