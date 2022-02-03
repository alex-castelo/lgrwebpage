const topTracks = (state) => {
  return state.tracks?.slice(0, 9)
}

export default {
  topTracks,
}
