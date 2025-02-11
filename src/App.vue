<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})

</script>

<template>
  <main>
    <Button type="primary" plain ref="buttonRef">test Button</Button>
  </main>
</template>

<style scoped>

</style>
