import Aura from '@primevue/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        autoImport: false,
        options: {
            theme: {
                preset: Aura
            },
            ripple: true
        },
        components: {
            include: [
                'Button',
                'InputText',
                'Menubar',
                'DataTable',
                'Column',
            ]
        }
    },
    css: ['assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            watch: {
                usePolling: true
            },
            hmr: {
                port: 24678,
                host: '0.0.0.0'
            }
        }
    },
    devtools: {
        enabled: true
    },
    compatibilityDate: "2025-01-26",
})