const Title = () => {
  return (
    <div
      className='relative flex justify-center items-center h-80 bg-cover bg-center'
      style={{ backgroundImage: "url('/Principal/principal.jpeg') " }}
    >
      <div className='absolute inset-0 bg-black opacity-10'></div>
      <h1 className='relative z-1 text-7xl  text-white'>
        Academia Al-Andalusia
      </h1>
    </div>
  )
}
export default Title
