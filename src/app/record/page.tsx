import Image from 'next/image'
import logo from '@/../public/banco-pichincha-logo.png'
import './styles.css'
import RegisterProduct from '@/components/RegisterProduct'

const Record = (): JSX.Element => {
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
      <RegisterProduct />
    </main>
  )
}

export default Record
