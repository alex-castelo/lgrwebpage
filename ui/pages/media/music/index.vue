<template>
  <div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
    </div>
    <div v-if="tracks" class="album">
      <img :src="firstTrack.images.medium" alt="" srcset="" />
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
</style>
