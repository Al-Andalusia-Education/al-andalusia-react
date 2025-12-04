import { IoIosArrowDown } from 'react-icons/io'
import Universidad from './Submenus_NavBar/Universidad'
import Estudios from './Submenus_NavBar/Estudios'
import Recursos from './Submenus_NavBar/Recursos'
import Proyectos from './Submenus_NavBar/Proyectos'

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
                <div className="absolute top-full left-0 w-full h-10"></div>
                LA UNIVERSIDAD
                <IoIosArrowDown className='ml-1' />
              </a>
              <Universidad />
            </li>
            <li className='relative group'>
              <a
                href=''
                className='font-semibold hover:text-[#D8B820] flex items-center'
              >
                <div className="absolute top-full left-0 w-full h-10"></div>
                ESTUDIOS
                <IoIosArrowDown className='ml-1' />
              </a>
              <Estudios />
            </li>
            <li className='relative group'>
            <a
              href=''
              className='font-semibold hover:text-[#D8B820] flex items-center'
            >
              <div className="absolute top-full left-0 w-full h-10"></div>
              RECURSOS
              <IoIosArrowDown className='ml-1' />
            </a>
            <Recursos />
            </li>
            <li className='relative group'>
              <a
                href=''
                className='font-semibold hover:text-[#D8B820] flex items-center'
              >
                PROYECTOS
                <div className="absolute top-full left-0 w-full h-10"></div>
                <IoIosArrowDown className='ml-1' />
              </a>
              <Proyectos />
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
