<script lang="ts" setup>
import {type PropType } from "vue";

defineProps({
  modelValue: {
    type: String as PropType<string>,
    default: "",
  },
  label: {
    type: String as PropType<string | null>,
    default: null,
  },
  placeholder: {
    type: String as PropType<string>,
    default: "",
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

function handler(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="flex flex-col gap-y-0.5 w-full">
    <label
      v-if="label"
      class="text-sm select-none font-medium text-slate-600"
      >{{ label }}</label
    >
    <textarea
      :disabled="disabled"
      class="h-full resize-none border placeholder-slate-500 border-slate-400 disabled:bg-slate-200 outline-none rounded-lg py-1.5 px-4 text-sm font-normal"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handler"
    />
  </div>
</template>
