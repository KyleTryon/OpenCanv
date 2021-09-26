<template>
  <div class="dropDownArea relative">
    <button class="flex flex-row rounded bg-gray-100 p-1 items-center justify-around w-52">
      <span class="text-xs" v-html="selectedTemplate.logo"></span>
      <span class="px-1">{{ selectedTemplate.templateName }}</span>
      <span class="text-xs text-gray-500">
        {{ selectedTemplate.width }} x {{ selectedTemplate.height }}</span
      >
    </button>
    <div class="dropDownMenu absolute rounded bg-white p-2 shadow z-50 hidden">
      <ul>
        <li v-for="template in templateSizes" :key="template.templateName">
          <button
            class="
              flex flex-row
              items-center
              py-2
              px-1
              rounded
              hover:bg-gray-100
            "
            @click="selectTemplate(template)"
          >
            <span class="text-xs" v-html="template.logo"></span>
            <span class="px-1">{{ template.templateName }}</span>
            <span class="text-xs text-gray-500">
              {{ template.width }} x {{ template.height }}</span
            >
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.dropDownArea:hover .dropDownMenu {
  @apply block;
}
</style>

<script setup lang="ts">
import {
  selectedTemplate,
  templateSizes,
  CanvasSizeTemplate
} from "../../services/canv-size-selector";
function selectTemplate(templateSelection: CanvasSizeTemplate): void {
  selectedTemplate.templateName = templateSelection.templateName;
  selectedTemplate.width = templateSelection.width;
  selectedTemplate.height = templateSelection.height;
  selectedTemplate.logo = templateSelection.logo;
  selectedTemplate.serviceName = templateSelection.serviceName;
}
</script>