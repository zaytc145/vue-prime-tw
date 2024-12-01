import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createORM} from 'pinia-orm'

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import Tooltip from 'primevue/tooltip';

import {abilitiesPlugin} from '@casl/vue';
import ability from './common/ability';

import uiConfig from "@/config/ui.js";

import App from './App.vue'
import router from './router'
import i18n from "@/common/lang";
import webSockets from "@/api/web-sockets.js";

const app = createApp(App)

const pinia = createPinia().use(createORM())

app.use(pinia)
app.use(i18n)
app.use(router)
app.use(PrimeVue, uiConfig);
app.use(ConfirmationService);
app.use(DialogService);
app.directive('tooltip', Tooltip);
app.use(abilitiesPlugin, ability)


app.mount('#app')

webSockets.setup()
