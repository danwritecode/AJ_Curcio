<template>
  <nav aria-label="Progress" class="hidden lg:block w-64">
    <ol role="list" class="space-y-6">
      <li v-for="step in steps" :key="step">
        <div v-if="step === currentStep && !completedSteps.includes(step)" class="flex items-start" aria-current="step">
          <span class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
            <span class="absolute h-4 w-4 rounded-full bg-red-200"></span>
            <span class="relative block w-2 h-2 bg-red-600 rounded-full"></span>
          </span>
          <span class="ml-3 text-sm font-medium text-red-600">{{ step }}</span>
        </div>
        <div v-if="step !== currentStep && !completedSteps.includes(step)" type="button">
          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <div class="h-2 w-2 bg-gray-300 rounded-full"></div>
            </div>
            <p class="ml-3 text-sm font-medium text-gray-500">{{ step }}</p>
          </div>
        </div>
        <button @click="onClick($event)" v-if="completedSteps.includes(step)" type="button" class="group">
          <span class="flex items-start">
            <span class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
              <svg class="h-full w-full text-red-600 group-hover:text-red-500 transition-hover-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-hover-300">{{ step }}</span>
          </span>
        </button>
      </li>
    </ol>
  </nav>
  <nav class="lg:hidden flex items-center mb-3" aria-label="Progress">
    <p class="text-sm font-medium">{{ currentStep }}</p>
    <ol role="list" class="ml-6 flex items-center space-x-5">
      <li v-for="step in steps" :key="step">
        <!-- Completed Step -->
        <span v-if="completedSteps.includes(step)" class="block w-2.5 h-2.5 bg-red-600 rounded-full">
          <span class="sr-only">Step 1</span>
        </span>
        <!-- Current Step -->
        <span v-if="step === currentStep && !completedSteps.includes(step)" class="relative flex items-center justify-center" aria-current="step">
          <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
            <span class="w-full h-full rounded-full bg-red-200"></span>
          </span>
          <span class="relative block w-2.5 h-2.5 bg-red-600 rounded-full" aria-hidden="true"></span>
          <span class="sr-only">Step 2</span>
        </span>
        <!-- Upcoming Step -->
        <span v-if="step !== currentStep && !completedSteps.includes(step)" class="block w-2.5 h-2.5 bg-gray-200 rounded-full">
          <span class="sr-only">Step 3</span>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    steps: Array,
    completedSteps: Array,
    currentStep: String,
    currentStepIndex: Number,
  },
  emits: ['update:currentStepIndex'],
  setup(props, { emit }) {
    const onClick = (event) => {
      const stepIndex = props.steps.indexOf(event.target.textContent)
      emit('update:currentStepIndex', stepIndex)
    }

    return {
      onClick
    }
  }
}
</script>