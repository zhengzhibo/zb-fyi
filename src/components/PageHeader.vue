<template>
  <header>
    <img src="/avatar.jpg" class="avatar">
    <h1>Zb.fyi</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZHeader',
  setup: () => {
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
</style>
