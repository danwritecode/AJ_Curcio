import { defineNuxtConfig } from 'nuxt3'

const nodeEnv = process.env.NODE_ENV

export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE: nodeEnv === 'production' ? 'https://d5u8w9a76b.execute-api.us-east-1.amazonaws.com/api/v1':'http://localhost:3333/api/v1'
  },
  css: ["@/assets/main.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    }
  },
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap' }
    ],
   }
})
