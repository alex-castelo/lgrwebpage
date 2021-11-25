<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="route in routes" :key="route.name" class="navbar-item">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import routes from './_utils/routes'

export default {
  name: 'TheNavBar',
  data() {
    return {
      routes,
    }
  },
}
</script>

<style scoped>
.navbar {
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--color4);
}

.navbar-list {
  display: flex;
  justify-content: space-around;
}

.navbar-item {
  list-style: none;
  font-weight: 700;
  margin: 16px 8px;
}
</style>
