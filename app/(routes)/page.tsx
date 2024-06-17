import { Billboard } from '@/components/Billboard'
import { Container } from '@/components/ui/container'
import { ProductList } from '@/components/ProductList';
import { getBillboards } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

export default async function HomePage() {
  const product = await getProducts({ isFeatured: true })
  const billboard = await getBillboards("cc21a79e-2dd7-4ef1-afa6-a7976b88eece");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={product} />
        </div>
      </div>
    </Container>
  )
}
