<template>
  <div id="app">
    <div class="left">选中：{{checked}}</div>
    <radio class="right" :options="options" v-model="checked"></radio>
    <div>
      <button @click="handleOpen1">打开提示 1</button>
      <button @click="handleOpen2">打开提示 2</button>
    </div>
  </div>
</template>

<script>
import radio from '@/components/radio';

export default {
  name: 'App',
  components: {
    radio,
  },
  data() {
    return {
      checked: 0,
      options: [{
        value: 0,
        name: '选项1',
      }, {
        value: 1,
        name: '选项2',
      }],
    };
  },
  methods: {
    handleOpen1() {
      this.$Alert.info({
        content: '我是提示信息 1',
      });
    },
    handleOpen2() {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3,
      });
    },
  },
};

</script>
