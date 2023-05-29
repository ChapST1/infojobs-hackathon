import { Route } from 'wouter'
import { Card } from './components/Card'
import { OfferContextProvider } from './context/OfferProvider'
import { Home } from './page/Home'
import { Offer } from './page/Offer'
import { ShowSingleOffer } from './components/ShowSingleOffer'

function App () {
  return (
    <OfferContextProvider>
      <Route path='/' component={Home} />
      <Route path='/oferta' component={Offer} />
      <Route path='/oferta/:id' component={ShowSingleOffer} />
    </OfferContextProvider>
  )
}

export default App
