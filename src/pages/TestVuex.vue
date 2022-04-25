<template>
  <div class="test">
    <counter />
    <counterSquared />
    <counterBtns />
    <colorCodeComp />
  </div>
</template>
<script>
import counter from "./../components/TestComponets/Conuter.vue";
import counterSquared from "./../components/TestComponets/CounterSquareData.vue";
import counterBtns from "./../components/TestComponets/CounterBtns.vue";
import colorCodeComp from "../components/TestComponets/ColorCodeComp.vue";

export default {
  name: "test-vuex",
  
  components: {
    counter,
    counterSquared,
    counterBtns,
    colorCodeComp,
  },
};
</script>
<style lang="scss" scoped>
.test {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
}
</style>
