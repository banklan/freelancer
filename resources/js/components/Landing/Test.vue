<template>
    <div class="container">
        <div class="wrap">
            <div class="why_card">
                <div class="front card_face">
                    <div class="text">The front</div>
                </div>
                <div class="back card_face">
                    <div class="text">The Back</div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .container{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        margin: 0 auto;
        .wrap{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;

            .why_card{
                height: 20rem;
                width: 15rem;
                cursor: pointer;
                perspective: 1000px;
                transition: all .5s ease;
                transform-style: preserve-3d;
                position: relative;

                .card_face{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    position: absolute;
                    backface-visibility: hidden;
                    transition: transform .5s linear;
                    border: 2px solid red;

                    .text{
                        text-align: center;
                        font-size: 1.8rem;
                        width: 100%;
                        height: 100%;
                    }
                }
                .front{
                    background: green;
                    color: #fff;
                }
                .back{
                    transform:rotateY(180deg);
                    background: blueviolet;
                }
                &:hover .card_face{
                    box-shadow: 0 6px 6px 5px rgba(0,0,0,.5);
                }
                &:hover .back{
                    transform: rotateY(0);
                }
                &:hover .front{
                    transform: rotateY(-180deg);
                }
            }
        }
    }
</style>
