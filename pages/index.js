import Head from 'next/head'
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mercado Libre México</title>
        <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
      </Head>
      <main>
        <SearchBar />
      </main>
    </div>
  )
}
