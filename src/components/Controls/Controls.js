import React, {useContext} from "react";
import {MixtapeContext} from "../MixtapeContext/MixtapeContext.js";

export const Controls = () => {
  const {genre, setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext);

  function changeGenre(event) {
    setGenre(event.target.value);
  }

  function changeSortOrder() {
    
    if(sortOrder === "ascending") {

        setSortOrder("descending");

    } else if (sortOrder === "descending") {
        
        setSortOrder("ascending");

    }
  }

  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      TODO: Genre control? Sort order control?
      <select onChange={changeGenre}>
        <option value="all">All</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
      </select>

      <button onClick={changeSortOrder}>{sortOrder}</button>
    </div>
  );
};
