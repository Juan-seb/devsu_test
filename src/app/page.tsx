import Image from 'next/image'
import logo from '@/../public/banco-pichincha-logo.png'
import './styles.css'
import DashboardProducts from '@/components/DashboardProducts'

const getProducts = async (): Promise<any> => await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
  cache: 'no-store',
  headers: {
    authorId: '123'
  }
}).then((res: any) => res.json())

const Home = async (): Promise<any> => {
  // const { data }: { data: values[] } = await getProducts()
  const data = await getProducts()

  return (
    <main className='home-main'>
      <header className='home-header'>
        <Image
          src={logo}
          alt='Banco Pichincha'
          width={180}
          height={38}
        />
      </header>
      <DashboardProducts products={data} />
    </main>
  )
}

export default Home
