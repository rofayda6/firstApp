<script>
/*eslint-disable */
import OptionButton from "../components/OptionButton.vue";
import FilterButton from "../components/FilterButton.vue";
import SortButton from "../components/SortButton.vue";
import Tables from "../components/Tables.vue";
import AddButton from "../components/AddButton.vue";
export default {
  components: {
    OptionButton,
    FilterButton,
    SortButton,
    Tables,
    AddButton,
  },
  methods: {},
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
<template>
  <div
    :class="
      this.$store.state.theme === 'dark'
        ? 'dark h-screen w-screen p-4 px-10'
        : 'light h-screen w-screen  p-4 px-10'
    "
  >
    <div class="flex justify-between">
      <div class="title text-xl font-bold">
        {{
          this.$store.state.lang === "en" ? "Client/Lead List" : "قائمة العملاء"
        }}
      </div>
      <div class="flex justify-center gap-2">
        <SortButton />
        <FilterButton />
        <AddButton
          @click="this.$store.commit('openLeadModal')"
          v-if="activeTab === 1"
          buttonNameEn="+ Add Lead"
          buttonNameAr="إضافة عميل متوقع +"
        />
        <OptionButton />
      </div>
    </div>
    <div :class="this.$store.state.lang==='en'?'flex gap-3 ml-5':'flex gap-3 mr-5'">
      <div class="hide-button">
        <div
          @click="activeTab = 0"
          style="border-top-left-radius: 10px; border-top-right-radius: 10px"
          :class="
            activeTab === 0
              ? 'wrapping-first-default-active-tab p-2 bg-[#D4A160] cursor-pointer'
              : 'wrapping-first-default-active-tab p-2 bg-blue-500 cursor-pointer'
          "
        >
           {{this.$store.state.lang==='en'?'Clients':'العملاء'}}
        </div>
      </div>
      <div
        @click="activeTab = 1"
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        :class="
          activeTab === 1
            ? 'wrapping-first-default-active-tab p-2 bg-[#D4A160] cursor-pointer'
            : 'wrapping-first-default-active-tab p-2 bg-blue-500 cursor-pointer'
        "
      >
        <div class="click">
        {{this.$store.state.lang==='en'?'Leads':'العملاءالمحتملين'}}
        </div>
      </div>
    </div>
    <div class="separator-content-by-active-class">
      <div v-if="activeTab === 0" class="wrapping-active-default-table">
        <Tables @click="this.$router.push({ name: 'clientDetails',params: {id:123} })"  class="cursor-pointer"/>
      </div>
      <div v-if="activeTab === 1" class="wrapping-active-default-table">
        Another table
      </div>
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