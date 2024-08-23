<template>
  <span class="text font-medium text-2xl">Мои закладки</span>

  <div v-if="favourites.length !== 0">
    <CardList
      :items="favourites"
    />
  </div>

  <div v-else class="">
    <InfoBlock 
      title="Нет избранных товаров"
      description="Вы ничего не добавляли в избранное"
      imageUrl="/emoji-1.png"
    />
  </div>
</template>

<script setup>
import CardList from '@/components/CardList.vue';
import InfoBlock from '@/components/InfoBlock.vue';
import { inject } from 'vue';

const { favourites } = inject('favourites')
</script>

<style>

</style>