<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main
    class="bg-slate-900 py-4 text-white px-4 flex justify-around items-center mx-auto flex-row gap-x-11"
  >
    <div class="flex justify-center items-center mx-auto">
      <img src="./assets/catoon.png" class="h-11 w-11 rounded-full p-1" alt="" />
      <h3 class="text-white text-3xl font-mono uppercase">COURSES</h3>
    </div>
    <nav
      class="pr-9 font-mono text-xl font-extrabold border-b-2 border-emerald-300 flex justify-center items-center mx-auto gap-x-2"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/AddCourse">Addcourse</router-link>
    </nav>
  </main>
  <RouterView />
</template>

<style scoped></style>
