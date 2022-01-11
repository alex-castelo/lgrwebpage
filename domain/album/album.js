export default function getRequiredAlbumData({
  id: songId,
  album,
  external_urls: { spotify: spotifyURL },
  name,
  preview_url: previewUrl,
}) {
  return {
    ...__getAlbumData(album),
    ...__getImages(album),
    ...__getSongData({ songId, spotifyURL, name, previewUrl }),
  }
}

function __getImages(album) {
  return {
    images: {
      big: album.images[0].url,
      medium: album.images[1].url,
      small: album.images[2].url,
    },
  }
}

function __getSongData({ songId, spotifyURL, name, previewUrl }) {
  return {
    song: {
      name,
      songId,
      previewUrl,
      link: spotifyURL,
    },
  }
}

function __getAlbumData(album) {
  return {
    album: {
      albumName: album.name,
      releaseDate: album.release_date,
      tracks: album.total_tracks,
    },
  }
}
