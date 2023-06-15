import '../styles.css'
import { values } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import logo from '@/../public/banco-pichincha-logo.png'
import EditProduct from '@/components/EditProduct'

const getProducts = async (): Promise<any> => await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
  cache: 'no-store',
  headers: {
    authorId: '123'
  }
}).then((res: any) => res.json())

const EditProductPage = async ({ params }: { params: { idProduct: string } }): Promise<any> => {
  const data = await getProducts()
  const productToEdit = data.filter((product: values) => product.id === params.idProduct)

  return (
    <main className='record-main'>
      <header className='record-header'>
        <Image
          src={logo}
          alt='Banco Pichincha'
          width={180}
          height={38}
        />
      </header>
      <EditProduct data={productToEdit[0]} />
    </main>
  )
}

export default EditProductPage
