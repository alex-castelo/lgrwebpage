<template>
  <div>
    <div class="album">Hola que ase</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MusicPage',

  computed: {},

  created() {
    this.logIn()
  },

  methods: {
    ...mapActions('auth', ['logIn']),
  },
}
</script>
