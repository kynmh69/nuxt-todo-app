import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            },
            ripple: true
        }
    },
    devtools: {enabled: true},
    compatibilityDate: "2025-01-26",
})
