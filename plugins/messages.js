import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apiBase = config.API_BASE

  const getMessage = async () => {
    const message =  await axios({
      method: 'get',
      url: apiBase + '/messages/8ee4621a-76a1-4b89-a350-a77e6c174eb1'
    })
    return message
  }
  
  return {
    provide: {
      api: {
        getMessage: getMessage()
      }
    }
  }
});