<script>
/*eslint-disable */
export default {
  data() {
    return {
      firstName: "Rofayda",
      midName: "Mohammad",
    };
  },
};
</script>
<template>
  <div
    :class="
      this.$store.state.theme === 'dark'
        ? 'dark h-screen w-screen '
        : ' h-screen w-screen'
    "
  >
    <div class="Welcome px-10 py-1">
      {{ this.$store.state.lang === "en" ? "Welcome  " : "مرحبا" }}
      {{ this.$store.state.user_name }}..
    </div>
    <div class="kpi-sales flex justify-center gap-10 mt-5">
      <div :class="this.$store.state.theme === 'dark' ? 'darkCard' : 'card'">
        {{ this.$store.state.lang === "en" ? "KPI" : "الاداء" }}
      </div>
      <div :class="this.$store.state.theme === 'dark' ? 'darkCard' : 'card'">
        {{ this.$store.state.lang === "en" ? "Sales" : "المبيعات" }}
      </div>
    </div>
    <div class="visits-tasks flex justify-center gap-10 pt-4">
      <div :class="this.$store.state.theme === 'dark' ? 'darkCard' : 'card'">
        {{ this.$store.state.lang === "en" ? "Visits" : "الزيارات" }}
      </div>
      <div :class="this.$store.state.theme === 'dark' ? 'darkCard' : 'card'">
        {{ this.$store.state.lang === "en" ? "Tasks" : "المهام" }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  background-color: #316ec9;
  color: aliceblue;
  height: 40vh;
  width: 80vh;
  border-radius: 20px;
  text-align: center;
  place-items: center;
  place-content: center;
}
.darkCard {
  background-color: #2c2c2c;
  color: aliceblue;
  height: 40vh;
  width: 80vh;
  border-radius: 20px;
  text-align: center;
  place-items: center;
  place-content: center;
}
.dashboard {
  padding: 4pt;
}
.dark {
  background-color: #1a1a1a;
  color: rgb(255, 255, 255);
}
</style>