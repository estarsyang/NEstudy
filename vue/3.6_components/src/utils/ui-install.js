import DdaForm from "@/components/form/index";
import DdaFormItem from "@/components/form/form-item";
import DdaInput from "@/components/input/index.vue";

const uiComponents = {
  "dda-form": DdaForm,
  "dda-form-item": DdaFormItem,
  "dda-input": DdaInput
};

export default function install(Vue) {
  Object.keys(uiComponents).forEach(key => {
    Vue.component(key, uiComponents[key]);
  });
}
