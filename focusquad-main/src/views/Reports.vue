<script>
import SelectBox from "../components/SelectBox.vue";
/*eslint-disable*/
export default {
  data() {
    return {
      optionReportTypes: [
        {
          id: 1,
          type: "Type 1",
        },
        {
          id: 2,
          type: "Type 2",
        },
        {
          id: 3,
          type: "Type 3",
        },
        {
          id: 4,
          type: "Type 4",
        },
      ],
    };
  },
  components: {
    SelectBox,
  },
};
</script>
<template>
  <div
    :class="
      this.$store.state.theme === 'dark'
        ? 'dark h-screen w-screen p-4 px-10'
        : ' h-screen w-screen p-4 px-10'
    "
  >
    <div class="wrappong-title text-xl font-bold">
      {{ this.$store.state.lang === "en" ? "Reports" : "التقارير" }}
    </div>
    <div class="wrapping-content flex items-center justify-center">
      <div class="wrapping-selection w-[50%] mt-5">
        <SelectBox
          :options="optionReportTypes"
          :placeHolderValue="
            this.$store.state.lang === 'en'
              ? 'Select Report Type'
              : 'اختر نوع التقرير'
          "
          valueKey="id"
          nameKey="type"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.dark {
  background-color: #1a1a1a;
  color: rgb(255, 255, 255);
}
</style>