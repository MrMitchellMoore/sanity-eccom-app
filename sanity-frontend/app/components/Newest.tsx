import { groq } from 'next-sanity'
import { client, urlFor } from '../lib/sanity'
import { simplifiedProduct } from '../interface'
import { Card, CardBody, CardFooter, Link } from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

async function getData(): Promise<simplifiedProduct[]> {
  const query = groq`*[_type == "product"][0..3] | order(category->name desc){
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": image[0].asset->url
    }`

  const data = await client.fetch(query)
  return data
}

export default async function Newest() {
  const data = await getData()
  return (
    <div className='w-full'>
      <div className='max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-full'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Our Newest Products
          </h2>
          <Link className='flex items-center gap-x-1 text-primary' href='/all'>
            See all{' '}
            <span>
              <ArrowRight className='h-6 w-6' />
            </span>
          </Link>
        </div>
        <div className='mt-6 grid w-full grid-cols-1 content-between gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10'>
          {data.map(product => (
            <div key={product._id} className='group relative'>
              <Link href={`/product/${product.slug}`}>
                <Card className='h-full w-full'>
                  <CardBody className='h-full w-full'>
                    <div className='aspect-square h-full w-full overflow-hidden rounded-md group-hover:opacity-75'>
                      <Image
                        src={urlFor(product.imageUrl).url()}
                        alt={product.name}
                        priority
                        width={500}
                        height={500}
                        className='h-full w-full object-cover'
                      />
                    </div>
                  </CardBody>
                  <CardFooter className='flex w-full flex-col items-start'>
                    <p className='md:text-md text-sm'>{product.name}</p>
                    <div className='text-md mb-2 flex w-full justify-between'>
                      <p className='text-blue-500'>${product.price}</p>
                      <p>{product.categoryName}</p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
