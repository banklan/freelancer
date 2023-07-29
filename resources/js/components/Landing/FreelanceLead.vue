<template>
    <div class="client_lead">
        <div class="wrap" data-aos="fade-up" data-aos-delay="300">
            <div class="content">
                <div class="lead">
                    <div class="box">
                        <div class="subject">Boss your own time. </div>
                        <div class="follow">Freelance with us.</div>
                        <div class="cta">
                            <v-btn shaped outlined x-large color="white">Register As Freelancer</v-btn>
                        </div>
                    </div>
                </div>
                <div class="illustration">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .client_lead{
        width: 100vw;
        height: 39rem;
        .wrap{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            .content{
                width: 100%;
                height: 100%;
                display: flex;
                background: #fff;
                background-image: linear-gradient(to bottom, rgba(32, 32, 32, 0.75), rgba(32, 32, 32, 0.75), rgba(32, 32, 32, 0.75)), url(/assets/images/freelancer1.jpg);
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;

                .lead{
                    width: 80%;
                    height: 100%;
                    -webkit-clip-path: polygon(0 0, 55% 0, 75% 100%, 0% 100%);
                    clip-path: polygon(0 0, 55% 0, 75% 100%, 0% 100%);
                    background: #851941;
                    background: #0B3B29;
                    background: -webkit-linear-gradient(to top right, #0B3B29 0%, #0D4530 50%, #167350 100%);
                    background: -moz-linear-gradient(to top right, #0B3B29 0%, #0D4530 50%, #167350 100%);
                    background: linear-gradient(to top right, #0B3B29 0%, #0D4530 50%, #167350 100%);
                    color: #fff;
                    z-index: 1000;
                    .box{
                        // margin: 3rem 2rem 2rem 3rem;
                        margin: 1.5rem 2rem;
                        text-align: center;
                        width: 55%;
                        height: 100%;
                        // background: red;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .subject, .follow{
                            font-size: 3.2rem;
                            color: #fff;
                            font-weight: 300;
                            line-height: 1.7;
                        }
                        .cta{
                            margin: 1.5rem auto;
                        }
                    }
                }
                // .illustration{
                //     // background:
                // }
            }
        }

    }
</style>

