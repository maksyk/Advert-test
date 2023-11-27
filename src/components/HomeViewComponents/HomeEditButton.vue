<script setup lang="ts">
import DialogButton from '@/components/ui/Button/DialogButton.vue'
import { inject, ref, type PropType } from 'vue'
import { HomePageAPI } from '@/api/HomeView'
import HomeForm from '@/components/HomeViewComponents/HomeForm.vue'
import type { iAdvert } from '@/types/HomeView'
const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true
  },
  init: {
    type: Object as PropType<iAdvert>,
    default: null
  }
})

const isOpen = ref<boolean>(false)
// const closeForm = () => {
//   isOpen.value = false
// }
const submit = (DTO: iAdvert): void => {
    console.log(props.id);
    console.log(JSON.stringify(DTO, null,'..'))
  HomePageAPI.updateAdvert(props.id, DTO).then(() => {
    isOpen.value = false
    successHandler()
  })
}
const successHandler = inject('success', () => {})
</script>
<template>
  <DialogButton header="Редактирование пользователя" icon="edit" empty v-model="isOpen">
    <HomeForm :init="init"  @submit="submit" />
  </DialogButton>
</template>
