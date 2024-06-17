import { Billboard } from "@/components/Billboard"
import { Container } from "@/components/ui/container"
import { Filter } from "./_components/Filter"
import { MobileFilters } from "./_components/MobileFilters"
import { NoResults } from "@/components/ui/no-result"
import { ProductCard } from "@/components/ui/product-card"
import { getCategoryById } from "@/actions/get-category"
import { getColors } from "@/actions/get-colors"
import { getProducts } from "@/actions/get-products"
import { getSizes } from "@/actions/get-sizes"

export const reavlidate = 0

interface CategoryIdPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string
    }
}

export default async function CategoryIdPage({ params, searchParams }: CategoryIdPageProps) {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const colors = await getColors()
    const sizes = await getSizes()
    const category = await getCategoryById(params.categoryId)
    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />+
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>

                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    />

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
