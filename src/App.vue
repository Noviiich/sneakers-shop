<template lang="">
  <Drawer 
    :isVisible="isVisible" 
    :setIsVisible="setIsVisible" 
    :cart="cart"
  />
  <div class="padding-10 bg-white rounded-lg w-4/5 m-auto shadow-xl mt-14">
    <Header 
      :setIsVisible="setIsVisible"
      :cart="cart"
    />

    <div class="py-8 px-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Drawer from './components/Drawer.vue'
import {provide, ref} from 'vue'

const cart = ref([])
const favourites = ref([])

const addToCart = (value) => {
  cart.value.push(value)
  console.log(cart.value)
}
const removeFromCart = (id) => {
  cart.value = cart.value.filter(item => item.id !== id)
  console.log(cart.value)
}
const isInCart =  (product) =>  {
  return cart.value.some(item => item.id === product.id);
}


const addToFavourites= (value) => {
  favourites.value.push(value)
  console.log(favourites.value)
}
const removeFromFavourites = (value) => {
  favourites.value = favourites.value.filter(item => item.id !== value)
  console.log(favourites.value)
}
const isInFavourites = (product) => {
  return favourites.value.some(item => item.id === product.id);
}

const isVisible = ref(false)
const setIsVisible = () => {
  isVisible.value = !isVisible.value
}

provide('cart', {
  cart,
  addToCart,
  removeFromCart,
  isInCart
})

provide('favourites', {
  favourites,
  addToFavourites,
  removeFromFavourites,
  isInFavourites
})


</script>
<style lang="">
  
</style>