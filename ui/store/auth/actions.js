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

  commit('SET_TOP_TRACKS', result)
}

export default {
  logIn,
  fetchTopTracks,
}
