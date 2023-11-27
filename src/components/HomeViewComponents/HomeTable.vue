<script setup lang="ts">
import TableWrapper from '@/components/ui/Table/TableWrapper.vue'
import TableColumn from '@/components/ui/Table/TableColumn.vue'
import HomeEditButton from './HomeEditButton.vue'
import HomeDeleteButton from './HomeDeleteButton.vue'
import Checkbox from '@/components/ui/Checkbox/Checkbox.vue'
import { ref, type PropType, computed } from 'vue'

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    default: []
  },
  modelValue: {
    type: Array as PropType<number[]>
  }
})
const emit = defineEmits(['update:modelValue'])
function handler(value: number): void {
  if (!props.modelValue) return

  if (props.modelValue?.includes(value)) {
    emit(
      'update:modelValue',
      props.modelValue.filter((i) => i !== value)
    )
  } else {
    emit('update:modelValue', [...props.modelValue, value])
  }
}
const selected = computed(() => {
  return props.modelValue
})
</script>
<template>
  <TableWrapper :data="data">
    <TableColumn header="">
      <template v-slot="slotProps">
        <Checkbox
          @update:model-value="handler(slotProps.data.id)"
          v-model="selected"
          :value="slotProps.data.id"
        />
      </template>
    </TableColumn>
    <TableColumn header="Name" field="username"></TableColumn>
    <TableColumn header="Email" field="email"></TableColumn>
    <TableColumn header="Telegram" field="telegram"></TableColumn>
    <TableColumn header="WhatsApp" field="whatsapp"></TableColumn>
    <TableColumn header="Skype" field="skype"></TableColumn>
    <TableColumn header="Description" field="description"></TableColumn>
    <TableColumn header="Actions">
      <template v-slot="slotProps">
        <div class="flex gap-3">
          <HomeEditButton :id="slotProps.data.id" :init="slotProps.data" />
          <HomeDeleteButton :id="slotProps.data.id" />
        </div>
      </template>
    </TableColumn>
  </TableWrapper>
</template>
<style></style>
