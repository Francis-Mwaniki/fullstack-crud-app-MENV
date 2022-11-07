<template>
  <div
    class="bg-slate-800 mt-4 text-white rounded-md max-w-screen-lg flex justify-center m-auto items-center"
  >
    <form
      class="p-3 flex flex-col justify-center items-center m-auto gap-y-3"
      @submit.prevent="handlePost"
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
        value="coursify"
        class="px-9 py-3 cursor-pointer bg-indigo-600 rounded-lg"
      />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let course = ref("");
    let description = ref("");
    const router = useRouter();

    async function handlePost() {
      let url = "http://localhost:7000/api/user/addCourse";
      let data = await fetch(url, {
        method: "POST",
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
        }, 5000);
      }
    }
    return { course, description, handlePost };
  },
};
</script>

<style></style>
