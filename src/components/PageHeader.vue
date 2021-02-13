<template>
  <header class="page-header">
    <router-link to="/">
      <img src="/avatar.jpg" class="avatar" />
      <span class="title">Zb.fyi</span>
    </router-link>
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

.page-header a {
  display: flex;
  align-items: center;
}

.title {
  font-size: 16px;
}
</style>
