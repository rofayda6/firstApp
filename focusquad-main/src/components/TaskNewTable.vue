<script>
/*eslint-disable*/
export default {
  data() {
    return {
      taskOpen: false,
    };
  },
  methods: {
    clickArrow() {
      this.taskOpen = !this.taskOpen;
    },
  },
};
</script>
<template>
  <div class="task-table my-5">
    <div
      style="border-top-left-radius: 13px; border-top-right-radius: 13px"
      @click="clickArrow"
      :class="
        this.taskOpen === true
          ? 'bg-[#316EC9] h-10 flex justify-between cursor-pointer'
          : 'wrapping-header  bg-[#316EC9] h-10 flex justify-between rounded-xl cursor-pointer'
      "
    >
      <div class="wrapping-text flex">
        <div
          class="wrapping-color-box h-4 w-4 bg-[#BDBDBD] border border-[#929292] m-3 py-1.5"
        ></div>
        <div class="wrapping-status py-1.5 text-white font-bold">
        {{this.$store.state.lang==='en'?'New':'جديد'}}</div>
      </div>
      <div class="wrapping-right-items flex justify-between">
        <div class="wrapping-no-of-tasks mt-2 text-black font-semibold border border-black w-6 h-5 bg-white pb-6 rounded-lg">
       3
        </div>
        <div
          
          class="wrapping-arrow py-1.5 px-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 mt-2 mr-1 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
 <div v-if="taskOpen" >
    <div :class="this.$store.state.theme==='dark'?'bg-[#3c3c3c] text-white':'bg-[#ECD6B9]'">
       <div
        :class="this.$store.state.lang==='en'?' flex justify-between  h-8 text-left px-6 py-0.5':'flex justify-between  h-8 text-right px-6 py-0.5'"
      >
        <div class="wrapping-status  font-semibold w-[10%]"> {{this.$store.state.lang==='en'?'ID':'رمز التعريف'}}</div>
        <div class="wrapping-status  font-semibold w-[30%]">
          {{this.$store.state.lang==='en'?'Title':'العنوان'}}
        </div>
        <div class="wrapping-status  font-semibold w-[25%]">
          {{this.$store.state.lang==='en'?'Client Name':'اسم العميل'}}
        </div>
        <div class="wrapping-status  font-semibold w-[10%]">
           {{this.$store.state.lang==='en'?'Priority':'الأهمية'}}
        </div>
        <div class="wrapping-status  font-semibold w-[15%]">
           {{this.$store.state.lang==='en'?'Created By':'إنشاء بواسطة'}}
        </div>
        <div class="wrapping-status  font-semibold w-[10%]">
           {{this.$store.state.lang==='en'?'Created At':'إنشاء بتاريخ'}}
        </div>
      </div>
    </div>
      <div :class="this.$store.state.lang==='en'?'text-left':'text-right'">
      <div :class="this.$store.state.theme==='dark'?'contentdark':'contentlight'">
      <div
        class="wrapping-content flex justify-between px-6  "
      >
        <div class="wrapping-status  w-[5%]">2651</div>
        <div class="wrapping-status  w-[35%]">follow up</div>
        <div class="wrapping-status  w-[25%]">Mohamed</div>
        <div
          class="wrapping-status text-[#A10000] bg-[#FFADAD] w-[10%] rounded-sm text-center"
        >
          High
        </div>
        <div class="wrapping-status  w-[15%]">Employee1</div>
        <div class="wrapping-status  w-[10%]">1 May</div>
      </div>
      <div
        class="wrapping-content flex justify-between px-6  "
      >
        <div class="wrapping-status  w-[5%]">2651</div>
        <div class="wrapping-status  w-[35%]">follow up</div>
        <div class="wrapping-status  w-[25%]">Mohamed</div>
        <div
          class="wrapping-status text-[#1B6509] bg-[#B0E6AF] rounded-sm text-center w-[10%]"
        >
          Normal
        </div>
        <div class="wrapping-status  w-[15%]">Employee1</div>
        <div class="wrapping-status  w-[10%]">1 May</div>
      </div>
      <div
        class="wrapping-content flex justify-between px-6  "
      >
        <div class="wrapping-status  w-[5%]">2651</div>
        <div class="wrapping-status  w-[35%]">follow up</div>
        <div class="wrapping-status  w-[25%]">Mohamed</div>
        <div
          class="wrapping-status text-[#0075FE] bg-[#B8C7D8] rounded-sm text-center w-[10%]"
        >
          Low
        </div>
        <div class="wrapping-status  w-[15%]">Employee1</div>
        <div class="wrapping-status  w-[10%]">1 May</div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  border-bottom-color: black;
}
.contentdark{
  background-color: #2c2c2c;
  color: white;
}
.contentlight{
  background-color: #D9D9D9;
  color: black;
}
</style>