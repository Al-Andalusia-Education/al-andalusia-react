const Newsletter = () => {
  return (
    <div className='bg-[#333c4e] text-white'>
      <div className='max-w-5xl mx-auto px-4 py-12 flex flex-col items-center text-center'>
        {/* TEXTO */}
        <h4 className='text-base sm:text-base md:text-base leading-relaxed max-xl mb-8'>
          No Te Pierdas Nada,{' '}
          <span className=' text-[#D8B820] border-b-2 border-[#36776c]'>
            Subscríbete A Nuestra Newsletter
          </span>{' '}
          Y Mantente Informado De Todo Lo Que Pasa En Al-Andalusia
        </h4>
        {/* FORMULARIO */}
        <form className='w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-3'>
          <input
            type='email'
            placeholder='Email *'
            className='bg-white text-black px-4 py-3 border-b border-[#D8B820] w-full grow md:flex-1'
            required
          />
          <button
            type='submit'
            className='w-full sm:w-auto md:w-64 px-6 py-3 bg-[#D8B820] text-white rounded-r-md hover:bg-[#36776c] transition duration-200 rounded-lg font-bold'
          >
            SUBSCRÍBETE AHORA
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
