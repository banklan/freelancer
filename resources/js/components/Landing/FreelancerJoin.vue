<template>
    <div class="freelancer_join">
        <div class="wrapper">
            <div class="wrap" data-aos="fade-up" data-aos-delay="300">
                <div class="left">
                    <div class="subject">
                        Re-write your work rules. Join for Free
                    </div>
                    <div class="content">
                        <div class="steps">
                            <div class="step">
                                <div class="icon">
                                    <v-icon size="32">mdi-handshake-outline</v-icon>
                                </div>
                                <div class="text">
                                    Register as a freelancer
                                </div>
                            </div>
                            <div class="step">
                                <div class="icon">
                                    <v-icon size="32">mdi-check-decagram-outline</v-icon>
                                </div>
                                <div class="text">
                                    Complete your profile and get verified
                                </div>
                            </div>
                            <div class="step">
                                <div class="icon">
                                    <v-icon size="32">mdi-account-hard-hat-outline</v-icon>
                                </div>
                                <div class="text">
                                    Get jobs, get endorsements and boost your ranking.
                                </div>
                            </div>
                            <div class="step">
                                <div class="icon">
                                    <v-icon size="32">mdi-cash-multiple</v-icon>
                                </div>
                                <div class="text">
                                    Get more jobs and boost your earning.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="pointer">
                        <div class="text">Don't know where to start?</div>
                    </div>
                    <div class="cta">
                        <v-btn elevation="12" x-large retain-focus-on-click rounded ripple color="secondary" dark>Register As a Freelancer</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .freelancer_join{
        width: 100vw;
        min-height: 42rem;
        margin: 0 auto;
        padding: 0;
        .wrapper{
            width: 100%;
            height: 100%;
            background: #0b412d;
            background-image: linear-gradient(to right,#0b412d 0%, rgba(11, 65, 45, .75), rgba(11, 65, 45, .50), rgba(11, 65, 45, .25)), url(/assets/images/freelancer2.jpg);
            // background-image: linear-gradient(to bottom, rgba(32, 32, 32, 0.75), rgba(32, 32, 32, 0.75), rgba(32, 32, 32, 0.75)), url(/assets/images/freelancer2.jpg);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            .wrap{
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 100%;
                width: 100%;
                padding: 3rem 1.5rem;
                .left{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .subject{
                        padding: 3.5rem 1rem 2.5rem 3rem;
                        color: #fff;
                        font-size: 2.4rem;
                        font-weight: 300;
                        padding-left: 5rem;
                    }
                    .content{
                        padding: 1rem;
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
                                    font-size: 1.2rem;
                                }
                                .text{
                                    font-size: 2rem;
                                    line-height: 1.7;
                                    font-weight: 300 !important;
                                }
                            }
                        }
                    }
                }
                .right{
                    .pointer{
                        padding-bottom: 1.5rem;
                        color: #fff;
                        .text{
                            font-size: 1.7rem;
                        }
                    }
                }
            }
        }
    }
</style>
