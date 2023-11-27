import { Button, Link } from '@nextui-org/react'
import { CheckCheck } from 'lucide-react'

export default function stripeSuccess() {
  return (
    <div className='h-full'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <CheckCheck className='mx-auto my-6 h-16 w-16 text-green-600' />
        <div className='text-center'>
          <h3 className='text-center text-base font-semibold text-green-700 md:text-2xl'>
            Payment Succeeded!
          </h3>
          <p className='my-2 text-gray-400'>
            Thank you for your purchase, We hope you enjoy it!
          </p>
          <Button as={Link} href='/' color='secondary'>
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}
