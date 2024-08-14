<template lang="">
    <div class="border border-slate-300 bg-white rounded-3xl p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
      <div>
        <img @click="onClickFavourite" :src="isFavourite ? '/like-2.svg' : '/like-1.svg'" alt="Like 1" class="absolute pt-2">   
        <img :src="imageUrl" alt="Sneaker">
      </div>
      
      <span class="mt-2">
        {{ title}}
      </span>

      <div class="flex justify-between mt-4">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена:</span>
          <b>{{ price }} руб.</b>
        </div>
        
        <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus">        
      </div>
    </div>
</template>
<script setup>
defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  isAdded: Boolean,
  isFavourite: Boolean,
  onClickAdd: Function,
  onClickFavourite: Function
});
</script>
<style lang="">
    
</style>