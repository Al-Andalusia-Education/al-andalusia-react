const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h2 className='text-4xl text-[#357c6f] tracking-tight'>
        Comprometidos Con La Excelencia
      </h2>
      <p className='my-10 mx-140 tracking-wide font-light leading-relaxed'>
        En la Academia Al-Andalusia, nos dedicamos a ofrecer una educación de
        alta calidad que fomente el desarrollo académico, espiritual y cultural
        de nuestros estudiantes. Nuestro enfoque educativo está diseñado para
        adaptarse a las necesidades de los alumnos en las diferentes etapas de
        su formación: infantil, primaria, secundaria y bachillerato.
      </p>
      <h3 className='font-bold text-[#357c6f] text-2xl'>
        Modalidades: Online y Presencial
      </h3>
      <p className=' mx-140 tracking-wide font-light leading-relaxed'>
        En la Academia Al-Andalusia, ofrecemos dos modalidades de enseñanza para
        adaptarnos a las necesidades de nuestras familias:
      </p>
      <ul className='list-disc my-10 mx-140 font-light leading-relaxed'>
        <li className='mb-5'>
          Clases Presenciales: Disponibles para estudiantes de infantil,
          primaria, secundaria y bachillerato en la provincia de Sevilla. Estas
          clases permiten una inmersión completa en el aprendizaje islámico,
          proporcionando un entorno enriquecedor donde los alumnos pueden
          interactuar y aprender de manera directa con sus profesores y
          compañeros.
        </li>
        <li>
          Clases Online: Ofrecemos un programa online dirigido a estudiantes de
          primaria y secundaria, asegurando que todos tengan acceso a una
          educación islámica de calidad, sin importar su ubicación.
        </li>
      </ul>
    </div>
  )
}

export default Info
