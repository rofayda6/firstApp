<script>
export default {
  props: ["placeHolderValue", "options", "valueKey", "nameKey"],
};
</script>

<template>
  <select
    :class="
      this.$store.state.theme === 'dark'
        ? 'wrapping-text-box bg-[#3c3c3c] outline-none cursor-pointer focus:border-blue-600 border w-full border-[#656565] rounded-lg placeHolderValue:text-[#C7C7C7] text-white p-2 text-sm'
        : 'wrapping-text-box bg-[#F9F9F9] outline-none focus:border-blue-600 border w-full border-[#E1E1E1] cursor-pointer rounded-lg placeHolderValue:text-[#C7C7C7] text-black p-2 text-sm'
    "
  >
    <option class=" text-[#C7C7C7]" :value="placeHolderValue">
      {{ placeHolderValue }}
    </option>
    <option
      class=""
      v-for="opt in options"
      :key="opt.id"
      :value="opt[valueKey]"
    >
      {{ opt[nameKey] }}
    </option>
  </select>
</template>
 