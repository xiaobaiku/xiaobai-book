<template>
  <aside
    :class="`${classAside}${classLeft}${classShadow}`"
    class="sm:max-w-96 sm:static sm:shadow-[1px_0_40px_5px_#00000040]"
  ></aside>
  <!-- <div class="hidden -left-3/5"></div> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppConfig } from '@/stores/appConfig'

const { config } = useAppConfig()

// left-0 shadow-[1px_0_40px_5px_#00000040]
const classAside = ref('absolute top-0 h-full w-4/6 bg-white duration-300')
const classLeft = ref('')
const classShadow = ref('')

watch(
  () => config.menubar,
  (bool) => {
    console.log(bool)
    if (bool) {
      classLeft.value = ' left-0'
      classShadow.value = ' shadow-[1px_0_40px_5px_#00000040]'
    } else {
      classLeft.value = ' -left-4/6'
      classShadow.value = ''
    }
  },
  { immediate: true }
)
</script>
