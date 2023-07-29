<template>
    <div>
        <animated-number
            :value="number"
            :formatValue="formatToPrice"
            :duration="2000"
        />
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
    },
  props: ['number'],
  data() {
    return {
      value: 1000
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
}
</script>
