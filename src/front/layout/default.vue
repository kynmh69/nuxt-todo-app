<template>
  <div>
    <!-- header   -->
    <Menu>
      <template #start>
        <span>Todo</span>
      </template>
    </Menu>
    <slot/>
    <!-- footer   -->
    <footer class="flex justify-center p-2">
      <span>Created by kynmh69.</span>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>