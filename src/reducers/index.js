import { combineReducers } from 'redux'

const songReducer = () => {
  return ([
    {title: 'I want it that way', duration: '4:05'},
    {title: 'I really want to stay at your house', duration: '5:00'},
    {title: 'Weight of the world', duration: '5:00'},
    {title: 'Who is ready for tomorrow',duration: '4:00'}
  ])
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == 'SONG_SELECTED') {
    return action.payload
  } 

  return selectedSong
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});