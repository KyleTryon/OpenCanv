import { CanvElement } from "./canv-element";
import { Ref, ref, reactive, toRef, unref } from 'vue';
import { selectedTemplate } from './canv-size-selector'
import { selectedColor } from './canv-color-picker'
class CanvCanvasService {
  canvas: Ref<HTMLCanvasElement | undefined>;
  width: Ref<number>;
  height: Ref<number>;
  backgroundColor: Ref<string>;
  canvElements: Array<CanvElement> = [];
  isAnimated: boolean = false;
  isPlaying: boolean = false;
  animationFrame: number = 0;
  animationSpeed: number = 30;
  ctx: CanvasRenderingContext2D | undefined;
  constructor(canvas: Ref<HTMLCanvasElement | undefined>) {
    this.canvas = canvas;
    this.width = toRef(selectedTemplate, 'width');
    this.height = toRef(selectedTemplate, 'height');
    this.backgroundColor = selectedColor;
    console.log(`w: ${this.width.value}  h: ${this.height.value}`)
  };
}

export const CanvCanvas = reactive(new CanvCanvasService(ref(undefined)));