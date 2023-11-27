<script setup lang="ts">
import InputText from '@/components/ui/Input/InputText.vue'
import TextArea from '@/components/ui/Input/TextArea.vue'
import Button from '@/components/ui/Button/Button.vue'

import type { iAdvert } from '@/types/HomeView'
import type {PropType}  from 'vue'
import { ref, onMounted } from 'vue'


const props = defineProps({
  init: {
    type: Object as PropType<iAdvert | null>,
    default: null
  }
})

onMounted(() => {
  if (!!props.init) {
    const { email, telegram, whatsapp, password, password_confirm, skype, description } = props.init
    DTO.value = {
      email,
      password,
      password_confirm,
      telegram,
      whatsapp,
      skype,
      description
    }
  } else {
    DTO.value = {
      email: '',
      password: '',
      password_confirm: '',
      telegram: '',
      whatsapp: '',
      skype: '',
      description: ''
    }
  }
})

const DTO = ref<iAdvert>()

const emit = defineEmits(['submit'])

function handler() {
  emit('submit', DTO.value)
}
</script>
<template>
  <div class="grid grid-cols-2 gap-4" v-if=DTO>
    <InputText v-model="DTO.email" label="Email" />
    <InputText v-model="DTO.password" label="Password"  />
    <InputText v-model="DTO.password_confirm" label="Password confirm"  />
    <InputText v-model="DTO.telegram" label="Telegram" />
    <InputText v-model="DTO.whatsapp" label="Whatsapp" />
    <InputText v-model="DTO.skype" label="Skype" />
    <TextArea v-model="DTO.description" label="Description" class="col-span-2" />
    <Button label="Submit" class="col-span-2" @click="handler" />
  </div>
</template>
<style></style>
