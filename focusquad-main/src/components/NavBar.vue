<script>
import Avatar from "./Avatar.vue";
/*eslint-disable */
export default {
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  components: {
    Avatar,
  },
  methods: {
    changeLangButton() {
      const rofaydaName = {
        first_name: this.firstName,
        mid_name: this.midName,
      };
      this.$store.commit("changeLang");
      this.isDropDownOpen = false;
    },
    changeThemeButton() {
      this.$store.commit("changeTheme");
    },
  },
};
</script>
<template>
  <div
    class="
      nav wrapper flex justify-between bg-[#0000FF] text-black py-2 px-2
    "
  >
    <div class="avatar relative">
      <div @click="isDropDownOpen = true" class="wrapping-avatar">
        <Avatar style="height: 35px; width: 35px; cursor: pointer;"/>
      </div>

      <div
        @mouseleave="isDropDownOpen = false"
        v-if="isDropDownOpen"
        :class="
          this.$store.state.theme === 'dark'
            ? 'wrapping-list absolute shadow-xl w-44 h-30 bg-black text-white'
            : 'wrapping-list absolute shadow-xl w-44 h-30 bg-white'
        "
      >
        <div
          :class="
            this.$store.state.lang === 'en'
              ? 'wrapping-list absolute shadow-xl w-44 h-30 left-3 z-20'
              : 'wrapping-list absolute shadow-xl w-44 h-30 right-3 z-20'
          "
        >
          <div
            @click="changeLangButton"
            :class="
              this.$store.state.theme === 'dark'
                ? 'p-1 bg-black  hover:bg-gray-600 cursor-pointer'
                : 'p-1 bg-white hover:bg-gray-200 cursor-pointer'
            "
            style="border-top-right-radius: 10px; border-top-left-radius: 10px"
          >
            {{ this.$store.state.lang === "en" ? "Language" : "اللغة" }}
          </div>
          <div
            @click="changeThemeButton"
            :class="
              this.$store.state.theme === 'dark'
                ? 'p-1 bg-black  hover:bg-gray-600 cursor-pointer'
                : 'p-1 bg-white hover:bg-gray-200 cursor-pointer'
            "
          >
            {{
              this.$store.state.lang === "en" ? "Change Theme" : "تغيير المظهر"
            }}
          </div>
          <div
            @click="this.$router.push({ name: 'settings' })"
            :class="
              this.$store.state.theme === 'dark'
                ? 'p-1 bg-black  hover:bg-gray-600 cursor-pointer'
                : 'p-1 bg-white hover:bg-gray-200 cursor-pointer'
            "
          >
            {{ this.$store.state.lang === "en" ? "Settings" : "الاعدادات" }}
          </div>
          <div @click="this.$router.push({ name: 'login' })" class="send">
            <div
              @click="this.$store.state.lang = 'en'"
              :class="
                this.$store.state.theme === 'dark'
                  ? 'p-1 bg-black  hover:bg-gray-600 cursor-pointer'
                  : 'p-1 bg-white  hover:bg-gray-200 cursor-pointer'
              "
              style="
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
              "
            >
            <div @click="this.$store.state.theme = 'light'">
              {{ this.$store.state.lang === "en" ? "Log out" : "تسجيل الخروج" }} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs-mainnavbar flex gap-10">
      <div class="home mt-1 hidden sm:block">
        <router-link
          :to="{ name: 'appmain' }"
          :exact-active-class="
            this.$store.state.theme === 'dark' ? 'darkActiveNav' : 'activeNav'
          "
        >
          {{ this.$store.state.lang === "en" ? "Home" : "الرئيسية" }}
        </router-link>
      </div>
      <div class="visits mt-1 hidden sm:block">
        <router-link
          :to="{ name: 'visitlist' }"
          :active-class="
            this.$store.state.theme === 'dark' ? 'darkActiveNav' : 'activeNav'
          "
        >
          {{ this.$store.state.lang === "en" ? "Visits" : "الزيارات" }}
        </router-link>
      </div>
      <div class="clients mt-1 hidden sm:block">
        <router-link
          :to="{ name: 'clientList' }"
          :active-class="
            this.$store.state.theme === 'dark' ? 'darkActiveNav' : 'activeNav'
          "
        >
          {{ this.$store.state.lang === "en" ? "Clients" : "العملاء" }}
        </router-link>
      </div>
      <div class="Tasks mt-1 hidden sm:block">
        <router-link
          :to="{ name: 'tasks' }"
          :active-class="
            this.$store.state.theme === 'dark' ? 'darkActiveNav' : 'activeNav'
          "
        >
          {{ this.$store.state.lang === "en" ? "Tasks" : "المهام" }}
        </router-link>
      </div>
      <div class="mt-1 hidden sm:block">
        <router-link
          :to="{ name: 'reports' }"
          :active-class="
            this.$store.state.theme === 'dark' ? 'darkActiveNav' : 'activeNav'
          "
        >
          {{ this.$store.state.lang === "en" ? "Reports" : "التقارير" }}
        </router-link>
      </div>
    </div>
    <div class="logo">
     <svg class="h-8 w-8 rounded-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="120" height="120" fill="#EFF1F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z" fill="#687787"/>
</svg>
    </div>
  </div>
</template>
<style scoped>
.activeNav {
  color: white;
  background: #d4a160;
  padding-block: 3px;
  padding-inline: 8px;
  border-radius: 5px;
}
.darkActiveNav {
  color: white;
  background: #d4a160;
  padding-block: 3px;
  padding-inline: 8px;
  border-radius: 5px;
}
</style>