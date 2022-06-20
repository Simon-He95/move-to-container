<script setup lang="ts">
function finish(e) {
  // console.log('haha', e)
}
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <vivid-typing content="Move To Container" font-bold text-4xl m-b-10 />
    <div class="container" border-1 border-dark w-100 h-100 relative ma />
    <Footer />
  </main>
  <move-to-container to=".container" :finish="finish">
    <img src="/drag.jpg" alt="拖拽" w-10 h-10 ma>
    <div style="white-space: nowrap">
      Drag Me
    </div>
  </move-to-container>
</template>
