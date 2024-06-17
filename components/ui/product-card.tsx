'use client'

import { Expand, ShoppingCart } from "lucide-react"

import { Currency } from "./currency"
import { IconButtom } from "@/components/ui/icon-buttom"
import Image from "next/image"
import { Product } from "@/types"
import { useRouter } from "next/navigation"

interface ProductCardProps {
    data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/products/${data?.id}`)
    }
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center ">
                        <IconButtom
                            onClick={() => { }}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButtom
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>

            <div className="">
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <Currency value={data.price} />


            </div>

        </div >
    )
}
