const NAME = "theaudiodb",
  DOMAIN = `https://${NAME}.com`,
  DEV = `${DOMAIN}/api/v1/json`,
  KEY = `${DEV}/1`,
  CONNECT= `${KEY}/search.php?s=`;
  //ARTIST = `${KEY}/artist.php?i=${ARTIST_NAME}`,
  //ARTIST = `${KEY}/discography.php?s=${ARTIST_NAME}`,
  //MUSIC_VID = `${KEY}/mvid.php?i=${ARTST_ID}`,
  //ALBUM = `${KEY}/album.php?i=${ARTIST_ID}`,
  //TRACK_DATA = `${KEY}/track.php?m=${ALBUM_ID}`,}

export default {
  NAME,
  DOMAIN,
  DEV,
  KEY,
  CONNECT
}