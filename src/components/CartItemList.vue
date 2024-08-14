<template lang="">
    <div class="mt-6 flex flex-col gap-4">
            <CartItem 
                title="Мужские кроссовки Nike Airzoom pizec kakawudai wdaiuwdh awdhaiuwd"
                :price="12999"
                img-url="/sneakers/sneakers-1.jpg" 
            />
            <CartItem 
                title="Мужские кроссовки Nike Airzoom pizec kak 2"
                :price="12999"
                img-url="/sneakers/sneakers-2.jpg" 
            />
            <CartItem 
                title="Мужские кроссовки Nike Airzoom pizec kak 3"
                :price="12999"
                img-url="/sneakers/sneakers-3.jpg" 
            />
        </div>
</template>
<script setup>
import CartItem from './CartItem.vue';
</script>
<style lang="">
    
</style>