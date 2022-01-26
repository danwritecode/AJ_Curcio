<template>
  <div class="bg-gray-200 py-96">
    {{ testing }}
  </div>
  <div class="bg-gray-200 py-96">
    {{ testing }}
  </div>
  <div class="bg-gray-200 py-96">
    {{ testing }}
  </div>
</template>


<script>
import debounce from 'lodash/debounce'
import { defineComponent, onMounted, beforeUnmount } from '@vue/composition-api'


export default defineComponent ({
  setup() {
    const testing = "foo"

    onMounted(() => {
      // this.handleDebouncedScroll = debounce(handleScroll, 100);
      window.addEventListener('scroll', handleScroll());
    })

    beforeUnmount(() => {
      window.removeEventListener('scroll')
    })

    const handleScroll = (event) => {
      console.log('scrolled')
      console.log(event)
    }

    return {
      testing
    }
  },
})
</script>