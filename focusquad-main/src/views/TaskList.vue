<script>
/*eslint-disable */
import Tables from "../components/Tables.vue";
import AddButton from "../components/AddButton.vue";
import OptionButton from "../components/OptionButton.vue";
import FilterButton from "../components/FilterButton.vue";
import SortButton from "../components/SortButton.vue";
import CreateLead from "../components/CreateLead.vue";
import TaskProgressTable from '../components/TaskProgressTable.vue';
import TaskNewTable from '../components/TaskNewTable.vue';
import TaskDoneTable from '../components/TaskDoneTable.vue';
export default {
  data() {
    return {

    };
  },
  components: {
    Tables,
    AddButton,
    OptionButton,
    FilterButton,
    SortButton,
    CreateLead,
    TaskProgressTable,
    TaskNewTable,
    TaskDoneTable,
  },
};
</script>
<template>
  
    <div
      :class="
        this.$store.state.theme === 'dark'
          ? 'dark h-screen w-screen p-4 justify-center px-10'
          : 'light h-screen w-screen p-4 justify-center px-10 '
      "
    >
      <div class="flex justify-between">
        <div class="title text-xl font-bold">
          {{ this.$store.state.lang === "en" ? "Task List" : "قائمة المهام" }}
        </div>
        <div class="flex justify-center gap-2">
          <SortButton />
          <FilterButton />

          <AddButton
          @click="this.$store.commit('openTaskModal')"
            buttonNameEn="+ Add Task"
            buttonNameAr="إضافة مهمة +"
          />

          <OptionButton />
        </div>
      </div>
      <div  class="h-full">
      <TaskNewTable />
      <TaskProgressTable />
      <TaskDoneTable />
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