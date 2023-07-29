<template>
    <div class="welcome_banner">
        <!-- <div class="caption">
            <h1>here is the big caption that is very bold</h1>
        </div> -->
        <v-carousel cycle height="100%" hide-delimiter-background hide-delimiters show-arrows>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-img :src="`/assets/images/${slide.slide}`" height="100%" width="100%" alt="banner image" class="fill-height text-center">
                    <div class="banner_caption">
                        <div class="text-h2">Connect your skills to your dream jobs...</div>
                        <div class="primary_variant2--text find">Find the perfect talent for your projects!</div>
                    </div>
                </v-img>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<style lang="scss" scoped>
    .welcome_banner{
        margin-top: -10rem;
        height: 100vh;
        // display: flex;
        .v-image{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            .banner_caption{
                margin: 0 auto;
                // border: 1px solid #000;
                background: rgba(0,0,0, 0.55);
                color: #fff;
                padding: 6rem 2rem;
                // height: 10rem;
                width: 60%;
                border-radius: 6px;
                border: 1px solid #2a2a2a;
                text-align: center;
                .find{
                    font-size: 2rem;
                    font-weight: 300;
                    margin-top: 2.5rem;
                }
            }
        }

    }

</style>


<script>
export default {
    data() {
        return {
            q: '',
            slides: [
                {slide:'slide_1.jpg'},
                {slide:'slide_2.jpg'},
                {slide:'slide_3.jpg'},
                {slide:'slide_4.jpg'},
            ]
        }
    },
}
</script>

