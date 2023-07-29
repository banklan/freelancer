<template>
    <nav v-if="pgScrollPosition > 60">
        <v-app-bar flat fixed light class="white--text hidden-sm-and-down sec_nav" height="90">
            <v-toolbar-items class="hidden-sm-and-down align-center">
                <v-btn class="white--text" text v-for="menu in menus" :key="menu.title">
                    <router-link class="white--text" :to="menu.path">{{ menu.title }}</router-link>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {title: 'Link1', path: '/'},
                {title: "Link2", path: "/about-us"},
                {title: "Link3", path: "/schools"},
                {title: "Link4", path: "/blog"},
                {title: "Link5", path: "/contact-us"},
            ]
        }
    },
    computed: {
        pgScrollPosition(){
            return this.$store.getters.pgScrollPosition
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        margin-top: -8rem;
        background: red;
        position: fixed;
        .sec_nav{
            z-index: 100;
            // margin-top: 12rem;
        }
    }
</style>
