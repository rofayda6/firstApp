<script>
/*eslint-disable*/
export default {
  props: ["buttonNameEn", "buttonNameAr"],
};
</script>
<template>
  <div
    class="button py-1.5 text-sm bg-[#0075FE] rounded-lg text-white text-center cursor-pointer px-2 h-8"
  >
   {{this.$store.state.lang==='en'? buttonNameEn:buttonNameAr}}
  </div>
</template>