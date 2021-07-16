import axios from 'axios';
import qs from 'qs';

const isProduction = false;

export const KEY_ETH = 'NEYUDDVT6K46JEIWPIHIU2PXR5VIKUZB7H';
export const BaseURL =  'https://summarizer.co/api@0.1/';

axios.defaults.baseURL = `${BaseURL}`;
axios.defaults.timeout = 30000;
axios.interceptors.request.use(request => {
    // console.log('Starting Request', JSON.stringify(request))
    return request
})

axios.interceptors.response.use(
    config => {
        // console.log('confing request:', config)
        return Promise.resolve(config);
    },
    async error => {
        // console.log('confing request:', error)
        return new Promise((resolve, reject) => {
            reject(error);
        });
    },
);

const handleError = error => {
    const { response } = error || {};
    // console.log('handleError:', error)
    if (response) {
        const { status, data } = response;
        return data;
    }

    return error;
};

const preprocessResponse = result => {
    const { message, data } = result || {};
    if (message === 'success') {
        return data;
    }
    return result;
};

export default class RequestHelper {
    static async getHeader() {
        const timeStamp = new Date().getTime();     
        return {
            'Content-Type': 'application/json',
            timeStamp,
        };
    }

    static async getHeaderCheckRegister() {
        return {
            'Content-Type': 'application/json',
        };
    }

    static async get(url, params, header, log = false) {
        const headerNew = header ? header : await this.getHeader();
        const axiosRequest = axios
            .get(url, {
                headers: headerNew,
                params,
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                },
            });
        if (log) {
            // console.log('request get:', axiosRequest);
        }
        return axiosRequest
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

    static async post(url, data, log = false) {
        // const header = await this.getHeader();
        console.log('data',data)
        const option = {
            method: 'post',
            url,
            // headers: header,
            data,
        };
        const request = axios(option);
        if (log) {
            console.log('=============post====================');
            console.log('option:', option);
            console.log('request:', request);
            console.log('====================================');
        }
        return request
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                if (log) {
                    console.log('post:', JSON.stringify(e));
                }
                throw handleError(e);
            });
    }

    static async put(apiUrl, data) {
        return axios({
            method: 'put',
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

    static async  checkHead(link) {
        try {
            const e = await axios.head(link);
            // console.log('e:', e ? e : null);
            return true;
        } catch (error) {
            return false;
        }
    }

    static async delete(apiUrl, data) {
        return axios({
            method: 'delete',
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

}

