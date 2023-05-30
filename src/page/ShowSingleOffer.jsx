import { LikeContextProvider } from '../context/LIkesProvider'
import { useOffersContext } from '../hook/useOffersContext'
import { User } from '../components/User'
import { Navigation } from '../components/navigation'

export function ShowSingleOffer ({ params }) {
  const { allOffers } = useOffersContext()
  const id = params.id
  const offer = allOffers.find((offer) => offer.id === id)

  return (
    <LikeContextProvider>
      <Navigation />
      <User offer={offer} />
    </LikeContextProvider>
  )
}
