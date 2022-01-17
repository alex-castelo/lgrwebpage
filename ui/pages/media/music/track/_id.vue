<template>
  <div v-if="trackInfo" class="stack-m center">
    <h1>{{ trackInfo.name }}</h1>
    <p><b>Album:</b> {{ trackInfo.album.name }}</p>
    <p><b>Artist:</b> {{ trackInfo.artists[0].name }}</p>
    <p><b>Artist info:</b> <a :href="trackInfo.artists[0].external_urls.spotify" target="_blank">link</a></p>
    <img :src="trackInfo.album.images[1].url" alt=""></img>
    <p>
      <nuxt-link :to="`/media/music/`">
        {{ `⇤ Back` }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { getTrackInfo } from '@@/infra/spotifyAPI'

export default {
  data() {
    return {
      trackInfo: null,
      trackId: this.$route?.params?.id,
    }
  },

  computed: {
    ...mapState('auth', ['authToken']),
  },

  async created() {
    await this.logIn()
    await this.fetchTrackInfo()
  },

  methods: {
    ...mapActions('auth', ['logIn']),

    async fetchTrackInfo() {
      const authInfo = {
        trackId: this.trackId,
        token: this.authToken,
      }

      this.trackInfo = await getTrackInfo(authInfo)
    },
  },
}
</script>

<style scoped>
.center{
  text-align: center;
  margin: 0 auto;
}
</style>
