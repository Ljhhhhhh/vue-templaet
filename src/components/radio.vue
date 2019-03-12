<template>
  <div class="radio">
    <div class="radioGroup">
      <div
       class="radioItem"
       v-for="item in options"
       :key="item.value"
       @click="clickRadio(item.value);">
        <div class="radioBox" :class="{ checked: item.value === checked }">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'radio',
  props: {
    options: Array,
    value: Number,
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set() {
        return this.value;
      },
    },
  },
  model: {
    prop: 'value', // 绑定的值，通过父组件传递
    event: 'update', // 自定义时间名
  },
  methods: {
    clickRadio(val) {
      this.checked = val;
      this.$emit('update', val); // 子组件与父组件通讯，告知父组件更新绑定的值
    },
  },
  watch: {
    checked(newVal) {
      // eslint-disable-next-line
      console.log(`我是子组件，现在的值为：${newVal}`);
    },
  },
};

</script>
<style scoped>
  .radioBox.checked{
    color: red;
  }
</style>
