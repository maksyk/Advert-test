<script lang="ts" setup>
import Button from '@/components/ui/Button/Button.vue'

import { type PropType, inject, ref } from 'vue'
import DialogButton from '@/components/ui/Button/DialogButton.vue'

import { HomePageAPI } from '@/api/HomeView'

const props = defineProps({
  selectedItems: {
    type: Array as PropType<number[]>,
    required: true
  }
})
const isOpen = ref<boolean>(false)

const successHandler = inject('success', () => {})

const deleteHandler = (): void => {
  if (!!props.selectedItems) {
    props.selectedItems.forEach(async(i) => {
    await  HomePageAPI.deleteAdvert(i).then(successHandler)
    })
    isOpen.value = false
  }
}
</script>

<template>
  <DialogButton v-model="isOpen" icon="delete">
    <form @submit.prevent class="flex flex-col gap-3 w-96 h-24 justify-center">
      <span class="font-medium text-center">Вы уверены?</span>
      <div class="flex items-center gap-3">
        <Button @click="deleteHandler" label="Да" class="w-full" />
        <Button @click="isOpen = false" label="Нет" class="w-full" ghost />
      </div>
    </form>
  </DialogButton>
</template>
