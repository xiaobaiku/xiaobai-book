import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAppConfig = defineStore('app', () => {
  const config = reactive({
    menubar: false
  })

  function toggleMenubar(open?: boolean) {
    if (open === undefined) config.menubar = !config.menubar
    else config.menubar = open
  }

  return { config, toggleMenubar }
})
