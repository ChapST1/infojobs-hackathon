import { Actions } from './actions'
import { Category } from './category'
import { Share } from './share'

export function Info ({ offer }) {
  const DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYdVu7rpU378wt-Y5Rwa1yIb_Z_0Mic05cA&usqp=CAU'

  return (
    <div className=' col-span-2 bg-[#060606] p-4'>
      <header className='w-full flex items-center justify-between gap-4'>
        <div className='flex items-start gap-3'>
          <img src={offer?.profile.logoUrl || DEFAULT_IMAGE} alt='' className='w-[50px] rounded-full' />
          <div className='flex flex-col gap-1'>
            <a className='text-white text-sm hover:underline' href={offer?.profile.web} target='_blank' rel='noreferrer'>{offer?.profile.name}</a>
            <span className='text-white text-xs'>Publicacion</span>
          </div>
        </div>

        <button className='text-white border py-1 px-3 text-sm'>Ir a infojobs</button>
      </header>
      {/* descripcion */}
      <div className='mt-4 py-2 border-t-2 border-[#828282] h-[250px]  overflow-y-scroll ' id='user-description'>
        <p className='text-[#d7d7d7]'>
          {offer?.description}
        </p>
      </div>

      {/* categoria */}
      <Category category={offer?.category?.value} subCategory={offer?.subcategory?.value} />

      {/* acciones */}
      <Actions />

      {/* copiar enlace */}
      <Share link={offer?.link} />
    </div>
  )
}
