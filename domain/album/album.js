export default function getRequiredAlbumData({
  id: songId,
  album,
  external_urls: { spotify },
  name,
  preview_url: previewUrl,
}) {
  return {
    artist: {
      trackName: name,
    },
    images: {
      big: album.images[0].url,
      medium: album.images[1].url,
      small: album.images[2].url,
    },
    album: {
      name: album.name,
      releaseDate: album.release_date,
      tracks: album.total_tracks,
    },
    song: {
      songId,
      previewUrl,
      link: spotify,
    },
  }
}
