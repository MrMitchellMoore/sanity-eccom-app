export default function ErrorStripe() {
  return (
    <div className='mx-auto max-w-2xl py-10 md:max-w-7xl'>
      <h2 className='text-md mx-10 md:text-2xl'>
        <span className='bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent'>
          Opps!!!!
        </span>{' '}
        Something went{' '}
        <span className='bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent'>
          terribly
        </span>{' '}
        wrong 😩
      </h2>
    </div>
  )
}
