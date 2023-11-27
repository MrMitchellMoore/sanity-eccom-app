import { groq } from 'next-sanity'
import { client, urlFor } from '../lib/sanityConfig'
import { simplifiedProduct } from '../interface'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

async function getData(category: string): Promise<simplifiedProduct[]> {
  const query = groq`
    *[_type == "product" && category->name == "${category}"]{
        _id,
        "imageUrl": image[0].asset->url,
        "categoryName": category->name,
        "slug": slug.current,
        name,
        price
    }`

  const data = await client.fetch(query)
  return data
}

export default async function CategoryPage({
  params
}: {
  params: { category: string }
}) {
  const data = await getData(params.category)
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Our Products for <span>{params.category}</span>
          </h2>
          <div />
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
