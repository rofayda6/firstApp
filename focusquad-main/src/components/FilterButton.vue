<script>
/*eslint-disable*/
export default {};
</script>
<template>
  <div
    class="sort flex justify-between  bg-[#EFEFEF] rounded-lg text-black text-center cursor-pointer pr-5 pl-3 h-8 border border-[#B3B3B3] py-0.5"
  >
  <div class="wrapping-icon">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 mt-[5px] mx-[5px]  text-[#686868]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  </div>  
    <div class="wrapping-text">
    {{this.$store.state.lang==='en'?'Filter':'تصفية'}}
    </div>
  </div>
</template> 
