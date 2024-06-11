<script>
/*eslint-disable*/

export default {};
</script>

<template>
  <div
    class="sort flex justify-between bg-[#EFEFEF] rounded-lg text-black text-center cursor-pointer px-4 h-8 border border-[#B3B3B3] py-0.5"
  >   
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-4  mt-[5px] mx-[4px]  text-[#686868]"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
    />
  </svg>
     {{this.$store.state.lang==='en'?'Sort':'ترتيب'}}
  </div>
</template> 
