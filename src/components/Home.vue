<template>
  <section>
    <div v-for="md in mds" :key="md.path" class="post">
      <component :is="md.VueComponent" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const rawMds = import.meta.glob('../articles/*.md')
    const mds = ref([])

    for (const path in rawMds) {
      rawMds[path]().then((md) => {
        mds.value.push({
          path,
          ...md
        })
        console.log(mds)
      })
    }

    return {
      mds
    }
  }
})
</script>

<style lang="scss" scoped>
.post {
  padding-top: 50px;
}
</style>
