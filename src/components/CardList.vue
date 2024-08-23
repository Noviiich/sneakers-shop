<template lang="">
    <div class="grid grid-cols-4 gap-4 mt-10" v-auto-animate>
        <Card 
            v-for="item in items"
            :key="item.id"
            :item="item"
            :isAdd="isInCart(item)"
            :isFavourite="isInFavourites(item)"
        />
    </div>
</template>
<script setup>
import { inject } from 'vue';
import Card from './Card.vue'
const { isInCart } = inject('cart')
const { isInFavourites } = inject('favourites')

defineProps({
    items: Array,
})

</script>
<style lang="">
    
</style>