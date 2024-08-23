<template>
    <div class="flex gap-4">
        <select @change="onChangeSelect" name="Filter" id="Filter" class="border px-3 py-2 rounded-lg">
            <option selected disabled value="disabled">Сортировка</option>
            <option value="name">По названию</option>
            <option value="price">По цене(дешевле)</option>
            <option value="-price">По цене(дороже)</option>
        </select>

        <div class="relative flex items-center">
        <img src="/search.svg" alt="Search" class="absolute top-3 left-3">
        <div>
            <input 
            type="text" 
            placeholder="Поиск..." 
            v-model="filters.searchQuery"
            class="border rounded-lg py-1.5 px-12 pr-4 focus:border-slate-400"
            >
        </div>
        </div>
    </div> 
</template>

<script setup>
defineProps({
    filters: Object,
})


const $emit = defineEmits(['update-filters'])

const onChangeSelect = (e) => {
  $emit('update-filters', e.target.value)
}





</script>

<style>

</style>