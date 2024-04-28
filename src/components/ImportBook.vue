<template>
  <div class="text-xl flex gap-2">
    <span class="font-bold cursor-pointer" @click="handleSearchClick">
      <i class="ri-filter-2-fill"></i>
      <span class="hidden font-bold lg:inline">搜索</span>
    </span>

    <XDropdown> </XDropdown>

    <!-- <input ref="importFileRef" type="file" class="hidden" accept=".txt" /> -->
  </div>
</template>

<script setup lang="ts">
import XDropdown from './XDropdown.vue'
import axios from 'axios'

function handleSearchClick() {
  axios
    .get('http://www.mayiks.com/', {
      headers: {
        Accept: 'text/html',
      }
    })
    .then(console.log)
}
</script>
