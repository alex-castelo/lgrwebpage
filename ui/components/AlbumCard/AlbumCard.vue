<template>
  <div v-if="album">
    <img :src="album.images.medium" class="responsive" alt="Album image" />
    <div class="stack-s">
      <p class="song-title">
        {{ album.song.name }}
      </p>
      <p><b>Spotify:</b> <a target="_blank" :href="album.song.link">link</a></p>
      <p>
        <b>More info:</b>
        <nuxt-link :to="`/media/music/track/${album.song.songId}`"
          >link
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.song-title {
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
}

.border {
  max-width: 100%;
  height: auto;
}
</style>
