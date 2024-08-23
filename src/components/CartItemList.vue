<template lang="">
    <div class="mt-6 flex flex-col gap-4" v-auto-animate>
            <CartItem 
                v-for="item in cart"
                :key="item.id"
                :item="item"
                :remove="removeFromCart"
            />
    </div>
</template>
<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';
const { cart, removeFromCart } = inject('cart')

</script>
<style lang="">
    
</style>