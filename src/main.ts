import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';

const app = createApp(App);

app.use(PrimeVue, { ripple: true, unstyled: false });

app.component('Carousel', Carousel);
app.mount('#app');
