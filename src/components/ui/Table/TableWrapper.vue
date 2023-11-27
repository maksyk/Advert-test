<script lang="ts" setup>
import { computed, type PropType, useSlots } from "vue";
// import Utils from "../../../utils";
// import Loader from "../Loader/Loader.vue";
defineProps({
  data: {
    type: Array as PropType<{ [key: string]: any }[]>,
    required: true,
  },
  isLoader: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();

const columns = computed((): any[] => {
  const data: any[] = [];

  if (!!slots.default) {
    slots.default().forEach((i) => {
      data.push(...getChildren(i));
    });
  }

  return data;
});

const getChildren = (parent: any): any[] => {
  const data = [];

  if (Array.isArray(parent.children)) {
    parent.children.forEach((i: any) => {
      data.push(...getChildren(i));
    });
  } else if (parent.props !== null && parent.props.header !== null) {
    data.push(parent);
  }

  return data;
};
const emit = defineEmits(["sort"]);
const sort = (field: string) => {
  emit("sort", field);
};

const getValue = (from: any, key: string | null): any => {
  if (!key) {
    return null;
  }
  key.split(".").forEach((i: string) => {
    if (typeof from !== "object" || from === null) {
      return from;
    }
    from = from[i];
  });
  return from ?? "Данные отсутствуют";
};

</script>

<template>
  <div class="relative text-xs font-semibold">
    <Loader v-if="isLoader" />

    <table class="text-slate-900 border-spacing-y-4 border-separate w-full h-full ">
      <slot />
      <thead class="text-slate-600">
        <tr>
          <td
            v-for="column in columns"
            @click="sort(column.props.field)"
            class="cursor-pointer select-none text-left px-5"
            style="text-wrap: nowrap"
          >
            {{ column.props.header }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="font-medium shadow rounded-[10px] outline outline-1 outline-[#202020]/20"

          v-for="(i, index) in data"
          :key="index"
        >
          <template v-for="column in columns" :key="index">
            <td
              v-if="!!column.children"
              class=" bg-white px-5 py-3"
              style="text-wrap: balance"
            >
              <component
                v-for="child in column.children"
                :is="child"
                :data="i"
                :index="index"
              />
            </td>
            <td v-else class="py-3 px-5  bg-white " style="text-wrap: balance">
              {{ getValue(i, column.props.field) }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
