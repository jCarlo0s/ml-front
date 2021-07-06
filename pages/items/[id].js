import Head from 'next/head';
import Image from 'next/image';
import SearchBar from '../../components/SearchBar';
import styles from '../../styles/Items.module.scss';

export default function Items({ details }) {
    return (
        <div>
            <Head>
                <title>Mercado Libre México</title>
                <meta name="description" content="La comunidad de compra y venta online más grande de América Latina."/>
            </Head>
            <SearchBar />
            <div className={`${styles['details-container']} container`}>
                <div className={`${styles['results-container']} row`}>
                    <div className="col-md-9 d-flex justify-content-center relative">
                        <Image
                            src={details.picture}
                            width={680}
                            height={680}
                            alt={details.title}
                        />
                    </div>
                    <div className="col-md-3">
                        <p className={styles.conditions}>{details.condition} - {details.sold_quantity} vendidos</p>
                        <p className={styles.title}>{details.title}</p>
                        <p className={styles.price}>$ {details.price.amount}</p>
                        <div className="d-grid gap-2 col-10">
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <p className={styles['product-title']}>Descripción del producto</p>
                        <p className={styles['product-description']}>{details.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`http://127.0.0.1:9000/api/items/${context.params.id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    console.log
    return {
        props: {
            details: data
        },
    }
}