import React, {useContext} from "react";
import { Song } from "../Song/Song.js";
import {MixtapeContext} from "../MixtapeContext/MixtapeContext.js";

export const SongList = () => {
  // Your code here! ✨
  const {genre, sortOrder, songs} = useContext(MixtapeContext);

  function filterGenre(song) {
    if(genre === "all") {
        return song;
    } else if(song.genre === genre) {
        return song;
    }
  }

  function sortSongs(songA, songB) {

    if (sortOrder === "ascending") {
        return songA.year - songB.year;
    } else if (sortOrder === "descending") {
        return songB.year - songA.year;
    }

  }

  return (
    <>
      {
        songs.sort(sortSongs).filter(filterGenre).map(function(song){
        return (
            <Song {...song} key={song.name}/>
        );
      })
      }
    </>
  );
};
