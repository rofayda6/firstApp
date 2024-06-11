<script>
/*eslint-disable*/
export default {
  props: ["placeholderValue"],
};
</script>

<template>
  <input
    :class="
      this.$store.state.theme === 'dark'
        ? 'wrapping-text-box bg-[#3c3c3c] outline-none focus:border-blue-600 border w-full border-[#656565] rounded-lg placeholder:text-[#C7C7C7] text-white p-2'
        : 'wrapping-text-box bg-[#F9F9F9] outline-none focus:border-blue-600 border w-full border-[#E1E1E1] rounded-lg placeholder:text-[#C7C7C7] text-black p-2'
    "
    type="text"
    :placeholder="placeholderValue"
  />
</template>