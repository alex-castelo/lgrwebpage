<template>
  <div class="app">
    <nav-bar />
    <div class="container">
      <h1 class="page-title">
        {{ pageTitle }}
      </h1>
      <Nuxt />
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

  computed: {
    pageTitle() {
      return this.$route.fullPath.toUpperCase()
    },
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
  text-align: center;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}

.page-title {
  margin: 16px auto;
}
</style>
