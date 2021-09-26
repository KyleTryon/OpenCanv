<script setup lang="ts">
import { reactive, ref, Ref, onMounted, toRef } from 'vue'
import { CanvCanvas } from "../services/canv-canvas"
  const CanvCanvasElement: Ref<HTMLCanvasElement | undefined> = ref(undefined)
  const canvasWidth = toRef(CanvCanvas, 'width')
  const canvasHeight = toRef(CanvCanvas, 'height')
  const canvasBackgroundColor = toRef(CanvCanvas, 'backgroundColor')
  onMounted(() => {
    CanvCanvas.canvas = CanvCanvasElement.value as HTMLCanvasElement
    CanvCanvas.ctx = CanvCanvas.canvas.getContext("2d") as CanvasRenderingContext2D
  })
</script>

<template>
  <div class="shadow-lg" :style="{ backgroundColor: canvasBackgroundColor }">
    <canvas ref="CanvCanvasElement" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>