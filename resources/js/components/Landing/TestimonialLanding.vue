<template>
    <div class="testimonial_landing landing_section">
        <div class="wrap" data-aos="fade-up" data-aos-delay="300">
            <div class="subject">
                Dont take our work for it..Here what they are saying...
            </div>
            <div class="content">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide slide">Slide 1</div>
                        <div class="swiper-slide slide">Slide 2</div>
                        <div class="swiper-slide slide">Slide 3</div>
                        <div class="swiper-slide slide">Slide 4</div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

// import Swiper from 'swiper/vue';
// import 'swiper/css';
export default {

}
</script>


<style lang="scss" scoped>
    .testimonial_landing{
        min-height: 38rem;
        width: 100vw;
        padding: 0;
        margin: 3rem auto;
        .wrap{
            height: 100%;
            width: 100%;
            margin: 0 auto;
            text-align: center;

            .swiper {
                width: 600px;
                height: 300px;
                // .swiper-wrapper{
                //     width: 100%;
                //     height: 100%;
                //     display: flex;
                //     justify-content: center;
                //     align-items: center;
                // }
                .slide{
                    background: red;
                    border: 1px solid #3e3e3e;
                    border-radius: 6px;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2rem;
                }
            }
        }
    }
</style>
