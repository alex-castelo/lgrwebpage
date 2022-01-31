<template>
  <div class="center">
    <div v-if="track" data-testid="track-info" class="stack-m">
      <h1>{{ track.name }}</h1>
      <img
        :src="track.album.images[1].url"
        :alt="`Imagen del album de la canción ${track.name}`"
      />
      <p><audio controls :src="track.preview_url">Preview</audio></p>
      <p><b>Album:</b> {{ track.album.name }}</p>
      <p><b>Artist:</b> {{ track.artists[0].name }}</p>
      <p>
        <b>Artist info:</b>
        <a :href="track.artists[0].external_urls.spotify" target="_blank"
          >link</a
        >
      </p>

      <p>
        <nuxt-link :to="`/media/music/`">
          {{ `⇤ Back` }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      trackId: this.$route?.params?.id,
    }
  },

  computed: {
    ...mapState('spotify', ['track']),
  },

  async created() {
    await this.getTrackInfo()
  },

  methods: {
    ...mapActions('spotify', ['fetchTrackInfo']),

    async getTrackInfo() {
      await this.fetchTrackInfo(this.trackId)
    },
  },
}
</script>

<style scoped>
.center {
  text-align: center;
  margin: 0 auto;
}
</style>
