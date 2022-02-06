import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apiBase = config.API_BASE

  const getMessage = async () => {
    const response =  await axios({
      method: 'get',
      url: apiBase + '/messages/b1ac0913-7635-41a1-8c97-fc7a548fe77c'
    })
    return response
  }

  const sendMessage = async (messageContents) => {
    const response =  await axios({
      method: 'post',
      url: apiBase + '/messages',
      data: messageContents
    })
    return response
  }
  
  return {
    provide: {
      api: {
        getMessage,
        sendMessage
      }
    }
  }
});