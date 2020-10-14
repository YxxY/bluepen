<template>
  <div id="container">
    <p> Since: {{ deadline1 }}</p>
    <component v-if="dynamicComponent" :is="dynamicComponent" :deadline="deadline1"></component>
  </div>
</template>
<script>
import dayjs from "dayjs";

const fmt = "YYYY-MM-DD HH:mm:ss";

export default {
  props: {
    deadline: {
      type: String
    }
  },
  data() {
    return {
      //   deadline1: dayjs().add(10, 's').format(fmt),
      dynamicComponent: null
    };
  },
  computed: {
    deadline1() {
      return dayjs(this.deadline).format(fmt);
    }
  },
  mounted() {
    import("./FlipCountup").then(module => {
      this.dynamicComponent = module.default;
    });
  }
};
</script>
<style scoped>
#container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px 0 50px 0;
}
</style>
