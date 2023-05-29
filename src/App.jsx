import { Route } from 'wouter'
import { OfferContextProvider } from './context/OfferProvider'
import { Home } from './page/Home'
import { Offer } from './page/Offer'
import { ShowSingleOffer } from './page/ShowSingleOffer'
import { SaveOffers } from './page/SaveOffers'

function App () {
  return (
    <OfferContextProvider>
      <Route path='/' component={Home} />
      <Route path='/oferta' component={Offer} />
      <Route path='/oferta/:id' component={ShowSingleOffer} />
      <Route path='/almacen' component={SaveOffers} />
    </OfferContextProvider>
  )
}

export default App
