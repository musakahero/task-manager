import * as request from './requester';

const baseUrl = 'http://127.0.0.1:8090/api/collections/tasks/records';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result.items;
}
export const getOne = async (recordId) => {
    const result = await request.get(`${baseUrl}/${recordId}`);
    return result;
}

export const edit = async (recordId, data) => {
    const result = await request.patch(`${baseUrl}/${recordId}`, data);
    return result;
}

export const deleteItem = async (recordId) => {
    const result = await request.del(`${baseUrl}/${recordId}`, {});
    return result;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
};

// export const create = async (data, token) => {
//     const result = await request.post(baseUrl, data, token);
//     return result;
// }



// export const edit = async (recipeId, data, token) => {
//     const result = await request.put(`${baseUrl}/${recipeId}`, data, token);
//     return result;
// }


// export const getOwned = async (userId) => {
//     const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);
//     const result = await request.get(`${baseUrl}?where=${searchQuery}`);
//     return Object.values(result);
// };

// export const search = async (searchString, token) => {
//     const searchQuery = encodeURIComponent(`name LIKE "${searchString}"`);
//     const result = await request.get(`${baseUrl}?where=${searchQuery}`);
//     return result;
    
// }