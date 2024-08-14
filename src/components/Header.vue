<template lang="">
    <header class="flex justify-between border-b-2 border-slate-300 px-10 py-8">
      
      <div class="flex items-center gap-6">
        <img src="/logo.png" alt="logo" class="w-16" />
        <div>
          <h2 class="text-3xl font-bold uppercase">krossiX</h2>
          <p class="text-slate-400">Магазин лучшей обуви</p>
        </div>
      </div>

      <ul class="flex cursor-pointer items-center gap-4 text-gray-500">
        <li class="flex gap-2 hover:text-black">
            <img src="/cart.svg" alt="Cart"/>
            <b>0 руб.</b>
        </li>

        <li class="flex cursor-pointer gap-2 hover:text-black">
            <img src="/heart.svg" alt="Cart"/>
            <span>Избранное</span>
        </li>

        <li class="flex cursor-pointer gap-2 hover:text-black">
            <img src="/profile.svg" alt="Cart"/>
            <span>Профиль</span>
        </li>
      </ul>

    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>