/* Add factors as cases and order as If clauses*/

export const sortItems = (array, order, factor) => {
    switch(factor){
        case 'title':
            if(order==='asc'){
                array.sort((a,b) => (a.title).localeCompare(b.title));
            } else {
                array.sort((a,b) => (b.title).localeCompare(a.title));
            };
        break;
        case 'color':
            if(order==='asc'){
                array.sort((a,b) => (a.color).localeCompare(b.color));
            } else {
                array.sort((a,b) => (b.color).localeCompare(a.color));
            };
            break;
        default:
            // array.sort((a,b) => (a.title).localeCompare(b.title));
            break;
    };
    return array;
};

// const [sortFactor, sortOrder] = sortType.split('_'); 