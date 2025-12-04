const Universidad = () => {
  return (
    <div className='fixed left-1/2 -translate-x-1/2 mt-10 w-[1000px] bg-[#f4f5f5] shadow-lg border border-gray-100 z-10 p-6 opacity-0 translate-y-4 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto'>
      <div className='grid grid-cols-[250px_1fr] gap-10'>
        <ul>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/historia/'>Historia</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/fundador/'>Fundador</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/sobre-nosotros/'>Sobre nosotros</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/facultades/'>Facultades</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/centro-estudios-andalusies/'>
              Centro Estudios Andalucíes
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/claustro-docente/'>
              Claustro Docente
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/acreditacion/'>Acreditación</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/campus/'>Campus</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/contacto/'>Contacto</a>
          </li>
        </ul>
        <div className='grid grid-cols-2 text-[#D8B820] font-medium gap-6'>
          <a href='https://alandalusia.org/historia/'>
            <div>
              <img
                src='/SubMenus_NavBar/Universidad/historia.jpg'
                alt='Profesores'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Historia</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/fundador/'>
            <div>
              <img
                src='/SubMenus_NavBar/Universidad/fundador.jpg'
                alt='Fundador'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Fundador</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/universidad/'>
            {/*NO LLEVA A NINGÚN ENLACE DISPONIBLE*/}
            <div>
              <img
                src='/SubMenus_NavBar/Universidad/universidad.jpg'
                alt='Alumnos'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Universidad</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/facultades/'>
            <div>
              <img
                src='/SubMenus_NavBar/Universidad/campus.jpg'
                alt='Campus'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Facultades</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Universidad
