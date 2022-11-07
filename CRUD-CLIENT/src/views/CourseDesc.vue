<template>
  <div class="bg-slate-800 pt-4 min-h-screen">
    <div
      class="text-white rounded-md max-w-screen-lg flex justify-center m-auto items-center"
    >
      <form
        class="p-3 flex flex-col justify-center items-center m-auto gap-y-3"
        @submit.prevent="updateCourse"
      >
        <input
          type="text"
          v-model="course"
          class="border-none text-black focus:ring-2 rounded-md ring-blue-500 bg-slate-300 py-3 px-7 placeholder:text-gray-500"
          placeholder="Enter course"
        />
        <textarea
          name=""
          v-model="description"
          placeholder="Enter description"
          id=""
          cols="30"
          rows="10"
          class="border-none text-black focus:ring-2 rounded-md ring-blue-500 bg-slate-300 py-3 px-7 placeholder:text-gray-500"
        ></textarea>
        <input
          type="submit"
          value="update"
          class="px-9 py-3 cursor-pointer bg-indigo-600 rounded-lg"
        />
      </form>
    </div>
    <button
      @click="deleteCourse"
      class="bg-indigo-600 px-9 py-2 rounded-md flex text-white justify-center items-center m-auto"
    >
      Delete this course
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    let course = ref("");
    let description = ref("");
    const currentId = useRoute();
    const router = useRouter();
    const newId = currentId.params.id;
    async function getCourses() {
      let url = `http://localhost:7000/api/user/getSingleCourse/${newId}`;
      let data = await fetch(url);
      if (data.ok) {
        let newData = await data.json();
        course.value = newData.course;
        description.value = newData.description;
      }
    }
    getCourses();
    async function updateCourse() {
      let url = `http://localhost:7000/api/user/updateCourse/${newId}`;
      let data = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          course: course.value,
          description: description.value,
        }),
      });
      if (data.ok) {
        let newData = await data.json();
        console.log(newData);
        alert(newData.message);
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    }
    async function deleteCourse() {
      let url = `http://localhost:7000/api/user/deleteCourse/${newId}`;
      let data = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (data.ok) {
        let newData = await data.json();
        console.log(newData);
        alert(newData.message);
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    }
    return {
      currentId,
      newId,
      updateCourse,
      course,
      description,
      deleteCourse,
    };
  },
};
</script>

<style></style>
