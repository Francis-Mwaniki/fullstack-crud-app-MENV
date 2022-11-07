<script setup>
import { ref } from "vue";
let courses = ref([]);
let dataLoaded = ref(null);
async function getCourses() {
  let url = "http://localhost:7000/api/user/course";
  let data = await fetch(url);
  if (data.ok) {
    dataLoaded.value = true;
    let newData = await data.json();
    courses.value.push(newData);
    console.log(courses.value[0]);
  }
}
getCourses();
</script>

<template>
  <div
    class="flex flex-row justify-center items-center mx-auto"
    v-if="courses.length <= 0"
  >
    looks likes its empty?.
    <button class="bg-indigo-600 px-8 py-2 rounded-md">
      <router-link to="/AddCourse"><span>Create</span> </router-link>
    </button>
  </div>
  <div class="bg-slate-800 min-h-screen" v-else>
    <div class="flex justify-center items-center mx-auto flex-row" v-if="dataLoaded">
      <div class="bg-slate-900 rounded-md m-1 p-2" v-for="c in courses[0]" :key="c._id">
        <router-link :to="{ name: 'CourseDesc', params: { id: c._id } }">
          <img src="../assets/code.jpg" class="object-cover rounded-md max-w-xs" alt="" />
          <h2 class="p-1 text-white">{{ c.course }}</h2>
          <p class="px-1 text-white">{{ c.description }}</p>
        </router-link>
      </div>
    </div>
    <div class="flex justify-center items-center m-auto p-4 text-black" v-else>
      <span
        ><div
          class="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-700"
        >
          <span class="text-xs">loading</span>
        </div></span
      >
    </div>
  </div>
</template>
