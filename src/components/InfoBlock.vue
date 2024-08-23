<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img 
        :src="imageUrl" 
        alt="Pusto"
        width="100"
        height="100"
    >
    <span class="text-2xl font-medium">{{ title }}</span>
    <span class="text-slate-400 mt-2">{{ description }}</span>
    <button 
      class="w-full rounded-3xl bg-lime-500 text-white mt-6 h-12 hover:bg-lime-600 transition hover:translate-y-1 active:bg-lime-700" 
      @click="setIsVisible"
    >
        Вернуться назад
    </button>
  </div>
</template>

<script setup> 
defineProps({
    title: String,
    description: String,
    imageUrl: String,
    setIsVisible: Function,
})
</script>

<style>

</style>