<template>
  <div class="container">
    <page-header />
    <home />
    <page-footer />
    测试发布2
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './components/Home.vue'
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home, PageHeader, PageFooter
  }
})
</script>

<style lang="scss" scoped>

</style>
