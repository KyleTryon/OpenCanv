<script setup lang="ts">
import CanvCanvas from './components/CanvCanvas.vue';
import AppHeaderToolBar from './components/app-header-tools/AppHeaderToolBar.vue';
import AppSideToolArea from './components/app-side-panel/AppSideToolArea.vue';
</script>

<template>
  <div class="flex flex-row h-full">
    <AppSideToolArea />
    <section class="flex flex-col flex-1 h-full">
      <AppHeaderToolBar />
      <div class="bg-gray-400 flex flex-1 justify-center items-center">
        <CanvCanvas />
      </div>
    </section>
  </div>
</template>

<style>
#toolNav > ul > li > button {
  @apply my-4
}
</style>
