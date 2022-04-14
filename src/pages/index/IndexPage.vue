<template>
  <IndexHead />
  
</template>

<script>

import IndexHead from '../../components/IndexHead.vue';

export default {
  name: "IndexPage",
  props: {
    msg: String
  },
  components: {
    IndexHead
  }
};
</script>

<style scoped>

</style>
