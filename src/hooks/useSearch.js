import {useState} from 'react';

export const useSearch = (array) => {
    
    const [searchParam, setSearchParam] = useState('');

    const foundItems = array.filter(i => i.title.includes(searchParam));

    const onSearchHandler = (e) => {
        e.preventDefault();
        setSearchParam(e.target.search.value);
    }
    return {foundItems, onSearchHandler};
}