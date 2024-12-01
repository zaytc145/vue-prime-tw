import MainTheme from "@/common/themes/MainTheme.js";

export default {
    theme: {
        preset: MainTheme,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
}
