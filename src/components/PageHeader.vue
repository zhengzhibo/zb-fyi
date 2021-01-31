<template>
  <header class="page-header">
    <img src="/avatar.png" class="avatar">
    <span class="title">Zb.fyi</span>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  setup: () => {
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.page-header {
  display: flex;
  align-items: center;
}

.title {
  font-size: 60px;
}
</style>
