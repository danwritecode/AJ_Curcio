<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" class="block w-full focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md">
        <option v-for="service in services" :key="service.serviceName">{{ service.serviceName }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <button type="button" @click="currentlySelectedService = service.serviceName" v-for="service in services" :key="service.serviceName" :class="currentlySelectedService === service.serviceName ? 'bg-red-100 text-red-700':'bg-white text-gray-500'" class="px-3 py-2 font-medium text-sm rounded-md transition-hover-300 hover:text-red-700 hover:bg-red-100" aria-current="page">
          {{ service.serviceName }}
        </button>
      </nav>
    </div>
  </div>
  <div class="z-10 mt-4 sm:mt-2 sm:absolute left-0 rounded-lg sm:border sm:border-gray-300 bg-white sm:p-6 sm:grid sm:grid-cols-4 sm:gap-2">
    <div v-for="field in selectedService.fields" :key="field.fieldName" class="mb-4 sm:mb-0 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-400 focus-within:border-red-400">
      <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">{{ field.fieldName }}</label>
      <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="field.placeholder">
    </div>
    <button type="button" class="w-full inline-flex justify-center items-center px-6 py-1.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-hover-300">
      Get started
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const services = [
      { serviceName: "Sell Home", fields: [{fieldName: "Name", placeholder: "Jane Doe"}, {fieldName: "Email", placeholder: "jdoe@email.com"}, {fieldName: "Foo", placeholder: "Placeholder"}] },
      { serviceName: "Buy Home", fields: [{fieldName: "Name", placeholder: "Jane Doe"}, {fieldName: "Email", placeholder: "jdoe@email.com"}, {fieldName: "Price Range", placeholder: "200-400k"}] },
      { serviceName: "Mortgage", fields: [{fieldName: "Name", placeholder: "Jane Doe"}, {fieldName: "Email", placeholder: "jdoe@email.com"}, {fieldName: "Salary", placeholder: "$75k"}] }
    ]

    const currentlySelectedService = ref("Sell Home")

    const selectedService = computed(() => services.filter(service => service.serviceName === currentlySelectedService.value)[0])

    return {
      services,
      currentlySelectedService,
      selectedService
    }
  },
})
</script>
