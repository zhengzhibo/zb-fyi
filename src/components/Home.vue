<template>
  <section>
    <div v-for="md in mds" :key="md.attributes.url" class="post">
      <component :is="md.VueComponent" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const rawMds = import.meta.glob('../articles/*.md')
    const mds = shallowRef<object>([])
    const promiseCollection: Promise<object>[] = [];

    for (const path in rawMds) {
      promiseCollection.push(rawMds[path]());
    }
    Promise.all(promiseCollection).then(mdObjects => {
      mdObjects = mdObjects.map(md => {
        md.attributes.parsedTime = new Date(md.attributes.time)
        return md
      })

      mdObjects.sort((a, b) => {
        return a.attributes.parsedTime.getTime() - b.attributes.parsedTime.getTime()
      })

      mds.value = mdObjects
    })

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
