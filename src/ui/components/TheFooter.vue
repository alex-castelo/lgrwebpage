<template>
  <footer class="footer">
    <p>
      Author: Àlex Castelo Martínez<br />
      <a href="mailto:alexcastelomartinez@gmail.com"
        >alexcastelomartinez@gmail.com</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
<style scoped>
.footer {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color5);
}
</style>
