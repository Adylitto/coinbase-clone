import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '4h1hw7j8',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skkXjdmTD9fntwi6UJgC2jxPNk9nlHZaztJEkyYwe4N8VyV1YCJPe0RBAObLo8OpLX2wwAvwHgphU2dwQHDJSpVzvitGYOTvDgbAFo193h37rDLdA8qk0rTjoUO5LNRBnrnslnZMTcKuyXKCBqfD7rHRDP9wOsMOvBukNK05FGHB3ycQsLtb', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})