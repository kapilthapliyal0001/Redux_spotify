export const addToHome = (musicArray) => ({
  type: "ADD_TO_HOME",
  payload: musicArray,
});

export const addToAlbum = (musicArray) => ({
  type: "ADD_TO_ALBUM",
  payload: musicArray,
});

export const addToArtist = (musicArray) => ({
  type: "ADD_TO_ARTIST",
  payload: musicArray,
});

export const addToSearchText = (text) => ({
  type: "ADD_TO_SEARCH_TEXT",
  payload: text,
});

export const addToLikedMusic = (music) => ({
  type: "ADD_TO_LIKED_MUSIC",
  payload: music,
});

export const addToPlayer = (music) => ({
  type: "ADD_TO_PLAYER",
  payload: music,
});
