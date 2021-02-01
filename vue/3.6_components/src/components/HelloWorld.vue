<template>
  <div class="hello">
    <Validate #default="{validate}" :value="value" :rules="rules">
      <input v-model="value" @blur="validate" />
    </Validate>
  </div>
</template>

<script>
import Validate from "./validate";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value);
          },
          message: "请输入一个数字"
        }
      ]
    };
  },
  components: {
    Validate
  }
};
</script>
