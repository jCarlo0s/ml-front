import Image from 'next/image';
import { useRouter } from 'next/router';
import MlLogo from '../../public/Logo_ML@2x.png.png';
import SearchIcon from '../../public/ic_Search.png';
import styles from '../../styles/SearchBar.module.scss';
import React, { useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const goToSearch = () => {
    if (term) {
      router.push(`/items?search=${term}`);
    }
  }

  return (
    <div className={styles.headerbar}>
        <div className="container">
          <div className="row">
            <div className="col-md-1 d-flex justify-content-center">
              <Image width={60} height={40} src={MlLogo} alt="Mercado Libre" />
            </div>
            <div className="col-md-11">
              <div className="input-group">
                <input
                  className={`form-control ${styles.searchInput}`}
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  value={term}
                  onChange={handleChange}/>
                <button onClick={goToSearch} type="button" className={`d-flex align-items-center btn btn-outline-secondary ${styles.searchButton}`}>
                    <Image src={SearchIcon} alt="Nunca dejes de buscar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );  
};

export default SearchBar;