<script setup lang="ts">
class Todo {
  name: string
  done: boolean

  constructor(name: string, done: boolean) {
    this.name = name
    this.done = done
  }
}

const input = ref<string>('')
const todoItems = ref<Todo[]>([])
const loading = ref<boolean>(false)

const addTodo = () => {
  loading.value = true
  todoItems.value.push(new Todo(input.value, false))
  console.log(todoItems.value)
  loading.value = false
  input.value = ''
}
</script>

<template>
  <div class="card">
    <div class="flex items-center gap-2">
      <InputText v-model="input" placeholder="What needs to be done?" type="text" size="large"/>
      <Button icon="pi pi-plus" :loading="loading" @click="addTodo"/>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <DataTable :value="todoItems" paginator :rows="5">
      <Column field="name" header="Name"></Column>
      <Column field="done" header="Done"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>
