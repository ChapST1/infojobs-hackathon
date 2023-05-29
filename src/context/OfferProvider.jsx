import React, { createContext, useState } from 'react'

export const OfferContext = createContext({})

export function OfferContextProvider ({ children }) {
  const [allOffers, setAllOffers] = useState([])

  return (
    <OfferContext.Provider value={{ allOffers, setAllOffers }}>
      {children}
    </OfferContext.Provider>
  )
}
