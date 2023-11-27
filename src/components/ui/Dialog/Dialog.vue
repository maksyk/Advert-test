<script lang="ts" setup>
import { type PropType, ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  header: {
    type: String as PropType<string | null>,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const wrapper = ref<any>(null);

function handler(event: Event): void {
  if (!event.composedPath().includes(wrapper.value)) {
    emit("update:modelValue", false);
  }
}
</script>

<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex items-center justify-center backdrop-blur-sm"
      @click="handler"
    >
      <div ref="wrapper" class="bg-white rounded-lg p-5">
        <header
          v-if="header"
          class="flex items-center justify-between bg-white text-slate-900 font-medium mb-5"
        >
          <h2 class="text-lg">
            {{ header }}
          </h2>
          <span
            @click="() => emit(`update:modelValue`, false)"
            class="material-symbols-outlined leading-none text-2xl cursor-pointer"
          >
            close
          </span>
        </header>
        <slot />
      </div>
    </div>
  </teleport>
</template>
