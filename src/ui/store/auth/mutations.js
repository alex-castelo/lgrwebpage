const SET_SPOTIFY_TOKEN = (state, token) => {
  state.authToken = token
}

const SET_TOP_TRACKS = (state, tracks) => {
  state.tracks = tracks
}

export default {
  SET_SPOTIFY_TOKEN,
  SET_TOP_TRACKS,
}
