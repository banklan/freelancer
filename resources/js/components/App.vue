<template>
    <v-app>
        <template v-if="$route.path == '/'">
            <WelcomeNavbar />
            <!-- <SecWelcomeNavbar /> -->
            <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                <router-view></router-view>
            </transition>
            <Footer />
        </template>
    </v-app>
</template>

<script>
// import Navbar from './includes/Navbar'
import WelcomeNavbar from './navbars/WelcomeNavbar'
import SecWelcomeNavbar from './navbars/SecWelcomeNavbar'
// import AdminAuthNavbar from './includes/AdminAuthNavbar'
// import UserAuthNavbar from './includes/UserAuthNavbar'

export default {
    components: {
        WelcomeNavbar, SecWelcomeNavbar
    },
    computed:{
        pgScrollPosition(){
            return this.$store.getters.pgScrollPosition
        },
        adminIsLoggedIn(){
            // return this.$store.getters.adminIsLoggedIn
        },
        userIsLoggedIn(){
            // return this.$store.getters.userIsLoggedIn
        },
    },
    methods: {
        handleScroll(){
            if(this.$route.path == '/'){
                this.$store.commit('checkPgScrollHeight')
            }
        },
        doThis()
        {
            alert("this is it!")
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll')
    },
}
</script>

<style lang="scss" scoped>
    .show_sec_navbar{
        // display: block;
        margin-top: 16rem;
        background: red !important;
        color: #fff;
        height: 8rem;
        padding: 2rem 6rem
    }
</style>

