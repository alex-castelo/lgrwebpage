<template>
  <div>
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
img {
  object-fit: cover;
  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);
  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
}

.container:hover img {
  opacity: 0.3;
}

.container img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}
</style>
