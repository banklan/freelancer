<template>
    <div class="client_register landing_section">
        <div class="wrap" data-aos="fade-up" data-aos-delay="300">
            <div class="subject">
                Got a project? Pick the best talent for the job here
            </div>
            <div class="content">
                <div class="lead">
                    Steps from start to end
                </div>
                <div class="steps">
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-bulletin-board</v-icon></div>
                        <div class="text">Post your project - Details of the projects including your budget. </div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-format-list-checkbox</v-icon></div>
                        <div class="text">Get Quotes from freelancers, choose the best fit for your project. </div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-handshake</v-icon></div>
                        <div class="text">Agree on terms of the contract, share contract assets</div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-credit-card-outline</v-icon></div>
                        <div class="text">Pay 25% of contract sum in deposit</div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-ray-start-end</v-icon></div>
                        <div class="text">On conclusion of project, client mark project as completed.</div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-credit-card-outline</v-icon></div>
                        <div class="text">Payment of balance 75% contract sum and release of payment to Freelancer. </div>
                    </div>
                    <div class="step">
                        <div class="icon"><v-icon size="35">mdi-stop-circle-outline</v-icon></div>
                        <div class="text">Closing of project</div>
                    </div>
                </div>
                <div class="cta">
                    <v-btn x-large elevation="12" rounded dark color="secondary">Register As Client</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .client_register{
        padding: 0;
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(to bottom,rgba(0,0,0,0.92),rgba(0,0,0,0.80),rgba(0,0,0,0.65),rgba(0,0,0,.55),rgba(0,0,0,0.48)),url('/assets/images/slide_1.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        .wrap{
            height: 100%;
            width: 100%;
            padding: 1.5rem 2.5rem;
            color: #fff;

            .subject{
                text-align: center;
                color: #fff;
                font-size: 2.4rem;
                font-weight: 300;
                margin: 1rem auto 1rem;
                // line-height: 56px;
            }
            .content{
                padding: 1.5rem 2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                margin: 0 auto;
                .lead{
                    font-size: 1.6rem;
                    font-weight: 300;
                    margin-bottom: 1.8rem;
                }
                .steps{
                    margin-top: 1rem;
                    width: 80%;
                    // font-size: 1.8rem;
                    .step{
                        display: flex;
                        gap: 2rem;
                        margin-bottom: 1.3rem;

                        .icon{
                            .v-icon{
                                color: #fff !important;
                            }
                        }
                        .text{
                            color: #fff;
                            font-size:1.45rem;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }
</style>
