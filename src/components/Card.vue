<template lang="">
    <div class="border border-slate-300 bg-white rounded-3xl p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
      <div>
        <img 
          @click="onClickFavourite" 
          :src="imgFavourite"
          alt="Like 1" 
          class="absolute pt-2"
        >   
        <img :src="item.imageUrl" alt="Sneaker">
      </div>
      
      <span class="mt-2">
        {{ item.title}}
      </span>

      <div class="flex justify-between mt-4">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена:</span>
          <b>{{ item.price }} руб.</b>
        </div>
        
        <img @click="onClickAdd" :src="imgAdd" alt="Plus">        
      </div>
    </div>
</template>
<script setup>
import { computed, inject} from 'vue';

const props = defineProps({
  item: Object,
  isAdd: Boolean,
  isFavourite: Boolean,
});

const { addToCart, removeFromCart } = inject('cart')
const { addToFavourites, removeFromFavourites} = inject('favourites')

const imgAdd = computed(() => {
  return props.isAdd ? '/checked.svg' : '/plus.svg'
})
const imgFavourite = computed(() => {
  return props.isFavourite ? '/like-2.svg ' : '/like-1.svg'
})

const onClickAdd = () => {
  if (props.isAdd) {
    removeFromCart(props.item.id)
  }
  else {
    addToCart(props.item)
  }
}

const onClickFavourite = () => {
  if (props.isFavourite) {
    removeFromFavourites(props.item.id)
  }
  else {
    addToFavourites(props.item)
  }
}

</script>
<style lang="">
    
</style>