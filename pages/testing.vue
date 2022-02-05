<template>
  <div>
    {{ res.data.record }}
  </div>
</template>


<script setup>
const { $api } = useNuxtApp()

const res = await $api.getMessage
console.log(res)

</script>
