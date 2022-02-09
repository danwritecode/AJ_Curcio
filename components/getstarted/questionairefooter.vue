<template>
  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 border border-gray-200 rounded-b-md">
    <ClientOnly>
      <button @click="$emit('nextStep')" v-if="!onLastStep && formValid" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
        Next
      </button>
      <button v-else-if="!onLastStep && !formValid" type="button" disabled class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-200 bg-red-400 cursor-default">
        Next
      </button>
      <GlobalSubmitButton v-else @click="onSubmit()" text="Submit" color="red" size="md" :loading="submitLoading" :disabled="!formValid" :invertedColor="false" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const { $api } = useNuxtApp()

const props = defineProps({
  form: Object,
  onLastStep: Boolean,
  currentStep: String,
  nextStep: Event
})
const emit = defineEmits(['nextStep'])

const submitLoading = ref(false)

const onSubmit = async () => {
  submitLoading.value = true
  try {
    const response = await $api.sendMessage(props.form)
    console.log(response)
  } catch(err) {
    console.log(err)
  } finally {
    submitLoading.value = false
  }
}


const formValid = ref(false)
const emailValid = computed(() => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(props.form.email)
})

const evaluateForm = () => {
  const htmlForm = document.getElementById('form')
  const inputsWithId = htmlForm.querySelectorAll('*[id]')
  const formIds = []
  const requiredIds = []

  inputsWithId.forEach(element => {
    formIds.push(element.id)
    if(element.required) {
      requiredIds.push(element.id)
    }
  })

  if(formIds.includes('email') && !emailValid.value) {
    formValid.value = false
    return
  }

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
</script>
