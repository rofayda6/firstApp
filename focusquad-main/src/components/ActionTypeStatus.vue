<script>
/*eslint-diasble*/
export default {
  props: ["actionNo"],
  data() {
    return {
      actionNumber: 0,
    };
  },
  SetActionNo(actionNo) {
    this.actionNumber = actionNo;
  },
};
</script>
<template>
  <div class="wrapping-main-action">
    <div
      v-if="actionNumber === 0"
      class="wrapping-first-action text-[#0075FE] bg-[#B8C7D8] text-center rounded-xl text-xs px-1.5 font-semibold"
    >
      Create Task
    </div>
    <div
      v-if="actionNumber === 1"
      class="wrapping-second-action text-[#1B6509] bg-[#B0E6AF] text-center rounded-xl text-xs px-1.5 font-semibold"
    >
      Complete Task
    </div>
  </div>
</template>