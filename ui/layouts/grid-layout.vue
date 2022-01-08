<template>
  <div class="app">
    <nav-bar />
    <div class="container">
      <h1 class="page-title">
        {{ pageTitle }}
      </h1>
      <Nuxt class="grid" />
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
  margin-bottom: 4rem;
}

.page-title {
  margin: 16px auto;
}

.grid {
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
}
</style>
