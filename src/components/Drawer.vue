<template lang="">
    <div v-show="isVisible">
        <div class="fixed top-0 left-0 bg-black/50 w-full h-full z-10"  @click="setIsVisible"/>
        <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
            <span class="text-2xl font-bold flex justify-center">Корзина</span>

            <div v-if="cart.length === 0" class="h-full fixed">
                <div class="h-full items-center flex">
                    <InfoBlock 
                        title="Корзина пустая"
                        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
                        imageUrl="/package-icon.png"
                        :setIsVisible="setIsVisible"
                    />
                </div>
            </div>

            <div v-else>
                <CartItemList />

                <div class="mt-6 flex flex-col gap-5">
                    <div class="flex">
                        <span>Итого:</span>
                        <div class="flex-1 border-b border-slate-300"></div>
                        <b>{{ getAllPrice }} руб.</b>
                    </div>
                    <div class="flex">
                        <span>Налог 5%</span>
                        <div class="flex-1 border-b border-slate-300"></div>
                        <b>{{ tax }} руб.</b>
                    </div>
                </div>
                <button 
                    disabled
                    class="h-14 w-full rounded-3xl bg-lime-500 text-white mt-6 hover:bg-lime-600 transition 
                        hover:translate-y-1 active:bg-lime-700 disabled:bg-slate-300 cursor-pointer disabled:translate-y-0">
                    Оформить заказ
                </button>
            </div>

        </div>
    </div>
</template>
<script setup>
import CartItemList from './CartItemList.vue';
import InfoBlock from './InfoBlock.vue';
import { computed } from 'vue'
const props = defineProps({
    isVisible: Boolean,
    setIsVisible: Function,
    cart: Array,
})

const getAllPrice = computed(() => {
    let total = 0
    props.cart.forEach(item => {
        total += item.price
    })
    return total
})

const tax = computed(() => {
    return getAllPrice.value * 0.05
})

</script>
<style lang="">
    
</style>