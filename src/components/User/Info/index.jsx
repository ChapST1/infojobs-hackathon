import { Actions } from './actions'
import { Heart } from './actions/heart'
import { Save } from './actions/save'
import { Category } from './category'
import { Share } from './share'
import { Controls } from '../Offer/controls'
import { FormatInfo } from '../Offer/formatInfo'
import { Header } from './header'

export function Info ({ offer }) {
  return (
    <div className=' col-span-2 bg-[#f0f3ff] p-4 relative border-l-2 border-[#676ba746]'>
      <Header offer={offer} />

      <div className='mt-4 py-2 border-t-2 border-[#676ba7] h-[250px]  overflow-y-scroll ' id='user-description'>
        <FormatInfo info={offer?.profile.description} />
      </div>

      <Category category={offer?.category?.value} subCategory={offer?.subcategory?.value} />

      <Actions>
        <Heart offerId={offer?.id} offerCategory={offer?.category?.value} />
        <Save offerId={offer?.id} />
      </Actions>

      <Share link={offer?.link} />

      <Controls />
    </div>
  )
}
