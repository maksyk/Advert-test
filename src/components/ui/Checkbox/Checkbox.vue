<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
  modelValue: {
    type: [Array, Boolean] as PropType<any[] | boolean>,
    // required: true,
  },
  label: {
    type: String as PropType<string | null>,
    default: null,
  },
  value: null as any,
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed((): boolean => {
  if (typeof props.modelValue === "boolean") {
    return <boolean>props.modelValue;
  }

  if (Array.isArray(props.modelValue)) {
    return props.modelValue.some((i: any) => {
      return JSON.stringify(i) === JSON.stringify(props.value);
    });
  }

  return false;
});

function handler(): void {
  if (props.modelValue === undefined) {
    return;
  }

  if (typeof props.modelValue === "boolean") {
    emit("update:modelValue", !props.modelValue);
  } else if (Array.isArray(props.modelValue)) {
    if (isChecked.value) {
      return emit(
        "update:modelValue",
        props.modelValue.filter(
          (i) => JSON.stringify(i) !== JSON.stringify(props.value),
        ),
      );
    }
    emit("update:modelValue", [...props.modelValue, props.value]);
  }
}
</script>

<template>
  <span
    @click="handler"
    class="group flex items-center gap-3 text-slate-800 hover:text-slate-700 font-normal text-sm select-none"
  >
    <span
      class="h-5 w-5 border border-accent group-hover:border-accent-secondary rounded flex items-center justify-center"
      :class="[isChecked ? `bg-accent group-hover:bg-accent-secondary` : null]"
    >
      <span
        v-if="isChecked"
        class="material-symbols-outlined leading-none text-xl text-white"
      >
        check
      </span>
    </span>
    {{ label }}
  </span>
</template>
