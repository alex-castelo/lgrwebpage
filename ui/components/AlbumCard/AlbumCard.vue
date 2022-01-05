<template>
  <div v-if="album">
    <img :src="album.images.medium" alt="Album image" />
    <p class="song-title">{{ album.artist.trackName }}</p>
    <p><b>Name:</b> {{ album.album.name }}</p>
    <p><b>Fecha de lanzamiento:</b> {{ album.album.releaseDate }}</p>
    <p><b>Spotify:</b> <a target="_blank" :href="album.song.link">link</a></p>
    <p><audio controls :src="album.song.previewUrl">Preview</audio></p>
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
  margin-top: 2.5rem;
  font-weight: 700;
  font-size: 2rem;
}
</style>
