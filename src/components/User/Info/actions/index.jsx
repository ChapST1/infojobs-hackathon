import { Heart } from './heart'
import { Save } from './save'

export function Actions () {
  return (
    <div className='flex items-center justify-start gap-5  px-2 py-4 border-t-2 border-[#828282] select-none'>
      <Heart />
      <Save />
    </div>
  )
}
