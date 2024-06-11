<script setup>
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';

const store = useStore();
console.log(store.state.lang);
</script>

<template>
  <div class="main wrapper w-screen h-screen overflow-hidden bg-[#F6F6F6]" :style="store.state.lang === 'ar' ? 'direction: rtl' : ''">
    <RouterView />
  </div>
</template>
