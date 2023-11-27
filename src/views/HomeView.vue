<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'
import HomeAllDeleteButton from '@/components/HomeViewComponents/HomeAllDeleteButton.vue'
import HomeTable from '@/components/HomeViewComponents/HomeTable.vue'
import Title from '@/components/ui/Title'
import HomeAddButton from '@/components/HomeViewComponents/HomeAddButton.vue'
import type { iAdvert } from '@/types/HomeView'
import { HomePageAPI } from '@/api/HomeView'
import { computed, onMounted, provide, ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox/Checkbox.vue'

const data = ref<iAdvert[]>([])
onMounted(getData)

function getData() {
  HomePageAPI.getAdvert().then(({ data: _data }) => {
    data.value = _data
  })
}

provide('success', getData)
const selectedItems = ref<number[]>([])
function deleteHandler() {
  if (selectedItems.value.length > 0) {
    selectedItems.value.forEach((i) => {
      HomePageAPI.deleteAdvert(i).then(() => {
        getData()
      })
    })
  }
}
function CheckAll() {
  if (data.value.length === selectedItems.value.length) {
    selectedItems.value = []
  } else {
    //@ts-ignore
    selectedItems.value = data.value.map((e) => +e.id)
  }
}
const selectedAll = computed(() => {
  return (
    selectedItems.value.length === data.value.length &&
    data.value.length > 0 &&
    selectedItems.value.length > 0
  )
})
</script>
<template>
  <div class="flex justify-between items-center">
    <Title title="Advert" />
    <div class="flex gap-4">
      <HomeAllDeleteButton :selectedItems="selectedItems" v-if="selectedItems.length > 0"  />

      <HomeAddButton />
    </div>
  </div>
  <div class="relative">
    <Checkbox
      v-model="selectedAll"
      @update:modelValue="CheckAll"
      class="pl-5 absolute top-4 z-10"
      label="all"
    />
    <HomeTable :data="data" v-model="selectedItems" />
  </div>
</template>
<style></style>
