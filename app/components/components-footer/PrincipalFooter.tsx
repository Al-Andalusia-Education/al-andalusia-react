import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'

const PrincipalFooter = () => {
  return (
    <div className='bg-[#357c6f] text-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10'>
        {/* LOGO + TEXTO */}
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left'>
          <div className='bg-white rounded-2xl w-28 h-20 md:w-36 md:h-24 flex items-center justify-center'>
            <img
              src='logo-al-andalusia.png'
              alt='Logo Al-Andalusia'
              className='w-20 h-20 object-contain'
            />
          </div>
          <h3 className='text-lg md:text-xl'>
            Reviving the Legacy, Building the Future
          </h3>
        </div>

        {/* SEPARADOR */}
        <div className='border-t border-[rgba(62,70,81,0.6)] my-10'></div>

        {/* CONTENIDO */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8'>
          {/* PRIMER BLOQUE */}
          <div className='lg:col-span-3'>
            <h4 className='font-semibold'>Al-Andalusia University</h4>
            <div className='w-10 h-0.5 bg-[#ee4343] my-2'></div>

            <p className='text-sm  font-thin leading-loose mt-8 tracking-wider'>
              La Universidad de Al-Andalucía se dedica a la excelencia en la
              enseñanza, el aprendizaje y la investigación, cultivando líderes
              en múltiples disciplinas que influyen en el mundo a través de la
              ética, la fe, y la compasión. Aspiramos a transmitir conocimiento,
              inspirar corazones y empoderar mentes—iluminando un camino de
              servicio y crecimiento para las generaciones venideras.
            </p>
            <div className='flex justify-center md:justify-center gap-3 my-12'>
              <div className='bg-[#54c7b3] flex justify-center items-center w-8 h-8 hover:bg-red-500 transition duration-200'>
                <a
                  href='https://www.facebook.com/alandalusia.edu'
                  target='_blank'
                >
                  <FaFacebookF className='text-white' />
                </a>
              </div>
              <div className='bg-[#54c7b3] flex justify-center items-center w-8 h-8 hover:bg-red-500 transition duration-200'>
                <a
                  href='https://www.youtube.com/c/AlAndalusiaEducation'
                  target='_blank'
                >
                  <IoLogoYoutube className='text-white' />
                </a>
              </div>
              <div className='bg-[#54c7b3] flex justify-center items-center w-8 h-8 hover:bg-red-500 transition duration-200'>
                <a
                  href='https://www.instagram.com/alandalusiauniversity/'
                  target='_blank'
                >
                  <FaInstagram className='text-white' />
                </a>
              </div>
              <div className='bg-[#54c7b3] flex justify-center items-center w-8 h-8 hover:bg-red-500 transition duration-200'>
                <a
                  href='https://api.whatsapp.com/send/?phone=%2B34641311309&text&type=phone_number&app_absent=0'
                  target='_blank'
                >
                  <FaWhatsapp className='text-white' />
                </a>
              </div>
            </div>
          </div>

          {/* SEGUNDO BLOQUE */}
          <div>
            <h4 className='font-semibold text-2xl'>Estudios</h4>
            <div className='w-10 h-0.5 bg-[#ee4343] my-2'></div>
            <ul className='mt-4 space-y-2 font-thin'>
              <li>
                <a href='https://alandalusia.org/esenciales/'>
                  Cursos Esenciales 2025/26
                </a>
              </li>
              <li>
                <a href='https://alandalusia.org/diplomas/'>Diplomas</a>
              </li>
              <li>
                <a href='https://alandalusia.org/grados/'>Grados</a>
              </li>
              <li>
                <a href='https://alandalusia.org/testimonios/'>Testiomonios</a>
              </li>
              <li>
                <a href='https://alandalusia.org/becas/'>Solicitud De Becas</a>
              </li>
              <li>
                <a href='https://instituto.alandalusia.education/'>
                  Instituto Superior
                </a>
              </li>
              <li>
                <a href='https://alandalusia.org/academia-al-andalusia/'>
                  Academia (4-16 Años)
                </a>
              </li>
              {/*Lleva a la misma página*/}
            </ul>
          </div>

          {/* TERCER BLOQUE */}
          <div>
            <h4 className='font-semibold text-2xl'>Proyectos</h4>
            <div className='w-10 h-0.5 bg-[#ee4343] my-2'></div>
            <ul className='mt-4 space-y-2 font-light'>
              <li>
                <a href='https://alandalusia.org/consejo-estudiantil/'>
                  Consejo Estudiantil
                </a>
              </li>
              <li>
                <a href='https://copervai.alandalusia.org/?_gl=1%2Agk72km%2A_ga%2AODg3MjM4MTQxLjE3NTgyOTc2NTE.%2A_ga_CXSZ6BKNQ3%2AczE3NjUyODAzNzQkbzEzJGcxJHQxNzY1MjgwNTMzJGo0MSRsMCRoMA..%2A_ga_TSNH8P2PTE%2AczE3NjUyODAzNzQkbzEzJGcxJHQxNzY1MjgwNTMzJGo0MCRsMCRoMA..'>
                  COPERVAI
                </a>
              </li>
              <li>
                <a href='https://alandalusia.org/ciiha/'>CIIHA</a>
              </li>
              <li>
                <a href='https://alandalusia.org/esuna/'>ESUNA</a>
              </li>
              <li>
                <a href='https://www.instagram.com/alandalusia_for_humanity/#'>
                  Al-Andalusia For Humanity
                </a>
              </li>
              <li>
                <a href='https://alandalusia.org/voluntariado/'>Voluntariado</a>
              </li>
            </ul>
          </div>

          {/* RECURSOS */}
          <div>
            <h4 className='font-semibold text-2xl'>Recursos</h4>
            <div className='w-10 h-0.5 bg-[#ee4343] my-2'></div>
            <ul className='mt-4 space-y-2 font-light'>
              <li>
                <a href='https://alandalusia.org/noticias-y-eventos/'>
                  Noticias
                </a>
              </li>
              <li>
                <a href='https://alandalusia.org/book-publishers/'>Tienda</a>
              </li>
              <li>
                <a href='https://alqurtubia.com/'>Al-Qurtubia</a>
              </li>
              <li>
                <a href='https://alandalusia.org/calendario/'>
                  Eventos Al-Andalusia
                </a>
              </li>
              <li>
                <a href='https://drive.google.com/file/d/1gvAOVtoDmgpv1i0xU2AzUe12FCAIWsnP/edit'>
                  Cartel Del Campus
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className='text-xs text-center text-white mt-10'>
          © Copyright 2013 – 2025 | Universidad Al-Andalusia | Todos los
          derechos reservados | Todas las donaciones son deducibles de
          impuestos. Nuestro número de registro es 17979
        </p>
      </div>
    </div>
  )
}

export default PrincipalFooter
