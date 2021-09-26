<template>
  <div class="relative">
    <button class="rounded border p-2 hover:ring-2" :style="{ backgroundColor: selectedColor }" @click="isOpen = !isOpen"></button>
    <div v-if="isOpen" class="absolute top-12">
      <div class="bg-white rounded border p-2">
        <div class="flex space-x-2">
          <input type="text" placeholder="#FFFFFF" v-model="selectedColor" class="border rounded p-1" />
          <button class="bg-green-500 p-1 rounded" @click="selectColor(selectedColor)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFF">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>
          </button>
        </div>
        <ul class="flex flex-wrap mt-1">
          <li v-for="color in colors" :key="color">
            <button class="h-7 w-7 m-1 rounded-full border" :style="{ backgroundColor: color }" @click="selectColor(color)"></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isOpen, selectedColor, selectColor} from "../../../services/canv-color-picker"
  const colors = [
    "#000000", "#545454", "#737373", "#a6a6a6", "#d9d9d9", "#ffffff",
    "#ff1616", "#ff5757", "#ff66c4", "#CB6CE6", "#8C52FF", "#5F17EC",
    "#04999F", "#00C2CB", "#5CE1E6", "#38B6FF", "#FFBD59", "#004AAD",
    "#008037", "#7ED957", "#C9E265", "#FFDE59", "#FFBD59", "#FF914D"
    ]
</script>