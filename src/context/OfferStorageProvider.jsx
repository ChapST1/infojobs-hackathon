import React, { useState } from 'react'

export const OfferStorageContext = React.createContext({})

export function OffersStorageProvider ({ children }) {
  const [saveOffers, setSaveOffer] = useState([])

  return (
    <OfferStorageContext.Provider value={{ saveOffers, setSaveOffer }}>
      {children}
    </OfferStorageContext.Provider>
  )
}
