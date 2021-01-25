<template>
  <div class="hello">
    <dda-form :model="formData" :rules="rules" >
      <dda-form-item label="姓名" prop="name">
        <input v-model="formData.name" />
      </dda-form-item>
    </dda-form>
  </div>
</template>

<script>
import DdaForm from '../../components/form'
import DdaFormItem from '../../components/form/form-item'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return{
      formData: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          {
            validator: () => {

            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    'dda-form': DdaForm,
    'dda-form-item': DdaFormItem,
  }
};
</script>
