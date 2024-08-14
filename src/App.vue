<template lang="">
  <!-- <Drawer /> -->
  <div class="padding-10 bg-white rounded-lg w-4/5 m-auto shadow-xl mt-14 h-full">
    <Header />

    <div class="pt-8 px-10 pb-8">
      <div class="flex justify-between">
        <span class="text-3xl font-bold">Все Кроссовки</span>

        <div class="flex gap-4">
          <select name="Filter" id="Filter" class="border px-3 py-2 rounded-lg">
            <option value="">По названию</option>
            <option value="">По цене(дешевле)</option>
            <option value="">По цене(дороже)</option>
          </select>
  
          <div class="relative flex items-center">
            <img src="/search.svg" alt="Search" class="absolute top-3 left-3">
  
            <div>
              <input 
              type="text" 
              placeholder="Поиск..." 
              class="border rounded-lg py-1.5 px-12 pr-4 focus:border-slate-400"
            >
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <CardList :items="items"/>
      </div>
    </div>


  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import axios from 'axios'
import {onMounted, ref} from 'vue'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://7fe0d22689de365f.mokky.dev/items');
    items.value = data
    
  } catch (error) {
    console.log(error)
  }
})


</script>
<style lang="">
  
</style>