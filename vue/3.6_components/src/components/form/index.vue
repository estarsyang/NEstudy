<template>
  <div>
    <slot :validate="validate"></slot>
  </div>
</template>

<script>
import objectAssign from "@/utils/merge";
export default {
  name: "ddaForm",
  props: ["model", "rules"],
  watch: {
    rules() {
      // remove then add event listeners on form-item after form rules change
      this.fields.forEach(field => {
        field.removeValidateEvents();
        field.addValidateEvents();
      });
    }
  },
  provide() {
    return {
      ddaForm: this
    };
  },
  data() {
    return {
      fields: []
    };
  },
  created() {
    this.$on("dda-form-addField", field => {
      console.log(123);
      if (field) {
        this.fields.push(field);
      }
    });
    this.$on("dda-form-removeField", field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },
  methods: {
    validate(callback) {
      if (!this.model) {
        console.warn(
          "[Element Warn][Form]model is required for validate to work!"
        );
        return;
      }

      let promise;
      // if no callback, return promise
      if (typeof callback !== "function" && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      let valid = true;
      let count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      let invalidFields = {};
      this.fields.forEach(field => {
        field.validate("", (message, field) => {
          if (message) {
            valid = false;
          }
          invalidFields = objectAssign({}, invalidFields, field);
          if (
            typeof callback === "function" &&
            ++count === this.fields.length
          ) {
            callback(valid, invalidFields);
          }
        });
      });

      if (promise) {
        return promise;
      }
    }
  }
};
</script>
