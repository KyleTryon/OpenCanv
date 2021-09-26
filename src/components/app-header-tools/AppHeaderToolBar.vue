
<script setup lang="ts">
import CanvasSizeSelector from "./CanvasSizeSelector.vue"
import CanvasBGColorPicker from "./ColorPicker/CanvasBGColorPicker.vue";
</script>
<template>
  <aside class="bg-white shadow p-2 flex flex-row space-x-4">
    <CanvasBGColorPicker />
    <CanvasSizeSelector />
  </aside>
</template>