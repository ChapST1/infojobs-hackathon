import { Empty } from '../components/Error/Empty'
import { Navigation } from '../components/navigation'
import { SaveData } from '../components/saveData'
import { useSaveOffersContext } from '../hook/useStorageOffersContext'
import { getFromLocalStorage } from '../utils'

export function SaveOffers () {
  const savedOffers = getFromLocalStorage('saveOffers') ?? []
  console.log({
    savedOffers
  })

  return (
    <section>
      <Navigation />
      {
        savedOffers?.length > 0
          ? <SaveData />
          : (
            <Empty />
            )
      }
    </section>
  )
}
