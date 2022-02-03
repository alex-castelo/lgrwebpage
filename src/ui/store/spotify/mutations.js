const SET_TOP_TRACKS = (state, tracks) => {
  state.tracks = tracks
}

const SET_TRACK_INFO = (state, track) => {
  state.track = track
}

export default {
  SET_TOP_TRACKS,
  SET_TRACK_INFO,
}
