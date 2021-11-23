import dotenv from 'dotenv';
import axios, { Method } from 'axios';
import qs from 'qs';

dotenv.config();

export default class OxfordAPIUtility {
    private baseUrl: string;
    private headers: any;
    private language: string;

    constructor() {
        this.baseUrl = process.env.OXFORD_DICTONARY_BASE_URL as string;
        this.language = 'en-us';
        this.headers = {
            'content-type': 'application/json',
            'app_id': process.env.OXFORD_DICTIONARY_APP_ID as string,
            'app_key': process.env.OXFORD_DICTIONARY_APP_KEY as string,
        }
    }

    /**
     * Make http request to Oxford API
     * @param path request path
     * @param method request method
     * @param body request body
     * @returns a Promise
     */
    private request = async (path: string, method: Method, body: any = {}) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: method,
                headers: this.headers,
                data: body,
                url: this.baseUrl + path,
            };
            try {
                const res = await axios(options);
                resolve(res.data);
            } catch (error) {
                reject(error);
            }
        }) 
    }

    /**
     * Fetch details by entries endpoint of oxford-api
     * See https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api
     * @param word search keyword
     * @returns a Promise
     */
    public getEntries = async (word: string) => await this.request(`/entries/${this.language}/${word}`, 'GET');

}