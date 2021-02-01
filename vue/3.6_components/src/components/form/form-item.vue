<template>
  <div
    class="dda-form-item"
    :class="[{ 'is-error': validateState === 'error' }]"
  >
    <span>{{ label }}</span>
    <slot></slot>
    <div>{{ validateMessage }}</div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import objectAssign from "@/utils/merge";
import { getPropByPath } from "@/utils/util";
import emitter from "@/mixins/emitter";
export default {
  name: "ddaFormItem",
  props: ["label", "prop", "rules"],
  inject: ["ddaForm"],
  mixins: [emitter],
  data() {
    return {
      validateState: "",
      validateMessage: "",
      validateDisabled: false,
      isNested: false
    };
  },
  computed: {
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== "ddaForm") {
        if (parentName === "ddaFormItem") {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.name;
      }
      return parent;
    },
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      let path = this.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }

      return getPropByPath(model, path, true).v;
    }
  },
  methods: {
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }

      this.validate("change");
    },
    validate(trigger, callback = () => {}) {
      this.validateDisabled = false;
      const rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }
      this.validateState = "validating";
      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      const model = {};
      model[this.prop] = this.fieldValue;
      console.log("model", model);
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";
          callback(this.validateMessage, invalidFields);
          // this.ddaForm &&
          //   this.ddaForm.$emit(
          //     "validate",
          //     this.prop,
          //     !errors,
          //     this.validateMessage || null
          //   );
        }
      );
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule =
        this.required !== undefined ? { required: !!this.required } : [];

      const prop = getPropByPath(formRules, this.prop || "");
      formRules = formRules ? prop.o[this.prop || ""] || prop.v : [];
      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === "") return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        })
        .map(rule => objectAssign({}, rule));
    },
    addValidateEvents() {
      const rules = this.getRules();
      if (rules.length || this.required !== undefined) {
        this.$on("dda-input-blur", this.onFieldBlur);
      }
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("ddaForm", "dda-form-addField", [this]);
      this.addValidateEvents();
    }
  },
  beforeDestroy() {
    this.dispatch("ddaForm", "dda-form-removeField", [this]);
  }
};
</script>
<style scoped></style>
