// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit=cover'
    }
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      // do not update this, it will be overwritten by the build but it needs to be exactly this here
      // otherwise, update the build script in API (to create new projects)
      GITHUB_REPO: 'manifest-hq/manifest-project-ubgsqm',
      GITHUB_BRANCH: process.env.NUXT_PUBLIC_GITHUB_BRANCH,
      PROJECT_ID: 'manifest-project-ubgsqm'
    }
  },
  ssr: false,
  nitro: {
    preset: 'nitro-prerender'
  }
})
