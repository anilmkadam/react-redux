import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Thriller", duration: "2:30" },
    { title: "Like a Prayer", duration: "4:15" },
    { title: "Closer", duration: "3:40" },
    { title: "Biba", duration: "5:30" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
