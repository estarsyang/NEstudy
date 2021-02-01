<template>
  <div class="hello">
    <dda-form ref="form" :model="formData" :rules="rules">
      <dda-form-item label="姓名" prop="name">
        <dda-input v-model="formData.name" />
      </dda-form-item>
      <dda-form-item label="年龄" prop="age">
        <dda-input v-model="formData.age" />
      </dda-form-item>
    </dda-form>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      formData: {
        name: "",
        age: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        age: [
          {
            type: "string",
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (Number(value) > 1) {
                callback("年龄超限");
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      console.log(this.$refs.form);
      this.$refs.form.validate(res => {
        console.log(res);
      });
    }
  }
};
</script>
