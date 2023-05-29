import { Route } from 'wouter'
import { OfferContextProvider } from './context/OfferProvider'
import { Home } from './page/Home'
import { Offer } from './page/Offer'
import { ShowSingleOffer } from './page/ShowSingleOffer'
import { SaveOffers } from './page/SaveOffers'
import { OffersStorageProvider } from './context/OfferStorageProvider'

function App () {
  return (
    <OfferContextProvider>
      <OffersStorageProvider>

        <Route path='/' component={Home} />
        <Route path='/oferta' component={Offer} />
        <Route path='/oferta/:id' component={ShowSingleOffer} />
        <Route path='/me' component={SaveOffers} />

      </OffersStorageProvider>
    </OfferContextProvider>

  )
}

export default App
