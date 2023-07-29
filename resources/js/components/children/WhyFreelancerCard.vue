<template>
    <div class="reason" @click="flip" :class="flipCard ? 'flip_card' : ''">
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
</template>

<script>
export default {
    props: ['reason'],
    data() {
        return {
            flipCard: false
        }
    },
    methods: {
        flip()
        {
            this.flipCard = !this.flipCard
        }
    },
}
</script>

<style lang="scss" scoped>
    .reason{
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        position: relative;
        cursor: pointer;
        transition: transform 1s;
        transform-style: preserve-3d;
        // transform-origin: center right;
        // &.flip_card .back{
        //     transform: rotateY(0);
        // }
        // &.flip_card .front{
        //     transform: rotateY(-180deg);
        // }
        // &.flip_card{
        //     transform: rotateY(-180deg);
        //     // transform: translateX(-100%) rotateY(-180deg);
        // }
        &:hover .card_face{
            box-shadow: 0 6px 6px rgba(0,0,0,.4);
        }
        .card_face{
            height: 100%;
            width: 100%;
            border: 1px solid rgb(197, 197, 197);
            border-radius: 6px;
            position: absolute;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
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
            transform: rotateY(180deg);
        }

    }
    .reason.flip_card{
        transform: rotateY(180deg);
    }

</style>
