const Proyectos = () => {
  return (
    <div className='fixed left-1/2 -translate-x-1/2 mt-10 w-[1000px] bg-[#f4f5f5] shadow-lg border border-gray-100 z-10 p-6 opacity-0 translate-y-4 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto'>
      <div className='grid grid-cols-[250px_1fr] gap-10'>
        <ul>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/consejo-estudiantil/'>
              Consejo Estudiantil
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://copervai.alandalusia.org/?_gl=1%2A127dq2a%2A_ga%2AODg3MjM4MTQxLjE3NTgyOTc2NTE.%2A_ga_CXSZ6BKNQ3%2AczE3NjQ4NDgyMDgkbzYkZzEkdDE3NjQ4NDkzNDAkajI1JGwwJGgw%2A_ga_TSNH8P2PTE%2AczE3NjQ4NDgyMDgkbzYkZzEkdDE3NjQ4NDkzNDAkajI1JGwwJGgw'>
              COPERVAI
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/ciiha/'>CIIHA</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/esuna/'>ESUNA</a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://www.instagram.com/alandalusia_for_humanity/#'>
              Al-Andalusia for Humanity
            </a>
          </li>
          <li className='block px-4 py-3 text-sm hover:text-[#D8B820]'>
            <a href='https://alandalusia.org/voluntariado/'>Voluntariado</a>
          </li>
        </ul>
        <div className='grid grid-cols-2 text-[#D8B820] font-medium gap-6'>
          <a href='https://alandalusia.org/consejo-estudiantil/'>
            <div>
              <img
                src='/SubMenus_NavBar/Universidad/universidad.jpg'
                alt='Consejo Estudiantil'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>Consejo Estudiantil</h2>
            </div>
          </a>
          <a href='https://copervai.alandalusia.org/?_gl=1%2A1j9tpb0%2A_ga%2AODg3MjM4MTQxLjE3NTgyOTc2NTE.%2A_ga_CXSZ6BKNQ3%2AczE3NjQ4NDgyMDgkbzYkZzEkdDE3NjQ4NDk0NzkkajQ3JGwwJGgw%2A_ga_TSNH8P2PTE%2AczE3NjQ4NDgyMDgkbzYkZzEkdDE3NjQ4NDk0NzkkajQ3JGwwJGgw'>
            <div>
              <img
                src='/SubMenus_NavBar/Proyectos/copervai.png'
                alt='COPERVAI'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>COPERVAI</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/ciiha/'>
            <div>
              <img
                src='/SubMenus_NavBar/Proyectos/ciiha.png'
                alt='CIIHA'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>CIIHA</h2>
            </div>
          </a>
          <a href='https://alandalusia.org/esuna/'>
            <div>
              <img
                src='/SubMenus_NavBar/Proyectos/esuna.jpg'
                alt='ESUNA'
                className='h-50 w-full object-cover'
              />
              <h2 className='mt-3 text-2xl'>ESUNA</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
