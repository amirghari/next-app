import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@prisma/client'

// const data: object[] = [
//   {
//     id: _id++,
//     name: 'Milk',
//     price: 2.99,
//   },
//   {
//     id: _id++,
//     name: 'Bread',
//     price: 1.99,
//   },
//   {
//     id: _id++,
//     name: 'Eggs',
//     price: 3.99,
//   },
// ]

export async function GET(reqest: NextRequest) {
  const products = await prisma.product.findMany()
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  })

  return NextResponse.json(newProduct, { status: 201 })
}
