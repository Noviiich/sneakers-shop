<template lang="">
    <div class="flex items-center rounded-2xl border border-gray-300 p-4 relative">
        <img src="/sneakers/sneakers-1.jpg" alt="Cart 1" class="mr-4 w-12 h-12">
        <div class="text-xs flex flex-col">
            <span>{{ title }}</span>
            <b class="mt-5">{{ price }} руб.</b>
        </div>
        <img src="/close.svg" alt="Close" class="absolute bottom-0 right-0 mr-2 mb-3 transition opacity-50 hover:opacity-100 cursor-pointer">
    </div>
</template>
<script setup>
defineProps({
    // imageUrl: String,
    title: String,
    price: Number,
})
</script>
<style lang="">

</style>