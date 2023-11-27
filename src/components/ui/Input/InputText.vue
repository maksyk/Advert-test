<script lang="ts" setup>
import {type PropType } from "vue";

defineProps({
  modelValue: {
    type: String as PropType<string | null>,
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
  white: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  required: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isValidate: {
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
    <label v-if="label" class="text-sm select-none font-medium text-slate-600"
      >{{ label }}<span v-if="required" class="text-red-500">*</span></label
    >
    <input
      class="border placeholder-slate-500 bg-white border-slate-400 outline-none rounded-lg py-2 px-4 text-sm font-normal"
      :class="[!white ? `disabled:bg-slate-200` : ``, isValidate ? 'border-red-500' : '']"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handler"
      :disabled="disabled"
    />
  </div>
</template>
