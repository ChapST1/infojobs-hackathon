import { motion } from 'framer-motion'

export function Notification ({ children }) {
  return (
    <motion.div className=' w-[max-content] fixed bottom-5 right-3  bg-[#7276b2] text-[#f0f3ff] py-2 px-3 rounded' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 20 }}>
      {children}
    </motion.div>
  )
}
