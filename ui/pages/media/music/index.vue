<template>
  <div class="grid">
    <album-card
      v-for="(track, i) in topTracks"
      :key="`album-${i}`"
      :album="track"
      class="album"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AlbumCard from '@@/ui/components/AlbumCard/AlbumCard.vue'

export default {
  name: 'MusicPage',

  components: {
    AlbumCard,
  },

  layout: 'grid-layout',

  computed: {
    ...mapGetters('spotify', ['topTracks']),
  },

  async created() {
    await this.logIn()
    await this.fetchTopTracks()
  },

  methods: {
    ...mapActions('auth', ['logIn']),
    ...mapActions('spotify', ['fetchTopTracks']),
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
}
</style>
