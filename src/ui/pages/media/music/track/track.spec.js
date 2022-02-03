import { render } from '@testing-library/vue'
import trackInfoComponent from './_id.vue'

const trackMock = {
  album: {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4Me5uB1aAglEiE97wxIoX7',
        },
        href: 'https://api.spotify.com/v1/artists/4Me5uB1aAglEiE97wxIoX7',
        id: '4Me5uB1aAglEiE97wxIoX7',
        name: 'Castelo LGR',
        type: 'artist',
        uri: 'spotify:artist:4Me5uB1aAglEiE97wxIoX7',
      },
    ],
    available_markets: ['ES'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/2kJLkoLwPkDPUZmJ1XsHkC',
    },
    href: 'https://api.spotify.com/v1/albums/2kJLkoLwPkDPUZmJ1XsHkC',
    id: '2kJLkoLwPkDPUZmJ1XsHkC',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273b78a79189e22f0190990094f',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02b78a79189e22f0190990094f',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851b78a79189e22f0190990094f',
        width: 64,
      },
    ],
    name: 'Slowfood',
    release_date: '2019-05-19',
    release_date_precision: 'day',
    total_tracks: 8,
    type: 'album',
    uri: 'spotify:album:2kJLkoLwPkDPUZmJ1XsHkC',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4Me5uB1aAglEiE97wxIoX7',
      },
      href: 'https://api.spotify.com/v1/artists/4Me5uB1aAglEiE97wxIoX7',
      id: '4Me5uB1aAglEiE97wxIoX7',
      name: 'Castelo LGR',
      type: 'artist',
      uri: 'spotify:artist:4Me5uB1aAglEiE97wxIoX7',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5dZgwub5hgu9gyr0AgoL8K',
      },
      href: 'https://api.spotify.com/v1/artists/5dZgwub5hgu9gyr0AgoL8K',
      id: '5dZgwub5hgu9gyr0AgoL8K',
      name: 'Reverendo',
      type: 'artist',
      uri: 'spotify:artist:5dZgwub5hgu9gyr0AgoL8K',
    },
  ],
  available_markets: ['ES'],
  disc_number: 1,
  duration_ms: 270422,
  explicit: true,
  external_ids: {
    isrc: 'QZFZ22096347',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/19Z9oV81cOG42mwO8ZB5QL',
  },
  href: 'https://api.spotify.com/v1/tracks/19Z9oV81cOG42mwO8ZB5QL',
  id: '19Z9oV81cOG42mwO8ZB5QL',
  is_local: false,
  name: '4eva&chuleria',
  popularity: 0,
  preview_url:
    'https://p.scdn.co/mp3-preview/de7094d8f445f3bd29b5ef5cfec43a5acdd678c0?cid=d3148a59d9424d08b96f706cb09fdb26',
  track_number: 3,
  type: 'track',
  uri: 'spotify:track:19Z9oV81cOG42mwO8ZB5QL',
}

describe('Track individual component', () => {
  it('renders component if there is trackInfo', () => {
    const { getByTestId } = render(trackInfoComponent, {
      data() {
        return {
          trackId: '123456',
        }
      },
      store: {
        modules: {
          spotify: {
            namespaced: true,
            state: {
              track: trackMock,
            },
            actions: {
              fetchTrackInfo: jest.fn(),
            },
          },
        },
      },
    })

    expect(getByTestId('track-info')).toBeInTheDocument()
  })

  it('does not render any component if there is not any trackInfo', () => {
    const { queryByTestId } = render(trackInfoComponent, {
      data() {
        return {
          trackId: '123456',
        }
      },
      store: {
        modules: {
          spotify: {
            namespaced: true,
            state: {
              track: null,
            },
          },
        },
      },
    })

    expect(queryByTestId('track-info')).not.toBeInTheDocument()
  })
})
