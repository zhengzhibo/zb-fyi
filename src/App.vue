<template>
  <div class="wrapper">
    <right-nav />
    <div class="container">
      <page-header />
      <home />
    </div>
    <page-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './components/Home.vue'
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
import RightNav from './components/RightNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home, PageHeader, PageFooter, RightNav
  }
})
</script>

<style lang="scss" scoped>

</style>
