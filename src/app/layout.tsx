import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', display: 'swap', style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'Prueba Devsu',
  description: 'Prueba Tecnica Devsu'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>{metadata.title}</title>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
