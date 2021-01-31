<template>
  <footer class="page-footer">
    Copyright © 2014-2021 Alex Zheng
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter',
  setup: () => {
  }
})
</script>

<style lang="scss" scoped>
@import 'src/styles/vars.scss';

.page-footer {
  background: $main-color;
  width: 75%;
  border-radius: 0 5px 0 0;
  color: $fore-color;
}
</style>
