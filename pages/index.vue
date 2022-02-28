<template>
  <div>
    <div class="hidden sm:flex absolute inset-y-0 right-0 top-0 flex sm:items-end lg:items-center lg:pb-6 lg:pt-32">
      <img src="~/assets/img/HomeIllustrationCliff.svg" alt="Home Illustration" class="h-48 sm:h-1/2 lg:h-full">
    </div>

    <div class="px-4 sm:px-6 lg:px-8">
      <IndexHerotwo />
    </div>

    <div class="sm:hidden relative h-96 mt-10">
      <div class="absolute sm::hidden inset-y-0 top-0 right-0 flex items-start pl-2">
        <img src="~/assets/img/HomeIllustrationCliffMobile.svg" alt="Home Illustration" class="h-96">
      </div>
    </div>

    <div>
      <div class="max-w-7xl lg:max-w-screen-2xl mx-auto pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <IndexAbout class="mt-12 sm:mt-20" />
        <IndexVersus class="mt-20 sm:mt-32" />
        <IndexCta class="mt-20 sm:mt-32 pb-32" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
})

const meta = useMeta({
  title: "AJ Curcio Real Estate and Mortgages",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { hid: 'description', name: 'description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { hid: 'image', name: 'image', content: 'https://www.ajcurcio.com/public/AJCurcioLogo.jpg' },
    { name: 'twitter:card', content: "summary_large_image"},
    { name: 'twitter:title', content: "AJ Curcio Real Estate and Mortgages"},
    { name: 'twitter:description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { name: 'twitter:image', content: 'https://www.ajcurcio.com/public/AJCurcioLogo.jpg'}
  ]
})

</script>