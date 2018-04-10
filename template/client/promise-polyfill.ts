import Promise from 'promise-polyfill';

declare global {
    interface Window { Promise: any; }
}
window.Promise = window.Promise || Promise;
