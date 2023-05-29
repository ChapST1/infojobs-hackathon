import React, { useState } from 'react'

export const LikeContext = React.createContext({})

export function LikeContextProvider ({ children }) {
  const [allLikes, setAllLikes] = useState([])

  /*
  objInfo = {
    // offerId:
    // offerCategory:
    // isLiked:
  }
  */

  return (
    <LikeContext.Provider value={{ allLikes, setAllLikes }}>
      {children}
    </LikeContext.Provider>
  )
}
