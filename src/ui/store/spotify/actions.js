import { getTopTracks, getTrackInfo } from '../../../infra/spotifyAPI'
import getRequiredAlbumData from '../../../domain/album/album'

async function fetchTopTracks({ dispatch, rootState, commit }) {
  await dispatch('auth/logIn', null, { root: true })
  const { authToken } = rootState.auth

  const result = await getTopTracks(authToken)

  const formattedData = result?.tracks?.map((track) =>
    getRequiredAlbumData(track)
  )

  commit('SET_TOP_TRACKS', formattedData)
}

async function fetchTrackInfo({ dispatch, rootState, commit }, trackId) {
  commit('SET_TRACK_INFO', null)
  await dispatch('auth/logIn', null, { root: true })

  const {
    auth: { authToken },
  } = rootState

  const requestInfo = {
    trackId,
    token: authToken,
  }

  const info = await getTrackInfo(requestInfo)

  commit('SET_TRACK_INFO', info)
}

export default { fetchTopTracks, fetchTrackInfo }
