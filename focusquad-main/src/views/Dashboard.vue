<script>
/*eslint-disable */
import NavBar from "../components/NavBar.vue";
import CreateTaskMenu from "../components/CreateTaskMenu.vue";
import CreateVisitMenu from "../components/CreateVisitMenu.vue";
import CreateLeadMenu from "../components/CreateLeadMenu.vue";
export default {
  components: {
    NavBar,
    CreateTaskMenu,
    CreateVisitMenu,
    CreateLeadMenu,
  },
};
</script>
<template>
  <div class="dash">
    <CreateVisitMenu />
    <CreateTaskMenu />
    <CreateLeadMenu />
    <div class="wrapping-main">
      <NavBar />
    </div>
    <router-view></router-view>
  </div>
</template>