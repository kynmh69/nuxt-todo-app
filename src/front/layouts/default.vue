<template>
  <div>
    <!-- header   -->
    <Menubar>
      <template #start>
        <div class="flex">
          <span class="text-2xl">Todo</span>
        </div>
      </template>
    </Menubar>
    <slot/>
    <!-- footer   -->
    <footer class="bg-gray-900 text-gray-300 flex justify-center p-2">
      <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
        <p>&copy;　{{ new Date().getFullYear() }} Created by kynmh69.</p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>