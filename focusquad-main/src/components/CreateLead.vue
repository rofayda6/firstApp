<template>
  <div>
    <t-modal v-model="showModal">hello world</t-modal>
    <button @click="showModal = true" type="button">Show modal</button>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>