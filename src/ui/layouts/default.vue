<template>
  <div class="app">
    <nav-bar />
    <div class="container">
      <Nuxt class="content" />
    </div>
    <the-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter,
  },
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 4rem;
}

.content {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
</style>
