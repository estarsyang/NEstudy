<template>
  <span>
    <input
      :value="value"
      v-bind="$attrs"
      @input="handleInput"
      @blur="handleBlur"
    />
  </span>
</template>

<script>
import emitter from "@/mixins/emitter";
export default {
  name: "dda-input",
  props: {
    value: [String]
  },
  mixins: [emitter],
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleBlur(event) {
      this.$emit("blur", event.target.value);
      this.dispatch("ddaFormItem", "dda-input-blur");
    }
  }
};
</script>
