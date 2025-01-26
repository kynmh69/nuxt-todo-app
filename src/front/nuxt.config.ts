import Aura from '@primevue/themes/aura';
import tailwindcss from "@tailwindcss/vite";

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
    css: ['assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    devtools: {enabled: true},
    compatibilityDate: "2025-01-26",
})
