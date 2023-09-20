import CONFIG from '../../env.json';
import RNFetchBlob from 'rn-fetch-blob';

export const getFetch = async (target, token) => {
    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'GET',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers
        );
        return JSON.parse(response.data);
    } catch (e) {
        console.log(e);
        return { status: 'error', code: 504 };
    }
};

export const postFetch = async (target, data, token) => {
    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'POST',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers,
            JSON.stringify(data)
        );

        return JSON.parse(response.data);
    } catch (e) {
        return { status: 'error', code: 504 };
    }
};

export const formFetch = async (target, data, token) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'POST',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers,
            data
        );
        return JSON.parse(response.data);
    } catch (e) {
        return { status: 'error', code: 504 };
    }
};

export const formFetchFile = async (target, data, token) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'POST',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers,
            data
        );
        return JSON.parse(response.data);
    } catch (e) {
        return { status: 'error', code: 504 };
    }
};

export const putFetch = async (target, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'PUT',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers,
            JSON.stringify(data)
        );
        return JSON.parse(response.data);
    } catch (e) {
        return { error: 'Сервертэй холбогдож чадсангүй', status: 500 };
    }
};

export const deleteFetch = async (target, token) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: 'Bearer ' + token }),
    };

    try {
        const response = await RNFetchBlob.fetch(
            'DELETE',
            encodeURI(`${CONFIG.API_URL}/api${target}`),
            headers,
            ''
        );
        return JSON.parse(response.data);
    } catch (e) {
        return { error: 'Сервертэй холбогдож чадсангүй', status: 500 };
    }
};
