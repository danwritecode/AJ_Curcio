<template>
  <div>
    <IndexHero />
    <IndexAbout class="mt-12 sm:mt-20" />
    <IndexVersus class="mt-20 sm:mt-32" />
    <IndexCta class="mt-20 sm:mt-32 pb-32" />
  </div>
</template>

<script setup>
const meta = useMeta({
  title: "AJ Curcio Real Estate and Mortgages",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { hid: 'description', name: 'description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { hid: 'image', name: 'image', content: '/cta_banner.png' },
    { name: 'twitter:card', content: "summary_large_image"},
    { name: 'twitter:title', content: "AJ Curcio Real Estate and Mortgages"},
    { name: 'twitter:description', content: "AJ Curcio is your one stop shop for Real Estate and Mortgages. See what AJ is all about and get started now."},
    { name: 'twitter:image', content: "to do"}
  ],
  bodyAttrs: {
    class: 'test'
  }
})

</script>