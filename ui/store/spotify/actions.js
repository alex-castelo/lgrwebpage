import { getTopTracks } from '@@/infra/spotifyAPI.js'
import getRequiredAlbumData from '@@/domain/album/album'

async function fetchTopTracks({ rootState, commit }) {
  const {
    auth: { authToken },
  } = rootState

  const result = await getTopTracks(authToken)

  const formattedData = result.tracks.map((track) =>
    getRequiredAlbumData(track)
  )

  commit('SET_TOP_TRACKS', formattedData)
}

export default { fetchTopTracks }
