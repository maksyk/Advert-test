<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
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
});

const buttonClass = computed((): { [key: string]: boolean } => {
  return {
    button: true,
    ghost: !!props.ghost,
    empty: !!props.empty,
    // "only-icon": props.icon !== null && props.label === null,
  };
});
</script>

<template>
  <button :class="buttonClass">
    <span
      v-if="icon"
      class="material-symbols-outlined leading-none text-2xl"
      :class="[!!props.empty ? `font-normal` : `font-medium`]"
    >
      {{ icon }}
    </span>
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  @apply bg-accent
	hover:bg-accent-secondary
	border-accent
	hover:border-accent-secondary
	text-white
	border
	rounded-lg
	py-1.5
	px-4
	font-medium
	flex
	items-center
	gap-2
	justify-center;
}

.ghost {
  @apply bg-inherit
	hover:bg-inherit
	text-accent
	hover:text-accent-secondary;
}

.only-icon {
  @apply justify-center
	p-1.5
	rounded-full;
}

.empty {
  @apply text-black
	font-normal
	border-none
	p-0
	bg-inherit
	hover:bg-inherit
	text-sm;
}
</style>
