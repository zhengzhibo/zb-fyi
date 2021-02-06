<template>
  <section>
    <component v-if="post" :is="post.VueComponent" />
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'Post',
  props: {
    postUrl: {
      type: String
    }
  },
  setup: (props) => {
    const posts = inject('posts')
    const post = ref()

    watchEffect(() => {
      const a = posts.value.find(x => x.attributes.url === props.postUrl)
      post.value = a
    })

    return {
      post
    }
  }
})
</script>
