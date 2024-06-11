<script>
/*eslint-disable */
import OptionButton from "./OptionButton.vue";
import FilterButton from "./FilterButton.vue";
import SelectBox from "./SelectBox.vue";
import LogActivities from "./LogActivities.vue";

export default {
  data() {
    return {
      actionTypeOptions: [
        {
          id: 1,
          type: "Create visit",
        },
        {
          id: 2,
          type: "Create task",
        },
        {
          id: 3,
          type: "Complete task",
        },
        {
          id: 4,
          type: "Achieve target",
        },
      ],
    };
  },
  components: {
    OptionButton,
    FilterButton,
    SelectBox,
    LogActivities,
  },
};
</script>
<template>
  <div class="w-full py-0.5 justify-center px-10'">
    <div class="wrapping-header">
      <div class="wrapping-title font-bold text-left text-xl">
        {{ this.$store.state.lang === "en" ? "Logs" : " سجل الأداء" }}
      </div>
      <div class="flex justify-between">
        <div class="title text-xl font-bold">
          <SelectBox
          class="px-10"
            :options="actionTypeOptions"
            :placeHolderValue="this.$store.state.lang==='en'?'Action Type':'نوع الحدث'"
            valueKey="id"
            nameKey="type"
          />
        </div>
        <div class="flex justify-center gap-2">
          <FilterButton />
          <OptionButton />
        </div>
      </div>
    </div>
    <div class="wrapping-logs-content flex justify-between">
      <div class="wrapping-new-one w-[55%]">
        <LogActivities />
        <LogActivities />
        <LogActivities />
        <LogActivities />
        <LogActivities />
      </div>
      <div class="wrapping-all-users">user</div>
    </div>
  </div>
</template>
<style scoped>
.dark {
  background-color: #1a1a1a;
  color: rgb(255, 255, 255);
  place-items: center;
  text-align: center;
}
.light {
  place-items: center;
  text-align: center;
}
</style>