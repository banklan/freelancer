<template>
    <div class="why_freelancer landing_section">
        <div class="wrap" data-aos="fade-up" data-aos-delay="300">
            <div class="subject">
                How it works?
            </div>
            <div class="reasons_cont">
                <div class="reasons">
                    <div class="col_card" v-for="reason in reasons" :key="reason.id">
                        <div class="reason">
                            <div class="front card_face">
                                <div class="title">{{ reason.topic }}</div>
                                <div class="icon">
                                    <v-icon>mdi-rotate-3d-variant</v-icon>
                                </div>
                            </div>
                            <div class="back card_face">
                                <div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus ut aliquam odit assumenda omnis?</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
      data() {
        return {
            reasons: [
                {id:1, topic: 'Register & Build Your profile', body: 'This is the back statement that will show when the card flips around'},
                {id:2, topic: 'Boost Visibility And Get Hired ', body: 'This is the back statement that will show when the card flips around'},
                {id:3, topic: 'Get a pat, we receive project deposit', body: 'This is the back statement that will show when the card flips around'},
                {id:4, topic: 'Complete Project, receive full payment', body: 'This is the back statement that will show when the card flips around'},
                // {id:4, topic: 'Right fit', body: 'This is the back statement that will show when the card flips around'},
            ],
            flipCard: false,
        }
      },
      methods: {
          flip() {
            this.flipCard = true
           },
      },
    }
</script>

<style lang="scss" scoped>
    .why_freelancer{
        width: 100vw;
        height: 100vh;
        .wrap{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            .subject{
                text-align: center;
                color: #03110c;
                font-size: 44px;
                font-weight: 300;
                margin: 36px 0 18px;
                line-height: 56px;
                padding: 2.5rem 1.5rem;
            }
            .reasons_cont{
                margin: 0 auto;
                padding:1rem 2.5rem;
                .reasons{
                    width: 98%;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 3rem;
                    text-align: center;
                    margin: 0 auto;
                    .col_card{
                        width: 100%;
                        height: 23rem;
                        .reason{
                            width: 100%;
                            height: 100%;
                            perspective: 1000px;
                            transition: all .4s ease;
                            transform-style: preserve-3d;
                            position: relative;
                            cursor: pointer;
                            &:hover .card_face{
                                box-shadow: 0 6px 6px rgba(0,0,0,.4);
                            }
                            .card_face{
                                height: 100%;
                                width: 100%;
                                // border: 1px solid rgb(197, 197, 197);
                                border-radius: 6px;
                                position: absolute;
                                backface-visibility: hidden;
                                transition: all .6s ease;
                            }
                            .front{
                                width: 100%;
                                height: 100%;
                                background: #008F5B;
                                background: -webkit-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                                background: -moz-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                                background: repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                                color: #fff;
                                text-align: center;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                // position: relative;
                                .title{
                                    font-size: 2.2rem !important;
                                    padding: 0 12px;
                                    font-weight: 400 !important;
                                    line-height: 1.7;
                                }
                                .icon{
                                    position: absolute;
                                    bottom: 10px;
                                    right: 10px;
                                    .v-icon{
                                        color: #fff !important;
                                        font-size: 2rem !important;
                                    }
                                }

                            }
                            .back{
                                background: #fff;
                                width: 100%;
                                height: 100%;
                                color: #008F5B;
                                font-size: 1.65rem;
                                line-height: 1.8;
                                text-align: center;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 15px 11px;
                                transform:rotateY(180deg);
                            }
                            &:hover .back{
                                transform: rotateY(0);
                            }
                            &:hover .front{
                                transform: rotateY(-90deg);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
