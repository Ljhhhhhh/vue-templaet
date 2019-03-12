<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="选择" prop="check">
        <i-checkbox-group :value="checkArr">
          <i-checkbox :label="0"></i-checkbox>
          <i-checkbox :label="1"></i-checkbox>
          <i-checkbox :label="2"></i-checkbox>
        </i-checkbox-group>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
import iForm from '../components/form/form';
import iFormItem from '../components/form/form-item';
import iInput from '../components/input/input';
import iCheckbox from '../components/checkbox/checkbox';
import iCheckboxGroup from '../components/checkbox/checkbox-group';

export default {
  components: { iForm, iFormItem, iInput, iCheckboxGroup, iCheckbox },
  data() {
    return {
      checkArr: [0, 1],
      formValidate: {
        name: '',
        mail: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // eslint-disable-next-line
          window.alert('提交成功');
        } else {
          // eslint-disable-next-line
          window.alert('表单校验失败');
        }
      });
    },
    handleReset() {
      // TODO:: is not a function
      // console.log(typeof this.$refs.form.resetFields);
      this.$refs.form.resetFields();
    },
  },
};

</script>
