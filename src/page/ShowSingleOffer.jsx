import { LikeContextProvider } from '../context/LIkesProvider'
import { useOffersContext } from '../hook/useOffersContext'
import { User } from '../components/User'

export function ShowSingleOffer ({ params }) {
  const { allOffers } = useOffersContext()
  const id = params.id
  const offer = allOffers.find((offer) => offer.id === id)

  // const handleNext = () => {
  //   index.current += 1
  //   setLocation(`/oferta/${allOffers[index.current].id}`)
  // }

  // const handlePrev = () => {
  //   if (index.current === 0) return
  //   index.current -= 1
  //   setLocation(`/oferta/${allOffers[index.current].id}`)
  // }

  // useEffect(() => {
  //   if (index.current >= allOffers.length - 1) {
  //     console.log('entro al if')

  //     index.current = 0
  //     setPage((prev) => prev + 1)
  //   }
  // }, [index.current])

  // useEffect(() => {
  //   if (loading) return

  //   setLocation(`/oferta/${allOffers[index.current].id}`)
  // }, [allOffers])

  // return (
  //   <>
  //     <div>
  //       {offer?.title}
  //       <button style={{ display: 'block ' }} onClick={handleNext}>Siguiente</button>
  //       <button style={{ display: 'block ' }} onClick={handlePrev}>Anterior</button>
  //     </div>
  //   </>
  // )

  return (
    <LikeContextProvider>
      <User offer={offer} />
    </LikeContextProvider>
  )
}
