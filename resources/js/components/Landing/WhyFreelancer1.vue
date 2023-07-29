<template>
    <div class="why_freelancer" >
        <div class="wrap" data-aos="fade-up" data-aos-delay="500">
            <!-- <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ducimus odio porro a consequatur. Maxime enim tempora unde alias impedit nulla obcaecati officia veniam mollitia nostrum quis nihil sunt labore ipsa architecto libero necessitatibus, repellendus, pariatur adipisci atque repellat. Aspernatur beatae excepturi quisquam eos consequatur dolores quod, quasi soluta maxime.</h3> -->
            <div class="subject">
                Why You should use freelancer.com
            </div>
            <div class="reasons">
                <div class="wrapper">
                    <div class="reason" v-for="reason in reasons" :key="reason.id">
                        <div class="front card_side">
                            <div class="title">{{ reason.topic }}</div>
                            <!-- <div class="title">test</div> -->
                            <!-- <div class="icon">
                                <svg enable-background="new 0 0 70 70" height="170px" id="Icons" version="1.1" viewBox="0 0 70 70" width="70px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M51.211,30.05V18.789L47.01,22.99C43.937,19.91,39.695,18,35,18c-9.389,0-17,7.611-17,17s7.611,17,17,17  c6.319,0,11.82-3.455,14.75-8.571l-3.475-1.986C44.032,45.354,39.823,48,35,48c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13  c3.585,0,6.828,1.464,9.18,3.82l-4.23,4.23H51.211z"/></svg>
                            </div> -->
                        </div>
                        <div class="back card_side">
                            <div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus ut aliquam odit assumenda omnis?</div>
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
                {id:1, topic: 'Integrity', body: 'This is the back statement that will show when the card flips around'},
                {id:2, topic: 'Fast', body: 'This is the back statement that will show when the card flips around'},
                {id:3, topic: 'Peace of Mind', body: 'This is the back statement that will show when the card flips around'},
                {id:4, topic: 'Right fit', body: 'This is the back statement that will show when the card flips around'},
            ],
            flipCard: false,
        }
      },
      methods: {
          hideFront() { },
        //   flip()
        //   {
        //     this.flipCard = true
        //   }

      },
    }
</script>

<style lang="scss" scoped>
    .why_freelancer{
        width: 100vw;
        height: 100vh;
        // margin-top: 2.5rem;
        background: repeating-linear-gradient(to bottom right, #EBF2EB 0%, #F2F9F2 100%);
        .wrap{
            height: 100%;
            width: 100%;
            background: #F2F9F2;
           .subject{
                font-family: MoreThan, Helvetica, Arial, sans-serif;
                font-weight: 100;
                font-size: 2.5rem;
                padding: 3.5rem 1rem 3rem;
                text-align: center;
            }
            .reasons{
                width: 100vw;
                margin: 0 auto;
                .wrapper{
                    margin: 0 auto;
                    width: 90%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    gap: 1rem;
                    perspective: 1000px;

                    .reason{
                        // border: 1px solid #363636;
                        border-radius: 8px;
                        box-sizing: border-box;
                        background: #008F5B;
                        background: -webkit-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                        background: -moz-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                        background: repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
                        color: #fff;
                        text-align: center;
                        height: 18rem;
                        width: 100%;
                        box-shadow: 0 2rem 2rem rgba(0, 0, 0, .5);
                        align-items: center;
                        // margin-left: .75rem;
                        // margin-right: .75rem;
                        cursor: pointer;
                        overflow: hidden;
                            // position: relative;
                        // transition: transform 0.8s;
                        position: relative;
                        // perspective: 1000px;
                        transition: transform 1s;
                        transform-style: preserve-3d;
                        // transform-style: preserve-3d;
                        &:hover .card_side{
                            transform: rotateY(180deg);
                        }
                        &:hover .front{
                            transform: rotateY(-180deg);
                        }
                        &:hover .back{
                            transform: rotateY(0);
                        }
                        .card_side{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            position:absolute;
                            top:0;
                            left:0;
                            transition: all .4s ease;
                            backface-visibility: hidden;
                            -webkit-backface-visibility: hidden;

                            .back{
                                transform:rotateY(180deg);
                            }
                            // width:100%;
                        }
                    }
                }
            }
        }
    }




    //             .reasons_row{
    //                 // width: 100vw;

    //                 .col_card{
    //                     perspective: 1000px;
    //                     // &.flip_card{
    //                     //     transform: rotateY(180deg);
    //                     // }

    //                     &:hover .reason{
    //                         // transform: rotateY(180deg);
    //                         & > .front{
    //                             display: none;
    //                             visibility: hidden;
    //                             transform: rotateY(-180deg);
    //                         }
    //                         & > .back{
    //                             display: flex;
    //                             visibility:visible;
    //                             transform: rotateY(0);
    //                         }
    //                     }
    //                     .reason{
    //                         border: 1px solid #363636;
    //                         border-radius: 8px;
    //                         box-sizing: border-box;
    //                         background: #008F5B;
    //                         background: -webkit-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
    //                         background: -moz-repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
    //                         background: repeating-linear-gradient(to bottom right, #008F5B 0%, #11573C 100%);
    //                         color: #fff;
    //                         text-align: center;
    //                         height: 18rem;
    //                         box-shadow: 0 2rem 2rem rgba(0, 0, 0, .5);
    //                         align-items: center;
    //                         margin-left: .75rem;
    //                         margin-right: .75rem;
    //                         cursor: pointer;
    //                         overflow: hidden;

    //                         position: relative;
    //                         transition: transform 0.8s;
    //                         transform-style: preserve-3d;
    //                         perspective: 1000px;

    //                         .front, .back{
    //                             position: absolute;
    //                             width: 100%;
    //                             height: 100%;
    //                             -webkit-backface-visibility: hidden; /* Safari */
    //                             backface-visibility: hidden;
    //                         }
    //                         .front{
    //                             height: 100%;
    //                             width: 100%;
    //                             display: flex;
    //                             flex-direction: column;
    //                             justify-content: center;
    //                             align-items: center;
    //                             .icon{
    //                                 // align-self: end;
    //                                 svg{
    //                                     fill: #fff !important;
    //                                     height: 2.5rem !important;
    //                                 }
    //                             }
    //                         }
    //                         .back{
    //                             // transform: rotateY(180deg);
    //                             height: 100%;
    //                             width: 100%;
    //                             // display: flex;
    //                             // align-items: center;
    //                             // justify-content: center;
    //                             padding: 5px 8px;
    //                             visibility: hidden;
    //                             transform:rotateY(180deg);
    //                             .body{
    //                                 font-size: 1.4rem;
    //                                 line-height: 1.6;
    //                                 // font-family: MoreThan, Helvetica, Arial, sans-serif;
    //                                 font-weight: 300;
    //                                 color: #fff;
    //                                 // padding: ;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
</style>
