/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App';

import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';

import Routes from './router/routes';

import { store } from './store/index';

import './filters';

import './container';

import VeeValidate from 'vee-validate';

import Moment from 'vue-moment'

import 'animate.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
// import VueNumber from 'vue-number-animation'
import gsap from 'gsap'
import AnimatedNumber from "animated-number-vue";
import AOS from "aos";
import 'aos/dist/aos.css'
// import Swiper from 'swiper';
// import 'swiper/css';
// import { register } from 'swiper/element/bundle';
// register();
// import VueObserveVisibility from 'vue-observe-visibility'


// initialize plugins
Vue.use(VueRouter)
// Vue.use(VeeValidate)
// Vue.use(Moment)
Vue.use(AnimatedNumber)

// Vue.use(VueObserveVisibility)

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    linkActiveClass: 'font-semibold'
})


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('landing-banner', require('./components/landing/Banner.vue').default);
Vue.component('landing-services', require('./components/landing/Services.vue').default);
Vue.component('popular-cats', require('./components/landing/PopularCats.vue').default);
Vue.component('number-counter', require('./components/children/NumberCounter.vue').default);
Vue.component('test', require('./components/children/Test.vue').default);
Vue.component('featured-jobs', require('./components/landing/FeaturedJobs.vue').default);
Vue.component('landing-job-card', require('./components/landing/LandingJobCard.vue').default);
Vue.component('freelancer-register', require('./components/landing/FreelancerRegister.vue').default);
Vue.component('client-register', require('./components/landing/ClientRegister.vue').default);
Vue.component('why-freelancer', require('./components/landing/WhyFreelancer.vue').default);
Vue.component('test', require('./components/landing/Test.vue').default);
Vue.component('test4', require('./components/landing/Test4.vue').default);
Vue.component('why-freelancer-card', require('./components/children/WhyFreelancerCard.vue').default);
Vue.component('how-it-works', require('./components/landing/HowItWorks.vue').default);
Vue.component('top-freelancers', require('./components/landing/TopFreelancers.vue').default);
Vue.component('freelancer-card', require('./components/children/FreelancerCard.vue').default);
// Vue.component('client-lead', require('./components/landing/ClientLead.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    vuetify,
    store,
    mounted() {
        AOS.init()
    },
});
