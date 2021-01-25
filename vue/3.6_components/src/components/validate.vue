<template>
  <div>
    <slot :validate="validate"></slot>
    {{errMsg}}
  </div>
</template>

<script>
export default {
  name: 'validate',
  props: ['value', 'rules', 'props'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      let validate = this.rules.reduce((pre, cur) => {
        let check = cur && cur.test && cur.test(this.value);
        this.errMsg = check ? "" : cur.message;
        return pre && check;
      }, true);
      return validate;
    }
  }
}
</script>