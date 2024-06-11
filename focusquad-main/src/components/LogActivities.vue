<script>
import Avatar from "../components/Avatar.vue";
import ActionTypeStatus from "./ActionTypeStatus.vue";
import Circle from "./Circle.vue";
/*eslint-disable */
export default {
  components: {
    Avatar,
    ActionTypeStatus,
    Circle,
  },
}
</script>
<template>
  <div
    class="wrapping-activities border border-[#B3B3B3] bg-[#F3D9B9] rounded-xl p-1.5 mt-2"
  >
    <div class="wrapping-content-box">
      <div class="wrapping-header flex justify-left gap-4 mb-0.5">
        <div class="wrapping-avatar">
          <Avatar style="height:20px; width: 20px;" />
        </div>
        <div :class="this.$store.state.theme==='dark'?'dark':''">Ahmed Hassan</div>
      </div>
      <div class="wrapping-next-line flex justify-left gap-2 text-sm">
        <div class="wrapping-descripe text-[#BF7517] font-bold mt-0.5">
          Create a new task to client1
        </div>
        <div class="wrapping mt-1.5">
          <Circle />
        </div>
        <div class="wrapping-actions mt-1.5">
          <ActionTypeStatus />
        </div>
        <div class="wrapping mt-1.5">
          <Circle />
        </div>
        <div :class="this.$store.state.theme==='dark'?'wrapping-date text-xs mt-1.5 dark':'wrapping-date text-xs mt-1.5'">2024-5-22, 18:42pm</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dark{
  color: black;
}
</style>