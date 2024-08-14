<template lang="">
    <div class="grid grid-cols-4 gap-4 mt-8">
        <Card 
            v-for="item in items"
            :key="item.id"
            :title="item.title" 
            :imageUrl="item.imageUrl" 
            :price="item.price"
            :is-added="false"
            :is-favourite="false"
            :on-click-add="onClickAdd"
        />
    </div>
</template>
<script setup>
import { def } from '@vue/shared';
import Card from './Card.vue'

defineProps({
    items: Array
})

const onClickAdd = () => {
    console.log('add')
}
</script>
<style lang="">
    
</style>