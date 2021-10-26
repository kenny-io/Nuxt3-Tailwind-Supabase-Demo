<template>
  <div>
    <div
      class="
        p-6
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        flex
        items-center
        space-x-4
      "
    >
      <div class="flex-shrink-0"></div>
      <div>
        <div class="text-xl font-medium text-black">About</div>
        <!-- <pre>{{ data }}</pre> -->
        <p v-if="data" class="text-gray-500">About {{ data.name }} !</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/sub");
console.log(data);
</script>
