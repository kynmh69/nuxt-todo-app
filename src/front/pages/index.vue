<script setup lang="ts">
const input = ref<string>('')
const addTodo = () => {
  console.log(input.value)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <InputText v-model="input" placeholder="What needs to be done?" type="text" size="large" on-click="addTodo();"/>
    <Button icon="pi pi-plus"/>
  </div>
</template>

<style scoped>

</style>