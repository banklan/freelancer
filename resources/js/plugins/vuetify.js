import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#19855d',
                // primary: '#00d084',
                primary_variant1: '#008f5b',
                primary_variant2: '#00ee97',
                // primary_variant3: '#19855d',
                // secondary: '#D0004C',
                secondary: '#851941',
                // secondary_variant1: '#a3003c',
                // secondary_variant2: '#ff1a6e',
                light_text: '#0e0e0e',
                dark_text: '#1c1c1c',
                grey_text: '#19191a',
                background: '#f9f9f9',
                white_text: '#fff'
            }
        }
    }
}

export default new Vuetify(opts)
