<script>
import TextBox from "./TextBox.vue";
/*eslint-disablew*/
export default {
  components: {
    TextBox,
  },
};
</script>

<template>
  <div class="w-full">
    <div class="wrapping-user-info">
      <div class="wrapping-user">
        {{ this.$store.state.lang === "en" ? "User Name" : "اسم المستخدم" }}
      </div>
      <div class="wrapping-user-field">
        <TextBox :placeholderValue="this.$store.state.lang==='en'?'User Name':' اسم المستخدم '" />
      </div>
    </div>
    <div class="wrapping-user-info">
      <div class="wrapping-user">
        {{
          this.$store.state.lang === "en"
            ? "New Password"
            : "كلمة المرور الجديدة"
        }}
      </div>
      <div class="wrapping-user-field">
        <TextBox :placeholderValue="this.$store.state.lang==='en'?'New Password':' كلمة المرور الجديدة '" />
      </div>
    </div>
    <div class="wrapping-user-info">
      <div class="wrapping-user">
        {{
          this.$store.state.lang === "en"
            ? "Confirm Password"
            : "إعادة كلمة المرور "
        }}
      </div>
      <div class="wrapping-user-field">
        <TextBox
          :placeholderValue="this.$store.state.lang==='en'?'Confirm Password':'إعادة كلمة المرور '"
        />
      </div>
    </div>
    <div class="flex justify-end gap-5 p-2 mt-2">
      <button
        class="cursor-pointer p-3 px-8 bg-blue-500 text-white font-semibold block rounded-md"
      >
         {{this.$store.state.lang==='en'?'OK':' تم  '}}
      </button>
      <button
        class="cursor-pointer p-3 px-5 bg-[#909090] text-white font-semibold block rounded-md"
      >
         {{this.$store.state.lang==='en'?'Cancel':' إلغاء  '}}
      </button>
    </div>
  </div>
</template>
<style scoped>
.dark {
  background-color: #686868;
  color: white;
}
.light {
  background-color: white;
  color: black;
}
</style>