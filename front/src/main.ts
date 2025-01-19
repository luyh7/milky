import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';


import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// 引入样式
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.mount('#app');
