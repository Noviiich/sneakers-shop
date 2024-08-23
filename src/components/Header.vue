<template lang="">
    <header class="flex justify-between border-b-2 border-slate-300 px-10 py-8">

      <RouterLink to="/">
        <div class="flex items-center gap-6 cursor-pointer">
          <img src="/logo.png" alt="logo" class="w-16" />
          <div>
            <h2 class="text-3xl font-bold uppercase">krossiX</h2>
            <p class="text-slate-400">Магазин лучшей обуви</p>
          </div>
        </div>
      </RouterLink>

      <ul class="flex cursor-pointer items-center gap-4 text-gray-500">
        <li class="flex gap-2 hover:text-black" @click="setIsVisible">
            <img src="/cart.svg" alt="Cart"/>
            <b>{{ getAllPrice }} руб.</b>
        </li>

        <RouterLink to="/favourites">
          <li class="flex cursor-pointer gap-2 hover:text-black">
              <img src="/heart.svg" alt="Cart"/>
              <span>Избранное</span>
          </li>
        </RouterLink>

        <li class="flex cursor-pointer gap-2 hover:text-black">
            <img src="/profile.svg" alt="Cart"/>
            <span>Профиль</span>
        </li>
      </ul>

    </header>
</template>
<script setup> 
import { computed } from 'vue';
const props = defineProps({
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


</script>
<style lang="">
    
</style>