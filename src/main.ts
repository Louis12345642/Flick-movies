import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt';
const emitter = mitt();
export default emitter
import App from './App.vue'
import router from './router'
import './assets/style.css';

const app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(createPinia())
app.use(router)

app.mount('#app')
