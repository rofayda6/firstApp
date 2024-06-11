<script>
import GeneralSettings from "../components/GeneralSettings.vue";
import UsersList from "../components/UsersList.vue";
import LogsTab from "../components/LogsTab.vue";
/*eslint-disablew*/
export default {
  methods: {},
  data() {
    return {
      activeTab: 0,
    };
  },
  components: {
    GeneralSettings,
    UsersList,
    LogsTab,
  },
};
</script>
w-screen h-full
<template>
  <div>
    <div
      :class="
        this.$store.state.theme === 'dark'
          ? 'dark p-5 justify-items-center h-screen'
          : 'light p-5 justify-items-center h-screen'
      "
    >
      <div
        :class="
          this.$store.state.lang === 'en'
            ? ' flex gap-3 ml-5'
            : 'flex gap-3 mr-5'
        "
      >
        <div class="hide-button">
          <div
            @click="activeTab = 0"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px"
            :class="
              activeTab === 0
                ? 'wrapping-first-default-active-tab px-8 py-2 bg-[#D4A160] cursor-pointer'
                : 'wrapping-first-default-active-tab px-8 py-2 bg-blue-500 cursor-pointer'
            "
          >
            {{ this.$store.state.lang === "en" ? "General" : "عام" }}
          </div>
        </div>
        <div
          v-if="this.$store.state.user_name === 'superUser'"
          class="wrapping-superuser-settings flex gap-3"
        >
          <div
            @click="activeTab = 1"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px"
            :class="
              activeTab === 1
                ? 'wrapping-first-default-active-tab px-6 py-2  bg-[#D4A160] cursor-pointer'
                : 'wrapping-first-default-active-tab px-6 py-2 bg-blue-500 cursor-pointer'
            "
          >
            <div class="click">
              {{ this.$store.state.lang === "en" ? "Users" : "المستخدمين" }}
            </div>
          </div>
          <div
            @click="activeTab = 2"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px"
            :class="
              activeTab === 2
                ? 'wrapping-first-default-active-tab px-8 py-2 bg-[#D4A160] cursor-pointer'
                : 'wrapping-first-default-active-tab px-8 py-2 bg-blue-500 cursor-pointer'
            "
          >
            <div class="click">
              {{ this.$store.state.lang === "en" ? "Logs" : "السجلات" }}
            </div>
          </div>
          <div
            @click="activeTab = 3"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px"
            :class="
              activeTab === 3
                ? 'wrapping-first-default-active-tab px-8 py-2 bg-[#D4A160] cursor-pointer'
                : 'wrapping-first-default-active-tab px-8 py-2 bg-blue-500 cursor-pointer'
            "
          >
            <div class="click">
              {{ this.$store.state.lang === "en" ? "Meeting" : "الاجتمعات" }}
            </div>
          </div>
        </div>
      </div>
      <div :class="this.$store.state.theme === 'dark' ? 'dark' : 'light'">
        <div
          v-if="activeTab === 0"
          :class="
            this.$store.state.theme === 'dark'
              ? 'wrapping darkTab p-5 border rounded-lg h-[80%] w-[40%]'
              : 'wrapping bg-[#FCFCFC] p-5 border border-[#B9B9B9] rounded-lg h-[80%] w-[40%]'
          "
        >
          <GeneralSettings />
        </div>
        <div
          v-if="activeTab === 1"
          :class="
            this.$store.state.theme === 'dark'
              ? 'wrapping darkTab p-5 border rounded-lg h-[80%]'
              : 'wrapping bg-[#FCFCFC] p-5 border border-[#B9B9B9] rounded-lg h-[80%]'
          "
        >
          <UsersList />
        </div>
        <div
          v-if="activeTab === 2"
          :class="
            this.$store.state.theme === 'dark'
              ? 'wrapping darkTab p-5 border rounded-lg h-[80%]'
              : 'wrapping bg-[#FCFCFC] p-5 border border-[#B9B9B9] rounded-lg h-[80%]'
          "
        >
          <LogsTab />
        </div>
        <div
          v-if="activeTab === 3"
          :class="
            this.$store.state.theme === 'dark'
              ? 'wrapping darkTab p-5 border rounded-lg h-[80%]'
              : 'wrapping bg-[#FCFCFC] p-5 border border-[#B9B9B9] rounded-lg h-[80%]'
          "
        >
          Testing
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.darkTab {
  background-color: #333333;
  color: white;
  border: 1px solid #414141;
}
.dark {
  background-color: #2c2c2c;
  color: white;
}
.light {
  background-color: white;
}
</style>