import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Search = ({
    onSearchHandler
}) => {
    const [openSearch, setOpenSearch] = useState(false);
    


    return (
        <div className={styles["search-container"]}>
            {openSearch ?
                <>
                    <form onSubmit={onSearchHandler} autoFocus={true}>
                        <input type="text" name='search' className={styles["search-input"]} />
                        <button type='submit'
                            className={styles["btn-submit"]}>
                            <FontAwesomeIcon icon={faSearch} 
                            className={styles["search-icon"]} />
                        </button>
                    </form>
                </>
                :
                <FontAwesomeIcon icon={faSearch} className={styles["search-icon-init"]} onClick={() => setOpenSearch(prev => !prev)} />
            }
        </div>
    )
}