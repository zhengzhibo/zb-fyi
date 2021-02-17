<template>
  <header class="page-header">

    <router-link to="/" class="brand">
      <img src="/avatar.jpg" class="avatar" />
      <span class="title">Zb.fyi</span>
    </router-link>

    <div class="nav">
      <router-link to="/" class="nav-item"><span>首页</span></router-link>
      <router-link to="/" class="nav-item"><span>归档</span></router-link>
      <router-link to="/" class="nav-item"><span>标签</span></router-link>
    </div>
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

.page-header {
  display: flex;
  align-items: center;
  padding-top: 1rem;

  .brand {

    margin-right: 1rem;
    display: flex;
    align-items: center;

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      margin-right: 2rem;
    }
  }

}

.title {
  font-size: 16px;
}

.nav {
  display: flex;

  .nav-item {
    padding: 0 1rem;
    line-height: 44px;
  }
}
</style>
