import { Link } from 'wouter'

export function Links () {
  const links = [
    {
      name: 'Inicio',
      path: '/'
    },
    {
      name: 'Ofertas',
      path: '/oferta'
    },
    {
      name: 'Mi almacen',
      path: '/almacen'

    }
  ]
  return (
    <ul className='flex gap-5'>
      {
        links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className=' duration-300 text-[#f7fafd] hover:text-[#d4d5f8]'>{link.name}</Link>
          </li>
        ))
        }
    </ul>
  )
}
