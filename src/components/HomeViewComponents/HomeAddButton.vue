<script setup lang="ts">
import DialogButton from '@/components/ui/Button/DialogButton.vue';
import HomeForm from '@/components/HomeViewComponents/HomeForm.vue';

import type { iAdvert } from '@/types/HomeView';
import { inject, ref } from 'vue';
import { HomePageAPI } from '@/api/HomeView';

const isOpen = ref<boolean>(false)
// const closeForm = () => {
//   isOpen.value = false
// }
const submit = ( DTO: iAdvert): void => {
  console.log(JSON.stringify(DTO, null,'..'))
  HomePageAPI.createAdvert(DTO).then(() => {
    isOpen.value = false
    successHandler()
  })
}
const successHandler = inject('success', () => {})

</script>
<template>
  <DialogButton header="Add Advert" v-model="isOpen" icon="add">
    <HomeForm @submit="submit" />
  </DialogButton>
</template>
