<template>
  <div>
    <Menu as="div" :class="[config.menubar ? 'static' : 'relative']" class="inline-block text-left">
      <div>
        <MenuButton>
          <i class="ri-settings-3-fill"></i>
          <span class="hidden font-bold lg:inline">设置</span>
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
            <button :class="[
      active ? 'bg-violet-500 text-white' : 'text-gray-900',
      'group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold'
    ]" @click="handleUpdateClick">
              <i class="ri-git-repository-commits-line mr-2"></i>
              <span class="font-bold">本地导入</span>
              <input ref="_UpdateRef" type="file" class="hidden" @change="handleFileChange" />
            </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
            <button :class="[
      active ? 'bg-violet-500 text-white' : 'text-gray-900',
      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
    ]">
              <i class="ri-dashboard-horizontal-line mr-2"></i>
              <span class="font-bold">书架管理</span>
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref } from 'vue'
import { useAppConfig } from '@/stores/appConfig'
import axios from 'axios'

const { config } = useAppConfig()

const _UpdateRef = ref<HTMLInputElement | null>(null)

function handleUpdateClick() {
  _UpdateRef.value?.click()
}

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  const file = target.files&&target.files[0]

  if(file) {
    const formdata = new FormData()
    formdata.append('file', file)
    axios.post('http://localhost:3000/files/file',formdata)
  }
}
</script>
