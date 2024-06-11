<script>
/*eslint-disable */
import Tables from "../components/Tables.vue";
import AddButton from "../components/AddButton.vue";
import OptionButton from "../components/OptionButton.vue";
import FilterButton from "../components/FilterButton.vue";
import SortButton from "../components/SortButton.vue";
export default {
  data() {
   return{}
  },
  components: {
    Tables,
    AddButton,
    OptionButton,
    FilterButton,
    SortButton,
  },
};
</script>
<template>
  <div
    :class="
      this.$store.state.theme === 'dark'
        ? 'dark h-screen w-screen p-4 px-10'
        : 'light h-screen w-screen p-4 px-10'
    "
  >
    <div class="flex justify-between ">
      <div class="title text-xl font-bold">
        {{ this.$store.state.lang === "en" ? "Visit List" : "قائمة الزيارات" }}
      </div>
      <div class="flex justify-center gap-2">
        <AddButton
          class="bg-[#EFEFEF] text-black border border-[#B3B3B3]"
          buttonNameEn="Calendar View"
          buttonNameAr="عرض بالتقويم"
        />
        <SortButton />
        <FilterButton />
        <AddButton
         @click="this.$store.commit('openVisitModal')"
          buttonNameEn="+ Add Visit"
          buttonNameAr="إضافة زيارة +"
        />
        <OptionButton />
      </div>
    </div>
    <div class="flex justify-center py-10">
      <Tables @click="this.$router.push({ name: 'visitdetails',params: {id:123} })" class="cursor-pointer"/>
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
