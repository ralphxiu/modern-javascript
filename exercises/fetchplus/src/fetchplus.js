import { default as _fetch } from 'node-fetch';

const promiseStore = {};
// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch) {
    if (promiseStore.hasOwnProperty(url)) {
        return promiseStore[url];
    }
    let req = fetch(url, options);
    promiseStore[url] = req;
    return req;
}
