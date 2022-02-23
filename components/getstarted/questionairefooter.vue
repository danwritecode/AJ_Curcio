<template>
  <div>
    <div class="px-4 py-3 bg-gray-50 sm:px-6 border border-gray-200 rounded-b-md">
      <ClientOnly>
        <div class="flex justify-end">
          <div class="flex space-x-2">
            <button @click="$emit('previousStep')" v-if="!onFirstStep && !formSubmitted" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
              Back
            </button>
            <button v-if="formSubmitted" disabled type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-400">
              Back
            </button>
            <button @click="$emit('nextStep')" v-if="!onLastStep && formValid" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
              Next
            </button>
            <button v-else-if="!onLastStep && !formValid" type="button" disabled class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-200 bg-red-400 cursor-default">
              Next
            </button>
            <GlobalSubmitButton v-else @click="[onSubmit(), $emit('formSubmitted')]" text="Submit" color="red" size="md" :loading="submitLoading" :disabled="!formValid || formSubmitted" :invertedColor="false" />
          </div>
        </div>
      </ClientOnly>
    </div>
    <GlobalFormSubmitAlert v-if="formSubmitted" class="mt-6" :success="submitSuccess"/>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const { $api } = useNuxtApp()

const props = defineProps({
  form: Object,
  onLastStep: Boolean,
  onFirstStep: Boolean,
  currentStep: String,
  nextStep,
  previousStep,
  formSubmitted
})
const emit = defineEmits(['nextStep', 'previousStep', 'formSubmitted'])

const submitLoading = ref(false)
const formSubmitted = ref(false)
const submitSuccess = ref(false)

const onSubmit = async () => {
  submitLoading.value = true
  try {
    const response = await $api.sendMessage(props.form)
    submitSuccess.value = true
    console.log(response)
  } catch(err) {
    console.log(err)
  } finally {
    submitLoading.value = false
    formSubmitted.value = true
  }
}


const formValid = ref(false)

const emailValid = computed(() => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(props.form.email)
})

const evaluateForm = () => {
  // get the form
  const htmlForm = document.getElementById('form')
  // get all inputs with ID's (the id corresponds to the data object key)
  const inputsWithId = htmlForm.querySelectorAll('*[id]')
  const formIds = []
  const requiredIds = []

  // for each id, if they have required attr, add to requiredIds
  inputsWithId.forEach(element => {
    formIds.push(element.id)
    if(element.required) {
      requiredIds.push(element.id)
    }
  })

  // if email is on current page and it's not valid set form valid to false
  if(formIds.includes('email') && !emailValid.value) {
    formValid.value = false
    return
  }

  // for each id in the form, if it's in required id's and that field in the form object is not filled out, set to false
  for (const id of formIds) {
    if(requiredIds.includes(id) && !props.form[id]) {
      formValid.value = false
      return
    }
  }
  formValid.value = true
}

watch(props.form, () => {
  evaluateForm()
})

watch(() => props.currentStep, () => {
  evaluateForm()
})
</script>
