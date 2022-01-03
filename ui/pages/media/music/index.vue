<template>
  <div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="Album image" />
      <p class="song-title">{{ firstTrack.artist.trackName }}</p>
      <p><b>Name:</b> {{ firstTrack.album.name }}</p>
      <p><b>Fecha de lanzamiento:</b> {{ firstTrack.album.releaseDate }}</p>
      <p>
        <b>Spotify:</b> <a target="_blank" :href="firstTrack.song.link">link</a>
      </p>
      <p><audio controls :src="firstTrack.song.previewUrl">Preview</audio></p>
    </div>

    <div class="buttons">
      <button @click="getToken">TOKEN NUEVO</button>
      <button @click="fetchTopSongs">TOP SONGS</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MusicPage',

  layout: 'grid-layout',

  computed: {
    ...mapState('auth', ['tracks']),

    firstTrack() {
      return this.tracks[0]
    },
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

.song-title {
  margin-top: 2.5rem;
  font-weight: 700;
  font-size: 2rem;
}
</style>
