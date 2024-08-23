<template lang="">
    <div class="flex items-center rounded-2xl border border-gray-300 p-4 relative">
        <img :src="item.imageUrl" alt="Cart 1" class="mr-4 w-12 h-12">
        <div class="text-xs flex flex-col">
            <span>{{ item.title }}</span>
            <b class="mt-5">{{ item.price }} руб.</b>
        </div>
        <img 
            src="/close.svg" 
            alt="Close" 
            class="absolute bottom-0 right-0 mr-2 mb-3 transition opacity-50 hover:opacity-100 cursor-pointer"
            @click="onClickDelete"
        >
    </div>
</template>
<script setup>
const props = defineProps({
    item: Object,
    remove: Function,
})

const onClickDelete = () => {
    props.remove(props.item.id)
}

</script>
<style lang="">

</style>