import { Link } from 'wouter'
import { IconLogo } from '../components/icons'
import { Navigation } from '../components/navigation'

export function Home () {
  return (
    <section className='h-screen bg-[#5d6299]'>
      <IconLogo className='w-40 py-2 block m-auto fill-[#f0f3ff]' />
      <img src='public/content-card-salary.png' alt='image-banner' className='block m-auto rounded-lg' />
      <p className='w-[70%] text-center m-auto my-5 text-[#d3d8f6]'>
        ¿Estás cansado de perder tiempo buscando ofertas de trabajo que no se ajustan a tus intereses? Con esta aplicación te mostramos ofertas de trabajo de manera aleatoria y personalizada, basadas en tus gustos y preferencias.
      </p>
      <Link to='/oferta' className=' w-[max-content] block m-auto px-4 py-2 bg-[#343132] text-white rounded-md'>Empezar</Link>
    </section>
  )
}
