<template>
  <div>
    <slot :validate="validate"></slot>
  </div>
</template>

<script>
export default {
  name: 'dda-form',
  props: ['model', 'rules'],
  methods:{
    validate() {
      
    }
  }
}
</script>