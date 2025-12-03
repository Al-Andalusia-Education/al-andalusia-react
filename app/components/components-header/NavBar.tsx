import { IoIosArrowDown } from 'react-icons/io'

const NavBar = () => {
  return (
    <div className='bg-white font-poppins'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4 h-30'>
        <div className='flex items-center'>
          <img
            src='/logo-al-andalusia.png'
            alt='Logo escuela'
            className='h-20 w-auto'
          />
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex space-x-8'>
            <li>
              <a href='/' className='font-semibold hover:text-[#D8B820]'>
                INICIO
              </a>
            </li>
            <li className='relative group'>
              <a
                href=''
                className='font-semibold hover:text-[#D8B820] flex items-center'
              >
                LA UNIVERSIDAD
                <IoIosArrowDown className='ml-1' />
              </a>
              <ul className='absolute left-0 mt-0 w-48 bg-white shadow-lg border border-gray-100 hidden group-hover:block z-10'>
                <li>
                  <a
                    href=''
                    className='block px-4 py-2 text-sm hover:text-[#D8B820]'
                  >
                    Historia
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href=''
                className='font-semibold hover:text-[#D8B820] flex items-center'
              >
                ESTUDIOS
                <IoIosArrowDown className='ml-1' />
              </a>
            </li>
            <a
              href=''
              className='font-semibold hover:text-[#D8B820] flex items-center'
            >
              RECURSOS
              <IoIosArrowDown className='ml-1' />
            </a>
            <li>
              <a
                href=''
                className='font-semibold hover:text-[#D8B820] flex items-center'
              >
                PROYECTOS
                <IoIosArrowDown className='ml-1' />
              </a>
            </li>
            <li>
              <a
                href='https://donate.alandalusia.org/en/?_ga=2.81258388.2082188101.1740519174-1895838032.1693037145'
                className='font-semibold hover:text-[#D8B820]'
              >
                DONAR
              </a>
            </li>
            <li>
              <a
                href='https://instituto.alandalusia.education/'
                className='font-semibold hover:text-[#D8B820]'
              >
                CAMPUS VIRTUAL
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default NavBar
