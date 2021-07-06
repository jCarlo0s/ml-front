import Head from 'next/head';
import SearchBar from '../../components/SearchBar';
import Breadcrums from '../../components/Breadcrums';
import Results from '../../components/Results';
import styles from '../../styles/Items.module.scss';

export default function Items({ breadcrums, items }) {
    return (
        <div>
            <Head>
                <title>Mercado Libre México</title>
                <meta name="description" content="La comunidad de compra y venta online más grande de América Latina."/>
            </Head>
            <SearchBar />
            <div className={`container ${styles['breadcrum-container']}`}>
                <div className="row">
                    <div className={`${styles.breadcrums} col-md-12`}>
                        <Breadcrums breadcrums={breadcrums} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className={`${styles['results-container']} col-md-12`}>
                        <Results items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`http://127.0.0.1:9000/api/items?q=${context.query.search}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    console.log(data);
    return {
        props: {
            breadcrums: data.categories,
            items: data.items.slice(0, 4),
        },
    }
}