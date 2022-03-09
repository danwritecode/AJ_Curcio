export default defineNuxtRouteMiddleware((to, from) => {
  const fromRoute = useState('fromRoute')

  if (fromRoute) {
    fromRoute.value = from.fullPath
  } else {
    useState('fromRoute', () => from.fullPath)
  }
})