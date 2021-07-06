import Image from 'next/image';
import styles from '../../styles/Results.module.scss';
import Link from 'next/link'
import FreeShipingIcon from '../../public/ic_shipping.png';

const Results = ({ items }) => {
    return items.map((item) => (
        <Link href={`/items/${item.id}`}>
            <div className={styles['result-item']}>
                <div className={styles.image}>
                    <Image width={180} height={180} src={item.picture} alt="Mercado Libre" />
                </div>
                <div className={styles['list-details']}>
                    <p className={styles.price}>
                        $ {item.price.amount} {item.price.currency}
                        {item.free_shipping && <Image src={FreeShipingIcon}  />}
                    </p>
                    <p className={styles.title}>
                        {item.title}
                    </p>
                </div>
                <div>
                    <p className={styles.location}>
                        {item.location}
                    </p>
                </div>
            </div>
        </Link>
    ));
}

export default Results;