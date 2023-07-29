<template>
    <div class="freelancer_reg" data-aos="fade-up" data-aos-delay="300">
        <div class="wrap">
            <div class="left">
                <div class="subject">
                    Re-write your work rules. Join for free.
                </div>
                <div class="content">
                    <div class="steps">
                        <div class="step">
                            <div class="icon">
                                <v-icon size="35">mdi-handshake-outline</v-icon>
                            </div>
                            <div class="text">
                                Register as a freelancer
                            </div>
                        </div>
                        <div class="step">
                            <div class="icon">
                                <v-icon size="35">mdi-check-decagram-outline</v-icon>
                            </div>
                            <div class="text">
                                Complete your profile and get verified
                            </div>
                        </div>
                        <div class="step">
                            <div class="icon">
                                <v-icon size="35">mdi-account-hard-hat-outline</v-icon>
                            </div>
                            <div class="text">
                                Get jobs, get endorsements and get even more jobs
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pointer">
                    <div class="text">Don't know where to start?</div>
                </div>
                <div class="cta">
                    <v-btn elevation="12" x-large retain-focus-on-click rounded ripple color="secondary" dark>Register As a Freelancer</v-btn>
                </div>
            </div>
            <div class="right">
                <img src="/assets/images/freelancer_ai.jpg" alt="">
                <!-- here is the right content -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .freelancer_reg{
        margin-top: 6rem;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        .wrap{
            box-shadow: 0 1px 1px rgba(0, 0,0, 0.25);
            display: flex;
            justify-content: stretch;
            height: 100%;
            width: 92%;
            margin: 0 auto;
            overflow: hidden;
            .left{
                background: hsl(158, 68%, 11%);
                color: #fff;
                height: 100%;
                width: 50%;
                padding: 16px 12px;
                .subject{
                    text-align: center;
                    color: #fff;
                    font-size: 2.4rem;
                    font-weight: 300;
                    margin: 2.5rem auto;
                    line-height: 56px;
                }
                .content{
                    padding: 6px 8px;
                    color: #fff;
                    .steps{
                        .step{
                            display: flex;
                            align-items: center;
                            margin-bottom: 2rem;
                            gap: 2.5rem;
                            padding-left: 2rem;
                            .v-icon{
                                color: #fff;
                            }
                            .text{
                                font-size: 2rem;
                                font-weight: 300 !important;
                            }
                        }
                    }
                }
                .pointer{
                    padding: 0 1.2rem 3rem 2.5rem;
                    color: #fff;

                    .text{
                        font-size: 2rem;
                    }
                }
                .cta{
                    text-align: center;
                    // margin: 2rem auto 2.5rem;
                }
            }
            .right{
                width: 50%;
                background: red;
                height: 100%;
                overflow: hidden;
                // height: fit-content;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
