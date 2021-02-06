<template>
  <header class="page-header">
    <img src="/avatar.jpg" class="avatar" />
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 2rem;
}

.page-header {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.title {
  font-size: 16px;
}
</style>
