import { ref } from "vue";
export let isOpen = ref(false);
export const selectedColor = ref("#FFFFFF");
export function selectColor(color: string): void {
  selectedColor.value = color;
  isOpen.value = false;
}