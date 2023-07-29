<template>
    <nav>
        <!-- <v-app-bar flat fixed height="90" :class="pgScrollPosition > 60 ? 'primary white--text' : 'transparent dark_text--text'"> -->
            <v-app-bar flat fixed height="90" :class="pgScrollPosition > 60 ? 'primary white--text scrolled_nav' : 'transparent'">
            <span class="hidden-md-and-up">
                <v-app-bar-nav-icon class="white--text hidden-md-and-up" @click="navDrawer = true"></v-app-bar-nav-icon>
            </span>
            <v-toolbar-title class="ml-5">
                <router-link to="/" style="cursor:pointer" exact>
                    <span :class="pgScrollPosition > 60 ? 'white--text' : 'primary--text'" class="nav_title">
                        Freelancer
                    </span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down align-center">
                <!-- <UsersLoginNavDd /> -->
                <!-- <v-hover v-slot="{ hover }"> -->
                <v-btn plain text v-for="menu in menus" :key="menu.title" >
                    <router-link :to="menu.path" :class="pgScrollPosition > 60 ? 'white--text' : 'dark--text'">{{ menu.title }}</router-link>
                </v-btn>
                <!-- </v-hover> -->
            </v-toolbar-items>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            showSec: false,
            menus: [
                {title: 'Home', path: '/'},
                {title: "About Us", path: "/about-us"},
                {title: "Schools", path: "/schools"},
                {title: "Blog", path: "/blog"},
                {title: "Contact Us", path: "/contact-us"},
            ],
            authMenus: [
                {title: 'Home', path: '/'},
                {title: 'Staff Home', path: '/user/dashboard'},
            ],
            navDrawer: false,
            bg: ''
        }
    },
    computed: {
        // api(){
        //     return this.$store.getters.api
        // },
        // userIsLoggedIn(){
        //     return this.$store.getters.userIsLoggedIn
        // },
        // adminIsLoggedIn(){
        //     return this.$store.getters.adminIsLoggedIn
        // },
        // adminHeaders(){
        //     let headers = {
        //         headers: {
        //             "Authorization": `Bearer ${this.authAdmin.token}`
        //         }
        //     }
        //     return headers
        // },
        // authAdmin(){
        //     return this.$store.getters.authAdmin
        // },
        // authUser(){
        //     return this.$store.getters.authUser
        // },
        // authHeaders(){
        //     let headers = {
        //         headers: {
        //             "Authorization": `Bearer ${this.authUser.token}`
        //         }
        //     }
        //     return headers
        // },
        pgScrollPosition(){
            return this.$store.getters.pgScrollPosition
        }
    },
    methods: {
        // openLogin(){
        //     alert('open!')
        // }
        // adminLogout(){
        //     if(this.adminIsLoggedIn){
        //         axios.post(this.api + `/auth-admin/logout`, {}, this.adminHeaders).then(() =>{
        //         this.$store.commit('logOutAdmin')
        //             this.$router.push('/')
        //         })
        //     }
        // },
        // userLogout(){
        //     if(this.userIsLoggedIn){
        //         axios.post(this.api + `/auth/logout`, {}, this.authHeaders).then(() =>{
        //             this.$store.commit('logOutAuthUser')
        //             this.$router.push('/')
        //         })
        //     }
        // }
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
    nav{
        margin-bottom: 8rem !important;

        & > header{
            transition: all .4s ease;

            div.v-toolbar__content{
                height: 100% !important;
                display: flex !important;
                align-items: center !important;
                padding: 8px 16px !important;

                .v-btn {
                    transition: all .4s ease;
                    &:hover::after{
                        background: none !important;
                        background-color: none !important;
                    }
                    a{
                        text-transform:capitalize;
                        font-size: 1.1rem !important;
                        // font-family: "Nunito Sans", sans-serif;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 600 !important;
                        color: #0c0c0c;
                        transition: all .4s ease;
                        text-decoration: none !important;
                        border-bottom: 3px solid transparent;
                        padding-bottom: .6rem;
                    }
                    &:hover {
                        a{
                            color: #19855d;
                            border-bottom: 3px solid #19855d;
                        }
                        // background: none !important;
                        // a{
                        //     color: #19855d !important;
                        //     background: none !important;
                        //     border-bottom: 1px solid #19855d !important;
                        // }
                    }
                }
            }
        }
    }
    // a{
    //     color: #fff !important;
    //     text-decoration: none;
    //     text-transform:capitalize;
    // }
    // a.router-link-exact-active{
    //     color: #c1e6ff !important;
    // }

    // .v-list a.v-list-item:hover .v-list-item__title{
    //     margin-left: 3px !important;
    // }

    // .v-list a.v-list-item    .v-list-item__title{
    //     transition: all 400ms ease;
    // }

    // .v-list-item--active{
    //     background: #c1e6ff !important;
    //     .v-list-item__title{
    //         color: #fff !important;
    //     }
    // }

    // .showSec{
    //     margin-top: 12rem;
    //     transition: all .4s ease;
    // }
    .v-toolbar__title a{
        font-size: 2.5rem;
        font-family: 'Cookie';
        transition: all .4s ease;
    }
    .scrolled_nav{
        .v-toolbar__items button{
            a.router{
                color: #fff !important;
                transition: all 0.4s ease;
                text-decoration: none !important;
                border-bottom: 2px solid transparent !important;
                padding-bottom: .6rem !important;

                &:hover{
                    color: #fefefe !important;
                    border-bottom: 2px solid #fefefe !important;
                }
            }
        }
    }
</style>
