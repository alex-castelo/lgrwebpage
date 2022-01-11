// Id de artista de Castelo Lgr
const ARTIST_ID = '4Me5uB1aAglEiE97wxIoX7'

export async function getToken(clientId, clientSecret) {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  })

  const data = await result.json()
  return data.access_token
}

export async function getTopTracks(token) {
  const result = await fetch(
    `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=ES`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    }
  )

  const data = await result.json()
  return data
}

export async function getTrackInfo({ trackId, token }) {
  const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })

  const data = await result.json()
  return data
}
