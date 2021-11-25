import { getToken, getTopTracks } from '@@/infra/spotifyAPI.js'

async function logIn({ commit }) {
  const clientId = process.env.CLIENT_ID
  const secretId = process.env.SPOTIFY_CLIENT_SECRET

  const accesToken = await getToken(clientId, secretId)
  commit('SET_SPOTIFY_TOKEN', accesToken)
}

async function fetchTopTracks({ state, commit }) {
  const { authToken } = state
  const result = await getTopTracks(authToken)

  const formattedData = result.tracks.map((track) =>
    __getRequiredAlbumData(track)
  )

  commit('SET_TOP_TRACKS', formattedData)
}

export default {
  logIn,
  fetchTopTracks,
}

function __getRequiredAlbumData({ album }) {
  return {
    artist: {
      name: album.artists[0].name,
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
  }
}
