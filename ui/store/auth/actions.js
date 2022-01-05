import { getToken } from '@@/infra/spotifyAPI.js'

async function logIn({ commit }) {
  const clientId = process.env.CLIENT_ID
  const secretId = process.env.SPOTIFY_CLIENT_SECRET

  const accesToken = await getToken(clientId, secretId)
  commit('SET_SPOTIFY_TOKEN', accesToken)
}

export default {
  logIn,
}
