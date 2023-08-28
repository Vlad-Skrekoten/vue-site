import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import mainBlock1 from './components/mainBlock1.vue'
import mainBlock2 from './components/mainBlock2.vue'
import Slider from './components/Slider.vue'


const app = createApp(App);
app.component('Header', Header);
app.component('mainBlock1', mainBlock1);
app.component('mainBlock2', mainBlock2);
app.component('Slider', Slider);
app.component('Footer', Footer);
app.mount('#app');
