import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router'

import {abilitiesPlugin} from '@casl/vue';
import ability from './ability';
import uiConfig from "@/config/ui.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, uiConfig);
app.use(ConfirmationService);
app.use(DialogService);
app.directive('tooltip', Tooltip);
app.use(abilitiesPlugin, ability)

app.mount('#app')

