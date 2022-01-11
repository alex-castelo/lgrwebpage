<template>
  <div v-if="album" class="card">
    <div class="card__cover">
      <img :src="album.images.medium" class="border" alt="Album image"></img>
    </div>
    <div class="card__content stack-s">
      <p class="song-title">
        {{ album.song.name }}
      </p>
      <p><b>Name:</b> {{ album.album.name }}</p>
      <p><b>Fecha de lanzamiento:</b> {{ album.album.releaseDate }}</p>
      <p><b>Spotify:</b> <a target="_blank" :href="album.song.link">link</a></p>
      <p>
        <nuxt-link :to="`/media/music/track/${album.song.songId}`">
          More info
        </nuxt-link>
      </p>
      <p><audio controls :src="album.song.previewUrl">Preview</audio></p>
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

.border{
   border: 1px solid black;
}

.card {
    display: flex;
    flex-direction: column;
}

.card__cover {
    height: 300px;
    width: 100%;
}

.card__content {
    /* Take available height */
    background-color: white;
    flex: 1;
}
</style>
