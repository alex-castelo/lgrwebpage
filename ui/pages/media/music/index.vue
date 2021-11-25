<template>
  <div>
    <div class="album" v-text="tracks" />
    <button @click="getToken">TOKEN NUEVO</button>
    <button @click="fetchTopSongs">TOP SONGS</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MusicPage',

  layout: 'grid-layout',

  computed: {
    ...mapState('auth', ['tracks']),
  },

  methods: {
    ...mapActions('auth', ['logIn', 'fetchTopTracks']),
    getToken() {
      this.logIn()
    },

    fetchTopSongs() {
      this.fetchTopTracks()
    },
  },
}
</script>
