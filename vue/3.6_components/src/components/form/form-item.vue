<template>
  <div>
    <span>{{label}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dda-form-item',
  props: ['label', 'prop'],
  mounted() {
    console.log(this.label);
    console.log(this.prop);
  }
}
</script>