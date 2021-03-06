import React, { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const [watchList, setWatchList] = useState(
    // localStorage.getItem("watchList").split(",") ||
    ["bitcoin", "ethereum", "ripple", "litecoin"]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const AddCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, AddCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
