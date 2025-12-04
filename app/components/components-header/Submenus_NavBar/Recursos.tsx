const Recursos = () => {
  return (
    <div className='fixed left-1/2 -translate-x-1/2 mt-10 w-[1000px] bg-[#f4f5f5] shadow-lg border border-gray-100 z-10 p-6 opacity-0 translate-y-4 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto'>
      <div className='grid grid-cols-[250px_1fr] gap-10'>
        <ul>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/noticias-y-eventos/'>Noticias</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/book-publishers/'>Tienda</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alqurtubia.com/'>Al-Qurtubia</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/calendario/'>
              Eventos Al-Andalusia
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://drive.google.com/file/d/1gvAOVtoDmgpv1i0xU2AzUe12FCAIWsnP/edit'>
              Cartel del Campus
            </a>
          </li>
        </ul>
        <div className='grid grid-cols-2 text-[#D8B820] font-medium gap-6'>
          <a href='https://alqurtubia.com/'>
            <div>
              <img
                src='/SubMenus_NavBar/Recursos/al_qurtubia.jpg'
                alt='Al-Qurtubia'
                className='h-50 w-full object-cover object-top'
              />
              <h2 className='mt-3 text-2xl'>Al-Qurtubia</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/calendario/'>
            <div>
              <img
                src='/SubMenus_NavBar/Recursos/calendario_eventos.jpg'
                alt='Calendario eventos'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Calendario De Eventos</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/contacto/'>
            <div>
              <img
                src='/SubMenus_NavBar/Recursos/contacto.jpg'
                alt='Contacto'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Contacto</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/book-publishers/'>
            <div>
              <img
                src='/SubMenus_NavBar/Recursos/tienda.jpg'
                alt='Tienda'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Tienda</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Recursos
