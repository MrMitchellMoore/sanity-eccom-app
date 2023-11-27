import Hero from './components/Hero'
import Newest from './components/Newest'

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl lg:max-w-7xl'>
      <div className='pb-6 sm:pb-8 lg:pb-12'>
        <Hero />
        <Newest />
      </div>
    </main>
  )
}
