import { fullProduct } from '@/app/interface'
import { client, urlFor } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
//import ImageGallery from '@/app/components/ImageGallery'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { Star, Truck } from 'lucide-react'
import AddToBag from '@/app/components/AddToBag'
import CheckoutNow from '@/app/components/CheckoutNow'

async function getData(slug: string): Promise<fullProduct> {
  const query = groq`*[_type == "product" && slug.current == "${slug}"][0] {
            _id,
            price,
            name,
            description,
            "imageUrl": image[0].asset->url,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`

  const data = await client.fetch(query)
  return data
}

export default async function ProductPage({
  params
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <Image
            src={urlFor(data.imageUrl).url()}
            alt='photo'
            width={200}
            height={200}
            className='h-full w-full'
          />

          <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-500'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold text-gray-400 lg:text-3xl'>
                {data.name}
              </h2>
            </div>
            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button color='secondary'>
                <span className='text-lg'>4.5</span>
                <Star height={16} width={16} />
              </Button>
              <span className='text-sm text-gray-300 transition duration-100'>
                {Math.floor(Math.random() * 100 + 1)} ratings
              </span>
            </div>

            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-md font-bold text-blue-300 md:text-2xl'>
                  ${data.price}
                </span>

                <span className='text-md mb-0.5 text-red-500 line-through'>
                  ${Math.fround(data.price + 30).toFixed(2)}
                </span>
              </div>

              <span className='text-sm text-gray-500'>
                Incl. Vat plus shipping...
              </span>
            </div>
            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <Truck />
              <span className='text-sm'>2-4 Day Shipping</span>
            </div>

            <div className='mb-6 flex gap-2.5'>
              <AddToBag
                key={data._id}
                currency='USD'
                description={data.description}
                image={data.imageUrl}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency='USD'
                description={data.description}
                image={data.imageUrl}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
            </div>
            <p className='mb-6 mt-6 tracking-wide text-gray-400'>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
