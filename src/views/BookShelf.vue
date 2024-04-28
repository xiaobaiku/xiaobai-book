<template>
  <div class="px-6 py-6 sm:px-12">
    <header class="flex justify-between items-center">
      <h2 class="flex text-xl font-bold gap-2">
        <div type="button" @click="handleMenuClick">
          <i class="ri-function-fill sm:hidden"></i>
        </div>
        <span class="font-bold">
          书架
          <span class="font-bold">(12)</span>
        </span>
      </h2>
      <div class="ml-auto">
        <ImportBook></ImportBook>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useAppConfig } from '@/stores/appConfig'
import ImportBook from '@/components/ImportBook.vue'

const { toggleMenubar } = useAppConfig()

const handleMenuClick = () => {
  toggleMenubar(true)
}
</script>
