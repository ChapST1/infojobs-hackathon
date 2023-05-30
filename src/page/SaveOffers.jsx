import { motion } from 'framer-motion'

import { Empty } from '../components/Error/Empty'
import { Navigation } from '../components/navigation'
import { SaveData } from '../components/saveData'
import { getFromLocalStorage } from '../utils'

export function SaveOffers () {
  const savedOffers = getFromLocalStorage('saveOffers') ?? []

  return (
    <motion.section initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Navigation />
      {
        savedOffers?.length > 0
          ? <SaveData />
          : (
            <Empty />
            )
      }
    </motion.section>
  )
}
