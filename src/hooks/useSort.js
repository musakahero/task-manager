import { useState } from 'react';

export const useSort = (initialValue, array, factorsInput) => {
    
    // sort parameters state, updated from select input value
    const [selectedSort, setSelectedSort] = useState(initialValue);
    //extract sort parameters by splitting
    const [sortFactor, sortOrder] = selectedSort.split('_');

    //perform sorting on a new array and return it to be mapped
    const sortedTasks = sortItems(array, sortOrder, sortFactor, factorsInput);

    return { selectedSort, setSelectedSort, sortedTasks };
}

// Sort Items function //TODO NOT CONSISTENT AFTER ADDING NEW TASK
const sortItems = (array, order, factor, factorsInput) => {
    /* Add sort factors as cases and sort order as If clauses under each case. Case string must match the object key string of the array item*/
    // switch (factor) {
    //     case 'title':
    //         if (order === 'asc') {
    //             array.sort((a, b) => (a.title).localeCompare(b.title));
    //         } else {
    //             array.sort((a, b) => (b.title).localeCompare(a.title));
    //         };
    //         break;
    //     case 'color':
    //         if (order === 'asc') {
    //             array.sort((a, b) => (a.color).localeCompare(b.color));
    //         } else {
    //             array.sort((a, b) => (b.color).localeCompare(a.color));
    //         };
    //         break;
    //     case 'isCompleted':
    //         if (order === 'asc') {
    //             array.sort((a, b) => a.isCompleted - b.isCompleted);
    //         } else {
    //             array.sort((a, b) => b.isCompleted - a.isCompleted);
    //         };
    //         break;
    //     default:
    //         // array.sort((a,b) => (a.title).localeCompare(b.title));
    //         break;
    // };
    const obj = {
        'text': () => {
            if (order === 'asc') {
                array.sort((a, b) => (a[factor]).localeCompare(b[factor]));
            } else {
                array.sort((a, b) => (b[factor]).localeCompare(a[factor]));
            };
        },
        'boolean': () => {
            if (order === 'asc') {
                array.sort((a, b) => a[factor] - b[factor]);
            } else {
                array.sort((a, b) => b[factor] - a[factor]);
            };
        }
    };

    obj[factorsInput[factor]]();
    return array;
};



