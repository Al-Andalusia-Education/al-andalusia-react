const Estudios = () => {
  return (
    <div className='fixed left-1/2 -translate-x-1/2 mt-10 w-[1000px] bg-[#f4f5f5] shadow-lg border border-gray-100 z-10 p-6 opacity-0 translate-y-4 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto'>
      <div className='grid grid-cols-[250px_1fr] gap-10'>
        <ul>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/esenciales/'>
              Cursos Esenciales 2025/26
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/diplomas/'>Diplomas</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/grados/'>Grados</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/testimonios/'>Testimonios</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/becas/'>Solicitud de becas</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://instituto.alandalusia.education/'>
              Instituto superior
            </a>
          </li>
          <li className='block px-4 py-3 text-sm text-[#D8B820]'>
            <a href='/'>Academia (4-16 años)</a>
            {/*EL ENLACE LLEVA A LA MISMA PÁGINA */}
          </li>
        </ul>
        <div className='grid grid-cols-2 text-[#D8B820] font-medium gap-6'>
          <a href='https://alandalusia.org/esenciales/'>
            <div>
              <img
                src='/SubMenus_NavBar/Estudios/cursos_esenciales.jpg'
                alt='Cursos Esenciales'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Cursos Esenciales</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/grados/'>
            <div>
              <img
                src='/SubMenus_NavBar/Estudios/grados.jpg'
                alt='Grados'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Grados</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/becas/'>
            <div>
              <img
                src='/SubMenus_NavBar/Estudios/becas.jpeg'
                alt='Becas'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Becas</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/academia-al-andalusia/'>
            <div>
              <img
                src='/SubMenus_NavBar/Estudios/academia_4_16.jpg'
                alt='Academia 4-16 Años'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Academia (4-16 Años)</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Estudios
