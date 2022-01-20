export default function getRequiredAlbumData({
  id: songId,
  album,
  external_urls: { spotify: spotifyURL },
  name,
}) {
  return {
    ...__getImages(album),
    ...__getSongData({ songId, spotifyURL, name }),
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

function __getSongData({ songId, spotifyURL, name }) {
  return {
    song: {
      name,
      songId,
      link: spotifyURL,
    },
  }
}
