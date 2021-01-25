<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <FormValidate />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FormValidate from "./pages/form-validate/index";

export default {
  name: "App",
  components: {
    // HelloWorld,
    FormValidate
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
