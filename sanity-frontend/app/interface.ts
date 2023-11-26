export interface simplifiedProduct {
  _id: string
  imageUrl: string
  price: number
  slug: string
  categoryName: string
  name: string
}

export interface heroImage {
  image1: string
  image2: string
}

export interface fullProduct {
  _id: string
  images?: any
  imageUrl?: string
  price: number
  slug: string
  categoryName: string
  name: string
  description: string
}

export interface ProductCart {
  name: string
  description: string
  price: number
  currency: string
  image: any
}
