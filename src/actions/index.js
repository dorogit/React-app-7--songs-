// Action creator, returns actions

export const selectSong = () => {
  return {
    type: 'SONG_SELECTED',
    payload: Song
  }
}