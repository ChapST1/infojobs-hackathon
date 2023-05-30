import { Route } from 'wouter'
import { OfferContextProvider } from './context/OfferProvider'
import { Home } from './page/Home'
import { Offer } from './page/Offer'
import { ShowSingleOffer } from './page/ShowSingleOffer'
import { OffersStorageProvider } from './context/OfferStorageProvider'
import { UserOffers } from './page/UserOffers'

function App () {
  return (
    <OfferContextProvider>
      <OffersStorageProvider>

        <Route path='/' component={Home} />
        <Route path='/oferta' component={Offer} />
        <Route path='/oferta/:id' component={ShowSingleOffer} />
        <Route path='/me' component={UserOffers} />

      </OffersStorageProvider>
    </OfferContextProvider>

  )
}

export default App
