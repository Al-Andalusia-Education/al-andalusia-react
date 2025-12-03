import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className='flex justify-center items-center py-2 text-sm bg-[#357c6f] text-white'>
      <div className='flex justify-between items-center max-w-7xl w-full px-4'>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='tel:+34641311309' className='flex items-center'>
              <span>+34 641 31 13 09</span>
              <span className='ml-2 px-1 rounded bg-green-500 text-white text-xs font-bold'>
                WhatsApp
              </span>
            </a>
          </li>
          <li>
            <a
              href='https://alandalusia.org/contacto/'
              className='flex items-center'
            >
              <span>Contacto</span>
            </a>
          </li>
          <li>
            <a
              href='https://instituto.alandalusia.education/'
              className='flex items-center'
            >
              <span>Campus Virtual</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className='flex space-x-3 text-base'>
        <a
          href='https://www.facebook.com/alandalusia.edu'
          className='hover:text-blue-600'
        >
          <FaFacebookF className='text-white' />
        </a>
        <a href='https://x.com/AlAndalusiaEdu' className='hover:text-blue-600'>
          <FaXTwitter className='text-white' />
        </a>
        <a
          href='https://www.youtube.com/c/AlAndalusiaEducation'
          className='hover:text-blue-600'
        >
          <IoLogoYoutube className='text-white text-lg' />
        </a>
        <a
          href='https://www.instagram.com/alandalusiauniversity/'
          className='hover:text-blue-600'
        >
          <FaInstagram className='text-white text-lg' />
        </a>
        <a
          href='https://www.tiktok.com/@al_andalusia'
          className='hover:text-blue-600'
        >
          <FaTiktok className='text-white' />
        </a>
        <a
          href='https://api.whatsapp.com/send/?phone=%2B34641311309&text&type=phone_number&app_absent=0'
          className='hover:text-blue-600'
        >
          <FaWhatsapp className='text-white text-lg' />
        </a>
      </div>
      </div>
    </div>
  )
}
export default TopBar
