import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import mainBlock1 from './components/mainBlock1.vue'
import mainBlock2 from './components/mainBlock2.vue'
import mainBlock3 from './components/mainBlock3.vue'
import mainBlock4 from './components/mainBlock4.vue'
import Slider from './components/Slider.vue'
import mainBlock5 from './components/mainBlock5.vue'
import mainBlock6 from './components/mainBlock6.vue'
import mainBlock7 from './components/mainBlock7.vue'


const app = createApp(App);
app.component('Header', Header);
app.component('mainBlock1', mainBlock1);
app.component('mainBlock2', mainBlock2);
app.component('mainBlock3', mainBlock3);
app.component('mainBlock4', mainBlock4);
app.component('mainBlock5', mainBlock5);
app.component('mainBlock6', mainBlock6);
app.component('mainBlock7', mainBlock7);
app.component('Slider', Slider);
app.component('Footer', Footer);
app.mount('#app');
