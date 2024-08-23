<template>
  <div class="flex justify-between">
    <span class="text-3xl font-bold">Все Кроссовки</span>
    <ItemsFilter 
      :filters="filters" 
      @update-filters="updateFilters"
    />
  </div>

  <CardList 
    :items="searchAndSortItems"
  />
</template>

<script setup>

import ItemsFilter from '../components/ItemsFilter.vue'
import CardList from '../components/CardList.vue'
import { onMounted, ref, reactive} from 'vue'
import axios from 'axios'
import { useItems } from '../hooks/useItems.js'

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://7fe0d22689de365f.mokky.dev/items');
    items.value = data
    
  } catch (error) {
    console.log(error)
  }
});

const searchAndSortItems = useItems(items, filters)

const updateFilters = (newFilter) => {
  filters.sortBy = newFilter
}

</script>

<style>

</style>