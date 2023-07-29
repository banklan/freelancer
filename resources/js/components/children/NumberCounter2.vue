<template>
    <div>
        <number
            :ref="number1"
            :from="100"
            :to="10000"
            :format="theFormat"
            :duration="1"
            :delay="2"
            easing="Power1.easeOut"/>

        <number
            tag="div"
            animationPaused
            :ref="number2"
            :to="10000"
            :duration="1"
            easing="Back.easeIn"
            @complete="completed"
            @click="playAnimation"/>

    </div>
</template>


<script>
export default {
    // Sets the format of the number
    props: ['number1', 'number2'],
    methods: {
        theFormat(number) {
            return number.toFixed(2);
        },
        completed() {
            console.log('Animation ends!');
        },
        playAnimation() {
            this.$refs.number2.play()
        }
    }
}
</script>
