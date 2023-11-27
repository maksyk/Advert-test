<script lang="ts" setup>
import { type PropType } from "vue";
import Button from '@/components/ui/Button/Button.vue';
import Dialog from '@/components/ui/Dialog/Dialog.vue';

defineProps({
  title: {
    type: String as PropType<string | null>,
    default: null
  },
  label: {
    type: String as PropType<string | null>,
    default: null,
  },
  ghost: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  empty: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  icon: {
    type: String as PropType<string | null>,
    default: null,
  },
  header: {
    type: String as PropType<string | null>,
    default: null,
  },
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

function handler(value: boolean): void {
  emit("update:modelValue", value);
}
</script>

<template>
  <Button
      :title="title"
      :label="label"
      :ghost="ghost"
      :empty="empty"
      :icon="icon"
      @click="handler(!modelValue)"
  />

  <Dialog
      :model-value="modelValue"
      @update:model-value="handler"
      :header="header"
  >
    <slot />
  </Dialog>
</template>
