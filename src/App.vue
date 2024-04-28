<template>
  <div class="h-full bg-slate-100 sm:flex sm:flex-row-reverse">
    <main
      class="before:duration-500 before:ease-in-out before:block before:w-full before:h-full before:absolute before:pointer-events-none sm:flex-1 sm:before:w-0"
      :class="config.menubar && mainBeforeClass"
      @click.capture="handleMainClick"
    >
      <RouterView></RouterView>
    </main>
    <BookAside></BookAside>
  </div>
</template>

<script setup lang="ts">
import BookAside from '@/components/aside/BookAside.vue'
import { useAppConfig } from '@/stores/appConfig'

const { config, toggleMenubar } = useAppConfig()

const mainBeforeClass = 'before:bg-black/20 before:pointer-events-auto'

const handleMainClick = () => {
  toggleMenubar(false)
}
</script>
